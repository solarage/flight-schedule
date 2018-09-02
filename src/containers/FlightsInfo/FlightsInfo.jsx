import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FlightsInfo.css';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import FlightTable from '../../components/FlightTable/FlightTable';
import { checkPath } from '../../api/index';

class FlightsInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            data: null,
            direction: "",
            fetching: true
        }
    }

    componentDidMount() {
        const { routeProps } = this.props;
        let path = routeProps.match.path.slice(1);
        let newUrl = checkPath(path);

        this.fetchFlightsData(newUrl);

        this.setState({
            direction: path
        })
    }

    fetchFlightsData = (url) => {
        const infoMessage = 'To test REST API, this app uses the mocky.io service, which only supports HTTP requests. Necessary: Disable protection on this page for Mozilla Firefox (icon in the address bar) / Enable the loading of unsafe scripts for Google Chrome (icon in the address bar). Disable "HTTPS Everywhere" extension, if there is.';
        console.warn(infoMessage);

        let status = function(response) {
            if(response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response);
        }
    
        let json = function(response) {
            return response.json()
        }
    
        fetch(url)
            .then(status)
            .then(json)
            .then((data) => {
                console.log('data', data);
                let flightData = data.schedule;
                this.initialData = flightData;

                this.setState({
                    data: this.initialData,
                    fetching: false
                })

            })
            .catch(function(error) {
                console.log('error', error);
            })
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
        const preload = <p className="preload">ЗАГРУЗКА ДАННЫХ...</p>;
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
                    {
                        this.state.fetching ? 
                        preload :
                        <FlightTable 
                            data={this.state.data} 
                            direction={this.state.direction} 
                            update={this.updateData} 
                        />
                    }
                </div>
            </div>
        )
    }

}

export default FlightsInfo;