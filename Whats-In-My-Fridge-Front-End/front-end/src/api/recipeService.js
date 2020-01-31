import axios from 'axios';

const LOCAL_API = 'http://localhost:8080'
// const COOKBOOK_API = `${LOCAL_API}/cookbook/${INGREDIENT}`

const getRecipeFromIngredients = (ingredients) => axios.get(`${LOCAL_API}/cookbook/${ingredients}`)
.then(response => response.data)
.catch((error) => {
   if (error.response && error.response.status === 404) {
            return `\u2014`;
   };
});

module.exports = {
    getRecipeFromIngredients
}

