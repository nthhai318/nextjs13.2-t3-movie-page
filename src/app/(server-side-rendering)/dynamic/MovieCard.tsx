import { type Movie } from "./page";

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const posterURL = posterBaseUrl + movie.poster_path;
  return (
    <div
      className="group mx-auto flex h-[22.5rem] w-[15rem] flex-col justify-end overflow-hidden rounded-md duration-500"
      style={{ backgroundImage: `url(${posterURL})`, backgroundSize: "cover" }}
    >
      <div className="mt-8 max-h-0 bg-gradient-to-t from-black via-black px-3 text-white transition-all duration-500 group-hover:max-h-96">
        <p className="mt-9 mb-2 font-bold uppercase">{movie.title}</p>
        <p className="my-2 text-[0.75rem] italic">{movie.release_date}</p>
        <p className="my-2 text-[0.75rem] italic">{movie.overview}</p>
        <button className="mb-3 rounded-md bg-red-900 px-2 py-1">
          Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
