import { type Trailer } from "./page";

export default function Trailer({ trailer }: { trailer: Trailer }) {
  return (
    <div id="trailer" className="mx-auto mt-10 px-3 ">
      {trailer?.results[0]?.key && (
        <iframe
          className="mx-auto aspect-video w-full max-w-[1080px]"
          src={`https://www.youtube.com/embed/${trailer.results[0]?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
