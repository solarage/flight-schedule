import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FlightsInfo.css';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import FlightTable from '../../components/FlightTable/FlightTable';
import { isFuzzy } from '../../helpers/helpers';
import arrival from '../../api/arrival.json';
import departure from '../../api/departure.json';

class FlightsInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            data: null,
            direction: ""
        }
    }

    componentWillMount() {  
        const { routeProps } = this.props;
        let url = routeProps.match.path.slice(1);
        let flightData = (url === "arrival") ? 
                            arrival.schedule :
                        (url === "departure") ? 
                            departure.schedule :
                           isFuzzy(departure.schedule) 
        this.initialData = flightData;
        this.setState({ 
            data: this.initialData,
            direction: url
        });   
    }

    updateData = (newData) => {
      this.setState(newData)
    }
  
    handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        const filter = this.initialData.filter( (flight) => {
            return flight.thread.number.toLowerCase().includes(value);
        });
  
        this.updateData({
            search: value,
            data: filter
        })
    }

    render() {
        const { title } = this.props;
        return(
            <div>
                <Header title={title} />
                <div className="flights-info-wrapper">
                    <div className="flights-info">
                        <Search searchFlight={this.handleSearch} />
                        <Link to="/">
                            <Button name="Назад"/>
                        </Link>
                    </div>
                    <FlightTable 
                        data={this.state.data} 
                        direction={this.state.direction} 
                        update={this.updateData} 
                    />
                </div>
            </div>
        )
    }

}

export default FlightsInfo;