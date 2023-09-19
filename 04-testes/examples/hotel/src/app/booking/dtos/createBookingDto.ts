interface CreateBookingDto { 
  checkinAt: string | Date;
  checkoutAt: string | Date;
  userId: string; 
  hotelId: string; 
}

interface CreateBookingRepoDto { 
  checkinAt: string | Date;
  checkoutAt: string | Date;
  user: string; 
  hotel: string; 
}


export { CreateBookingDto, CreateBookingRepoDto }