import Link from "next/link";
import Card from "./Card";

const TopCard = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();

  const top = photos.slice(0, 8);
  return (
    <div>
      <div
        className="w-full py-12 text-center"
        style={{
          background: "#0c0f1a",
          borderTop: "1px solid rgba(245,163,44,0.15)",
          borderBottom: "1px solid rgba(245,163,44,0.15)",
        }}
      >
        <h2
          className="text-2xl md:text-4xl font-bold"
          style={{
            color: "#f5a32c",
            fontFamily: "Georgia, serif",
            letterSpacing: "0.5px",
          }}
        >
          Discover Beautiful Stories
        </h2>

        <p
          className="mt-3 text-sm md:text-base"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Explore handpicked books and visuals curated just for you
        </p>
      </div>
      <div className="w-11/12 mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {top.map((photo) => (
            <Card key={photo.id} photo={photo}></Card>
          ))}
        </div>
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
