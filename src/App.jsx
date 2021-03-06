import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './containers/Main/Main';
import FlightsInfo from './containers/FlightsInfo/FlightsInfo';

class App extends Component {

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route 
            path="/arrival" 
            render={ (routeProps) => <FlightsInfo routeProps={routeProps} title="Прилёт" /> } 
          />
          <Route 
            path="/departure" 
            render={ (routeProps) => <FlightsInfo routeProps={routeProps} title="Вылет" /> } 
          />
          <Route 
            path="/delayed" 
            render={ (routeProps) => <FlightsInfo routeProps={routeProps} title="Задержанные" /> } 
          />
        </Switch>
      </div>
    )
  }

}

export default App;
