import Card from "@/componants/TopCard.jsx/Card";

const AllCard = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
