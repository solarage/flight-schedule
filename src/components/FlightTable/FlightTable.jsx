import React from 'react';

import './FlightTable.css';

import { getDateFormat } from '../../helpers/helpers';

const FlightTable = ({ data, direction }) => {

    const renderCells = (flight, index) => {
        const time = (direction === "arrival") ? 
            getDateFormat(flight.arrival) :
            getDateFormat(flight.departure);
            
        return(
            <tr key={index}>
                <td>{flight.thread.number}</td>
                <td>{flight.thread.carrier.title}</td>
                <td>{flight.thread.short_title}</td>
                <td>{time}</td>
                <td>{flight.terminal}</td>
                <td>{flight.is_fuzzy ? "ЗАДЕРЖАН" : "ОЖИДАЕТСЯ"}</td>
            </tr> 
        )
    }

    return(
        <div className="flight-table">
            <p className="main-comment">Данные представлены на {new Date().toLocaleDateString('ru-Ru')}</p>
            <table align="center" border="1" cellSpacing="0" cellPadding="5">
                <thead>
                    <tr>
                        <th>№ рейса</th>
                        <th>Авиакомпания</th>
                        <th>Маршрут</th>
                        <th>Время по расписанию</th>
                        <th>Терминал</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( (flight, index) => renderCells(flight, index) )}
                </tbody>
            </table>
        </div>
    )
}

export default FlightTable;