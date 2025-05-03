export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  Headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  }
}

export const fetchMovies = async ({query}: {query: string}) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/movie/search?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.Headers,
  });

  if (!response.ok) {
    //@ts-ignore
    throw new Error('Failed to fetch movies', response.statusText);
  }

  const data = await response.json();
  return data.results;
}

export const testAPI = async () => {
  try {
    // Test discover movies (popular movies)
    console.log('Testing discover movies...');
    const popularMovies = await fetchMovies({ query: '' });
    console.log('Popular movies found:', popularMovies.length);

    // Test search movies
    console.log('\nTesting search movies...');
    const searchResults = await fetchMovies({ query: 'Avatar' });
    console.log('Search results found:', searchResults.length);

    return { success: true, message: 'API tests completed successfully' };
  } catch (error) {
    console.error('API Test Failed:', error);
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
}

// You can test the API by calling:
// testAPI().then(result => console.log(result));

/*const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTY0ZjVmNTA1NTgyMDI0YmFiMmQ1ODQxY2M5YWJkNiIsIm5iZiI6MTc0NTk5NzY2MC41MzIsInN1YiI6IjY4MTFjZjVjYmVhMTljZGQ5OTI3ZWJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5beZcbImJIH9V34ExE7V6Bmjes-5TRgF45Xs3rEh1SE'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); */