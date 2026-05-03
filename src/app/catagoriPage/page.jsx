import FilterPage from "@/componants/filterpage/FilterPage";
import photos from "../../data/data.json";

export default function Page() {
  return <FilterPage photos={photos}></FilterPage>;
}
