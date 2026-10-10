const axios = require('axios');
const fs = require('fs').promises;

async function saveMovies() {
    try {
        // Updated active API endpoint
        let response = await axios.get('https://ghibliapi.vercel.app/films');
        let movieList = '';
        
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        
        await fs.writeFile('asyncAwaitMovies.csv', movieList);
        console.log('Saved our list of movies to asyncAwaitMovies.csv');
    } catch (error) {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    }
}

saveMovies();