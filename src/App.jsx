import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Coktails from './components/coktails/coktails'

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
              <div key={idDrink} className="coctails">
                <div className="title">{strDrink}</div>
                <a href={`/coctail/${idDrink}`}>
                  <img src={strDrinkThumb} alt="coctail"></img>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <Router>
      <nav className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/coctail/:idDrink">
          <Coktails />
          </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
