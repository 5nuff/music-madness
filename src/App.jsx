import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Artists from './components/Artists'
import { declareTypeAlias } from '@babel/types'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={Artists}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App
