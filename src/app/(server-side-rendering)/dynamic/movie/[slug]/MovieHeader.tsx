import { type MovieData } from "./page";
import Image from "next/image";

const posterBaseUrl = "https://image.tmdb.org/t/p/original/";

export default function MovieHeader({ movie }: { movie: MovieData }) {
  const backdropUrl = posterBaseUrl + movie.backdrop_path;
  const posterUrl = posterBaseUrl + movie.poster_path;

  return (
    <div className="px-auto relative mt-10 h-[510px] w-full">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-[-1]  overflow-hidden brightness-[0.3]"
        style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "left 100px top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="bg-gradient-to-r from-black via-neutral-800 p-[30px] ">
        <div className="mx-auto flex h-full max-w-[1200px] flex-row items-center justify-start gap-10 ">
          <div className="mx-auto flex-shrink-0 flex-grow-0">
            <Image
              className="h-[450px] w-[300px] rounded-md object-cover brightness-100 filter"
              src={posterUrl}
              alt={`${movie.title} poster`}
              width={300}
              height={450}
            ></Image>
          </div>
          <div className="col-span-2 flex min-w-[500px] flex-col gap-5 text-white">
            <p className="text-left text-[2rem] font-bold uppercase ">
              {movie.title} ({movie.release_date.slice(0, 4)})
            </p>
            <div className="flex flex-row gap-5">
              {movie.genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
            <div className="text-left">
              <p className="mb-3 text-[1.25rem] font-bold">Overview</p>
              <p>{movie.overview}</p>
            </div>
            <a href="#trailer" className="w-fit">
              <button className="self-start rounded-md bg-red-600 p-2">
                Watch Trailer
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
