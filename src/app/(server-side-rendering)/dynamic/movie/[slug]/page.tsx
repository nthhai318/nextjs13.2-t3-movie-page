const apiKey = process.env.TMDB_API_KEY ?? "";

const baseURL =
  "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";

export default async function Page({ params }: { params: { slug: string } }) {
  const dataURL = `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${apiKey}&language=en-US`;

  const movieData = await fetchMovieData(dataURL);

  return (
    <div className="text-center">
      This is detail Movie Page of {JSON.stringify(movieData)}
    </div>
  );
}

async function fetchMovieData<Type>(url: string): Promise<Type> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<Type>;
}
