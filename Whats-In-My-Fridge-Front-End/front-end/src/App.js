import React, { Component } from "react";
import Classes from './App.css';
import SearchBar from "./components/searchBar/searchBar";
import Recipe from './components/recipe/recipe';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      recipes: [
        {
            "id": 661447,
            "title": "Square Deviled Eggs",
            "image": "https://spoonacular.com/recipeImages/661447-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 1,
            "missedIngredients": [
                {
                    "id": 1017,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Cheese",
                    "name": "cream cheese",
                    "original": "Cream cheese",
                    "originalString": "Cream cheese",
                    "originalName": "Cream cheese",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1123,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "Hard boiled eggs",
                    "originalString": "Hard boiled eggs",
                    "originalName": "Hard boiled eggs",
                    "metaInformation": [
                        "hard",
                        "boiled"
                    ],
                    "meta": [
                        "hard",
                        "boiled"
                    ],
                    "extendedName": "cooked eggs",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                },
                {
                    "id": 10151,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Meat",
                    "name": "ham",
                    "original": "Ham",
                    "originalString": "Ham",
                    "originalName": "Ham",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/ham-whole.jpg"
                }
            ],
            "unusedIngredients": [],
            "likes": 25
        },
        {
            "id": 132462,
            "title": "English Muffins With Eggs, Cheese and Ham",
            "image": "https://spoonacular.com/recipeImages/132462-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 1,
            "missedIngredients": [
                {
                    "id": 18439,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Bakery/Bread",
                    "name": "english muffins",
                    "original": "2 english muffins",
                    "originalString": "2 english muffins",
                    "originalName": "english muffins",
                    "metaInformation": [
                        "english"
                    ],
                    "meta": [
                        "english"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/English-muffins.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1123,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "2 eggs",
                    "originalString": "2 eggs",
                    "originalName": "eggs",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                },
                {
                    "id": 10151,
                    "amount": 2.0,
                    "unit": "slices",
                    "unitLong": "slices",
                    "unitShort": "slice",
                    "aisle": "Meat",
                    "name": "ham",
                    "original": "2 slices ham",
                    "originalString": "2 slices ham",
                    "originalName": "ham",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/ham-whole.jpg"
                }
            ],
            "unusedIngredients": [],
            "likes": 2
        },
        {
            "id": 590704,
            "title": "Crisp Ham and Egg Cups",
            "image": "https://spoonacular.com/recipeImages/590704-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 2,
            "missedIngredients": [
                {
                    "id": 11297,
                    "amount": 4.0,
                    "unit": "servings",
                    "unitLong": "servings",
                    "unitShort": "servings",
                    "aisle": "Produce",
                    "name": "fresh parsley",
                    "original": "Fresh basil, scallions or parsley, optional",
                    "originalString": "Fresh basil, scallions or parsley, optional",
                    "originalName": "Fresh basil, scallions or parsley, optional",
                    "metaInformation": [
                        "fresh"
                    ],
                    "meta": [
                        "fresh"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
                },
                {
                    "id": 1102047,
                    "amount": 4.0,
                    "unit": "servings",
                    "unitLong": "servings",
                    "unitShort": "servings",
                    "aisle": "Spices and Seasonings",
                    "name": "salt and pepper",
                    "original": "Salt and pepper, to taste",
                    "originalString": "Salt and pepper, to taste",
                    "originalName": "Salt and pepper, to taste",
                    "metaInformation": [
                        "to taste"
                    ],
                    "meta": [
                        "to taste"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1123,
                    "amount": 4.0,
                    "unit": "large",
                    "unitLong": "larges",
                    "unitShort": "large",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "4 large eggs",
                    "originalString": "4 large eggs",
                    "originalName": "eggs",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                },
                {
                    "id": 10151,
                    "amount": 4.0,
                    "unit": "slices",
                    "unitLong": "slices",
                    "unitShort": "slice",
                    "aisle": "Meat",
                    "name": "ham",
                    "original": "4 slices Black Forest or Virginia ham",
                    "originalString": "4 slices Black Forest or Virginia ham",
                    "originalName": "Black Forest or Virginia ham",
                    "metaInformation": [
                        "black"
                    ],
                    "meta": [
                        "black"
                    ],
                    "extendedName": "black ham",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/ham-whole.jpg"
                }
            ],
            "unusedIngredients": [],
            "likes": 17705
        },
        {
            "id": 603131,
            "title": "Ham Fried Rice",
            "image": "https://spoonacular.com/recipeImages/603131-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 3,
            "missedIngredients": [
                {
                    "id": 20444,
                    "amount": 2.0,
                    "unit": "Bags",
                    "unitLong": "Bags",
                    "unitShort": "Bags",
                    "aisle": "Pasta and Rice",
                    "name": "rice",
                    "original": "2 Bags Steamfresh White Rice with Veggies- Cooked",
                    "originalString": "2 Bags Steamfresh White Rice with Veggies- Cooked",
                    "originalName": "Steamfresh White Rice with Veggies- Cooked",
                    "metaInformation": [
                        "white",
                        "with veggies- cooked"
                    ],
                    "meta": [
                        "white",
                        "with veggies- cooked"
                    ],
                    "extendedName": "white rice",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-white-rice.png"
                },
                {
                    "id": 1102047,
                    "amount": 4.0,
                    "unit": "servings",
                    "unitLong": "servings",
                    "unitShort": "servings",
                    "aisle": "Spices and Seasonings",
                    "name": "salt and pepper",
                    "original": "Salt and Pepper to Taste",
                    "originalString": "Salt and Pepper to Taste",
                    "originalName": "Salt and Pepper to Taste",
                    "metaInformation": [
                        "to taste"
                    ],
                    "meta": [
                        "to taste"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                    "id": 16124,
                    "amount": 4.0,
                    "unit": "servings",
                    "unitLong": "servings",
                    "unitShort": "servings",
                    "aisle": "Ethnic Foods;Condiments",
                    "name": "soy sauce",
                    "original": "Soy Sauce- Optional",
                    "originalString": "Soy Sauce- Optional",
                    "originalName": "Soy Sauce- Optional",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1123,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "2 Eggs",
                    "originalString": "2 Eggs",
                    "originalName": "Eggs",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                },
                {
                    "id": 10151,
                    "amount": 1.0,
                    "unit": "cup",
                    "unitLong": "cup",
                    "unitShort": "cup",
                    "aisle": "Meat",
                    "name": "ham",
                    "original": "1 cup Chopped Ham",
                    "originalString": "1 cup Chopped Ham",
                    "originalName": "Chopped Ham",
                    "metaInformation": [
                        "chopped"
                    ],
                    "meta": [
                        "chopped"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/ham-whole.jpg"
                }
            ],
            "unusedIngredients": [],
            "likes": 15
        },
        {
            "id": 121442,
            "title": "Dinner Tonight: Omelet Gramajo",
            "image": "https://spoonacular.com/recipeImages/121442-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 1,
            "missedIngredientCount": 5,
            "missedIngredients": [
                {
                    "id": 1034053,
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "unitLong": "tablespoons",
                    "unitShort": "Tbsp",
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "name": "extra virgin olive oil",
                    "original": "2 tablespoons extra virgin olive oil",
                    "originalString": "2 tablespoons extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
                },
                {
                    "id": 93681,
                    "amount": 4.0,
                    "unit": "slices",
                    "unitLong": "slices",
                    "unitShort": "slice",
                    "aisle": "Meat",
                    "name": "jamon iberico",
                    "original": "4 thin slices jamón ibérico (another serrano or proscuitto would also work)",
                    "originalString": "4 thin slices jamón ibérico (another serrano or proscuitto would also work)",
                    "originalName": "thin slices jamón ibérico (another serrano or proscuitto would also work)",
                    "metaInformation": [
                        "thin",
                        "(another serrano or proscuitto would also work)"
                    ],
                    "meta": [
                        "thin",
                        "(another serrano or proscuitto would also work)"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/proscuitto.jpg"
                },
                {
                    "id": 10011355,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "red potatoes",
                    "original": "2 red potatoes, about 6 ounces each, scrubbed",
                    "originalString": "2 red potatoes, about 6 ounces each, scrubbed",
                    "originalName": "red potatoes, about 6 ounces each, scrubbed",
                    "metaInformation": [
                        "red",
                        "scrubbed"
                    ],
                    "meta": [
                        "red",
                        "scrubbed"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/red-potatoes.jpg"
                },
                {
                    "id": 1102047,
                    "amount": 4.0,
                    "unit": "servings",
                    "unitLong": "servings",
                    "unitShort": "servings",
                    "aisle": "Spices and Seasonings",
                    "name": "salt and pepper",
                    "original": "salt and pepper",
                    "originalString": "salt and pepper",
                    "originalName": "salt and pepper",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                    "id": 4513,
                    "amount": 2.0,
                    "unit": "cups",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "name": "vegetable oil",
                    "original": "2 cups vegetable oil",
                    "originalString": "2 cups vegetable oil",
                    "originalName": "vegetable oil",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1123,
                    "amount": 4.0,
                    "unit": "large",
                    "unitLong": "larges",
                    "unitShort": "large",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "4 large eggs",
                    "originalString": "4 large eggs",
                    "originalName": "eggs",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 10151,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Meat",
                    "name": "ham",
                    "original": "ham",
                    "originalString": "ham",
                    "originalName": "ham",
                    "metaInformation": [],
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/ham-whole.jpg"
                }
            ],
            "likes": 0
        }
    ] }
  }

  gotRecipesHandler = async(passedRecipes) => {
    await this.setState({recipes: passedRecipes});
    console.log(this.state.recipes);
  };

  render() {

    let recipeDisplay = null;

    recipeDisplay = (
      <div>
        {this.state.recipes.map((recipe, index) => { 
        return <Recipe
          name={recipe.title} 
          image={recipe.image}
          key={recipe.id}
          />
        })}
      </div>
    );

    return (
      <div className={Classes.App}>
          <SearchBar
          passRecipes={this.gotRecipesHandler}
          ></SearchBar>
          {recipeDisplay}
      </div>
    );
  }
}

export default App;