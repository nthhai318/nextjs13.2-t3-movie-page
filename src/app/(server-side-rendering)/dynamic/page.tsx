import Link from "next/link";
import MovieCard from "./MovieCard";

const apiKey = process.env.TMDB_API_KEY ?? "";
const trendingApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

export type Movie = {
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
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TrendingMovies = {
  page: number;
  results: Movie[];
};

export default async function Page() {
  const trendingMovies = await getTrendingMovies<TrendingMovies>();
  if (typeof trendingMovies)
    return (
      <div className="mx-auto max-w-[1200px] px-5">
        <Link href="/">
          <p className="text-center hover:underline">Back to Home Page</p>
        </Link>
        <h1 className="text-center text-[2rem] font-bold uppercase">
          This shows example of Dynamic Rendering Page with TMDB Database
        </h1>
        <p className="text-center">
          This trending page is fetched and rendered twice a day (Static
          Rendering)
        </p>
        <p className="text-center">
          However, the detail page is fetched and rendered whenever the
          user/client make to request to the server (Dynamic Rendering)
        </p>
        <h2 className="my-10 text-center text-[1.5rem] font-bold">
          Top 20 Trending Movies Today
        </h2>
        <div className="mx-auto mb-10 grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {trendingMovies.results.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    );
}

async function getTrendingMovies<Type>(): Promise<Type> {
  const res = await fetch(trendingApi, { next: { revalidate: 43200 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<Type>;
}
