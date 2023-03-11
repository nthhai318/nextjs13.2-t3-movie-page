import Link from "next/link";
import { type Movie } from "./page";

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const posterURL = posterBaseUrl + movie.poster_path;
  const release = new Date(Date.parse(movie.release_date)).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div
      className="group relative mx-auto flex h-[22.5rem] w-[15rem] flex-col justify-end overflow-hidden rounded-md duration-500 "
      style={{ backgroundImage: `url(${posterURL})`, backgroundSize: "cover" }}
    >
      <div className="mt-8 bg-gradient-to-t from-black via-black px-3 text-slate-200 transition-all duration-500 group-focus-within:translate-y-0 group-focus-within:duration-75 group-hover:translate-y-0 sm:translate-y-[100%] ">
        <p className="mt-9 mb-2 font-bold uppercase ">{movie.title}</p>
        <div className="duration-500 ">
          <p className="my-2 text-[0.75rem] italic">{release}</p>
          <p className="my-2 text-[0.75rem] italic">
            {movie.overview.substring(0, 300)}...
          </p>
          <Link href={`/dynamic/movie/${movie.id}`}>
            <p className="mb-3 w-fit rounded-md bg-red-900 px-2 py-1">
              Read more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
