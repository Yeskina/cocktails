import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './coktails.scss'

const Cocktails = () => {
  const [data, setData] = useState([])
  let { idDrink } = useParams()

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((response) => response.json())
      .then((result) => setData(result.drinks))
      .catch((error) => console.error(error))
  }, [idDrink])

  return (
    <div>
      {data.map(
        ({
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strDrink,
          strDrinkThumb,
          strInstructions,
          idDrink,
        }) => {
          const ingredients = []

          ingredients.push(
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15
          )
          ingredients.filter((ingredient) => (ingredient !== null ? ingredient : null))
          return (
            <div key={idDrink} className="cocktail-container">
              <div className="small-container">
                <div className="image-container">
                  <div className="titles">{strDrink}</div>
                  <img className="cocktails-image" alt="cocktail" src={strDrinkThumb}></img>
                </div>
                <div className="ingredients-container">
                  <div className="titles">Ingredients</div>
                  <div className="ingredients">

                    {ingredients.map((ingredient) => {
                      if (ingredient !== null) {
                        return (
                          <div className="cocktail-signature" key={ingredient}>
                          <img
                            alt="ingredients"
                            src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                          ></img>
                          <div className="description">{ingredient}</div>
                          </div>
                        )
                      }
                    })}
                   </div>
                 
                </div>
              </div>
              <div className="instruction">
                <div className="ins">
                <h3>Instructions</h3>
                <div>{strInstructions}</div>
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
export default Cocktails
