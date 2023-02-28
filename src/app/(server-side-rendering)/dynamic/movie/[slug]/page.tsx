import Link from "next/link";
import MovieHeader from "./MovieHeader";
import Trailer from "./Trailer";

const apiKey = process.env.TMDB_API_KEY ?? "";

export type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type Trailer = {
  id: number;
  results: {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
};

export default async function Page({ params }: { params: { slug: string } }) {
  const movieAPI = `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${apiKey}&language=en-US`;
  const trailerAPI = `https://api.themoviedb.org/3/movie/${params.slug}/videos?api_key=${apiKey}&language=en-US`;

  const movieData = await fetchMovieDB<MovieData>(movieAPI);
  const trailerData = await fetchMovieDB<Trailer>(trailerAPI);

  return (
    <div className="my-2 text-center">
      <Link href="/dynamic">Back to Trending Movies</Link>
      <MovieHeader movie={movieData} />
      <Trailer trailer={trailerData} />
    </div>
  );
}

async function fetchMovieDB<Type>(url: string): Promise<Type> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<Type>;
}
