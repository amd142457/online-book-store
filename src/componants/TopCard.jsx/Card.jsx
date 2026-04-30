import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ photo }) => {
  console.log(photo);

  return (
    <div>
      <div className="w-10/12 mx-auto mt-10 flex justify-center">
        <div className="group w-77 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-[#0c0f1a]">
          {/* Image */}
          <div className="overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1644229945516-bdece78b5939"
              width={500}
              height={400}
              alt={photo.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-5 text-center">
            <h2 className="text-lg font-bold">{photo.title}</h2>
            <p className="text-sm text-gray-600 mb-1">by {photo.author}</p>

            <p className="text-gray-500 text-sm mb-3">{photo.description}</p>

            <div className="flex justify-between items-center text-sm mb-4">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                {photo.category}
              </span>
              <span className="text-red-500 font-medium">
                Stock: {photo.available_quantity}
              </span>
            </div>

            <Link
              href={`/AllPhoto/${photo.id}`}
              className="px-4 py-2 bg-[#f5a32c] text-white rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
//
