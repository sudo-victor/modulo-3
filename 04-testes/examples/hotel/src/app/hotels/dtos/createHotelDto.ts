// Data Transfer Object
interface CreateHotelDto {
  name: string;
  address: string;
  roomsAvailables: number;
  file: {
    filename: string;
    mimetype: string;
  }
}

export { CreateHotelDto }
