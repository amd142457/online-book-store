import AuthCard from "@/componants/imageAuth/authCard";
import Card from "@/componants/TopCard.jsx/Card";
import photos from "../../data/data.json";

const AllCard = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div>
        <AuthCard></AuthCard>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
