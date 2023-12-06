const API_KEY = 'a6baf8502fc9086199b8390dff84e81e';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchKoreanDramas: `/discover/tv?api_key=${API_KEY}&with_original_language=ko&with_genres=18&language=ko-KR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=a6baf8502fc9086199b8390dff84e81e&language=ko-KR