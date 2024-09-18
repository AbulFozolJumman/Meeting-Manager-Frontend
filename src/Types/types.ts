export type TRoom = {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  imageUrl?: string;
};

export type TSlot = {
  _id: string;
  room: TRoom;
  date: string;
  startTime: string;
  endTime: string;
};

// interface TSlots {
//   data: TSlot[];
// }
