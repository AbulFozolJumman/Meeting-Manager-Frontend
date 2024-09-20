import React from "react";
import { useGetAllRoomsQuery } from "../redux/api/room/roomApi";
import { TRoom } from "../Types/types";
import RoomCard from "../components/RoomComponents/RoomCard";

const Rooms: React.FC = () => {
  const { data: rooms, error, isLoading } = useGetAllRoomsQuery(undefined);

  // Filter out rooms where isDeleted is true
  const filteredRooms = rooms?.data.filter((room: TRoom) => !room.isDeleted);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading rooms: {JSON.stringify(error)}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredRooms?.map((room: TRoom) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </div>
  );
};

export default Rooms;
