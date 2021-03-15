import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import { Container } from 'react-bootstrap';
import { Header } from './shared/Header';
import RentalListing from './components/rental/rental-listing/RentalListing';
import RentalDetail from './components/rental/rental-detail/RentalDetail';

const store = require('./reducers').init();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>
            <Container>
              <Route exact path="/" render={() => { return <Redirect to='rentals' /> }} />
              <Route exact path="/rentals" component={RentalListing} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </Container>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
