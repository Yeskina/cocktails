import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Cocktails from './components/cocktails/cocktails'

import './App.scss'

const App = () => {
  const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then((response) => response.json())
        .then((result) => setData(result.drinks))
        .catch((error) => console.error(error))
    }, [])

    return (
      <div className="main-container">
        <div className="container">
          {data.map(({ strDrink, strDrinkThumb, idDrink }) => {
            return (
              <div key={idDrink} className="cocktails">
                <div className="title">{strDrink}</div>
                <Link to={`/cocktail/${idDrink}`}>
                  <img src={strDrinkThumb} alt="cocktail"></img>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <HashRouter>
      <nav className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/cocktail/:idDrink">
          <Cocktails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
