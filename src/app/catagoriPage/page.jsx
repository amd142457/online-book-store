import FilterPage from "@/componants/filterpage/FilterPage";

export default async function Page() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const photos = await res.json();

  return <FilterPage photos={photos}></FilterPage>;
}
