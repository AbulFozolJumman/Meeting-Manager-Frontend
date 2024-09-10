import { Link } from "react-router-dom";
import { TRoom } from "../../Types/types";
import RoomCard from "../RoomComponents/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/api/room/roomApi";

const FeaturedRooms: React.FC = () => {
  const { data: rooms, error, isLoading } = useGetAllRoomsQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading rooms: {JSON.stringify(error)}</p>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Featured Rooms
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover our top meeting spaces tailored for every need.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms?.data?.map((room: TRoom) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/rooms"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500"
          >
            See More Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
