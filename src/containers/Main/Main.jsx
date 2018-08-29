import React, { Component } from 'react';
import arrIcon from '../../images/plane_arr.png';
import depIcon from '../../images/plane_dep.png';
import delIcon from '../../images/plane_delayed.png';
import './Main.css';

import Header from '../../components/Header/Header';
import FlightCard from '../../components/FlightCard/FlightCard';

class Main extends Component {

  render() {
    return (
      <div className="main-wrapper">
          <Header title="Расписание авиарейсов аэропорта Шереметьево (SVO)"/>
          <div className="flight-cards">
            <FlightCard flightName="Прилёт" link="/arrival" path={arrIcon} />
            <FlightCard flightName="Вылет" link="/departure" path={depIcon} />
            <FlightCard flightName="Задержанные" link="/delayed" path={delIcon} />
          </div>
      </div>
    );
  }
}

export default Main;
