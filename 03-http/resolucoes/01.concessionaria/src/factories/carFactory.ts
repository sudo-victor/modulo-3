type MakeCarProps = {
  model: string;
  year: number;
  color: string;
  brand: string;
  plate: string;
  isUsed: boolean;
}

const makeCar = (data: MakeCarProps) => {
  return {
    model: data.model,
    year: data.year,
    color: data.color,
    brand: data.brand,
    plate: data.plate,
    isUsed: data.isUsed,
    isSold: false,
    createdAt: new Date()
  }
}

export { makeCar }
