import Link from "next/link";
import Card from "./Card";

const TopCard = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();

  const top = photos.slice(0, 8);
  return (
    <div>
      <h1 className="text-3xl text-center ">top book liss</h1>
      <div className="grid grid-cols-4  ">
        {top.map((photo) => (
          <Card key={photo.id} photo={photo}></Card>
        ))}
      </div>
      <div className="flex justify-center p-4">
        <Link
          href="/AllPhoto"
          className="flex items-center justify-center gap-2 w-75 py-2 bg-yellow-400 text-black font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-yellow-500 "
        >
          Show more related videos
          <span className="text-xl">⌄</span>
        </Link>
      </div>
    </div>
  );
};

export default TopCard;
