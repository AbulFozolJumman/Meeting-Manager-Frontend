import React from "react";
import { useGetAllRoomsQuery } from "../redux/api/room/roomApi";
import { TRoom } from "../Types/types";
import RoomCard from "../components/RoomCard";

const Rooms: React.FC = () => {
  const { data: rooms, error, isLoading } = useGetAllRoomsQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading rooms: {JSON.stringify(error)}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {rooms?.data?.map((room: TRoom) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Rooms;
