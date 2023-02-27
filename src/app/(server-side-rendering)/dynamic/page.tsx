const apiKey = process.env.TMDB_API_KEY;
const trendingApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
};

type TrendingMovies = {
  page: number;
  results: Movie[];
};

export default async function Page() {
  const trendingMovies = await getTrendingMovies();
  return (
    <div>
      <h1>This shows example of Dynamic Rendering Page with TMDB Database</h1>
      <p>
        This detail page is fetched and rendered whenever the user/client make
        to request to the server (Dynamic Rendering)
      </p>
      <h2>Top 20 Trending Movies Today</h2>
    </div>
  );
}

async function getTrendingMovies() {
  const res = await fetch(trendingApi, { next: { revalidate: 43200 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as unknown;
}
