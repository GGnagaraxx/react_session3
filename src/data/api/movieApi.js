import axios from 'axios';

const api = 'https://fake-movie-database-api.herokuapp.com/api?s=batman';

async function getMovies(){

    return new Promise((resolve, reject) => {

        axios.get(api).then((resp) => {
            resolve(resp.data.Search);
        }).catch((err) => {
            reject(err);
        });
    })
    
}


export {
    getMovies
}