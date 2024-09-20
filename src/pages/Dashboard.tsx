import BookingManagement from "../components/Dashboard Components/BookingManagement";
import RoomManagement from "../components/Dashboard Components/RoomManagement";
import SlotManagement from "../components/Dashboard Components/SlotManagement";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl text-center font-bold mb-5">Admin Dashboard</h1>
      <RoomManagement />
      <SlotManagement />
      <BookingManagement />
    </div>
  );
};

export default Dashboard;
