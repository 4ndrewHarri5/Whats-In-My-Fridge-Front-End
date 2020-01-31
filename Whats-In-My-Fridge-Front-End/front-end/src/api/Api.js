import axios from 'axios';

const LOCAL_API = 'http://localhost:8080'
// const COOKBOOK_API = `${LOCAL_API}/cookbook/${INGREDIENT}`

//DONT USE
const Api = {

    makeRecipeRequestFromIngredients = (callback) => {
        axios.get(`${LOCAL_API}/cookbook/${e.target.value}`)
            .then(function (response) {
                console.log(response.data)
                callback(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log(error)
                        callback(`\u2014`)
                    }
            }
        })
    }
}

export default Api


