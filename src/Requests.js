const key= process.env.REACT_APP_KEY;

const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/rated?api_key=${key}&language=en-US&page1`,
    requestRated:`https://api.themoviedb.org/3/movie/rated?api_key=${key}&language=en-US&page1`,
}

export default requests;