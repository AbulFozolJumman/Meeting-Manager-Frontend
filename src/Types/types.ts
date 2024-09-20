export type TRoom = {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
  imageUrl?: string;
};

export type TSlot = {
  _id: string;
  room: TRoom;
  date: string;
  startTime: string;
  endTime: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  __v: number;
};

export type TBooking = {
  _id: string;
  room: TRoom;
  slots: TSlot[];
  user: TUser;
  date: string;
  totalAmount: number;
  isConfirmed: string;
  isDeleted: boolean;
};
