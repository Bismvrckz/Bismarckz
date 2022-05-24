const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return Math.floor((mpg * fuelLeft) / distanceToPump);
};

console.log(zeroFuel(100, 25, 2));
