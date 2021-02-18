import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Pagepokemon from './Components/Content/Pagepokemon'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        exact path='/pokemonAPI'
        component={App}
      />
      <Route
        exact
        path='/pokemonAPI/:name/'
        component={Pagepokemon}
      />
      <Redirect
        from='/'
        to='/pokemonAPI'
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);