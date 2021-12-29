var wateringPlants = function (plants, capacity) {
  let res = 0;
  let relase = capacity

  for (let i = 0; i < plants.length; i++) {
    const plant = plants[i]
    // 够灌水
    if (plant <= relase) {
      relase = relase - plant;
      res += 1
    } else {
      // 不够
      // 需要到河边取水
      // 需要到河边
      // res += i 
      // 再过去浇水
      // res += i + 1;
      res += 2 * i + 1;
      relase = capacity - plant;
    }
  }
  return res;
};

// wateringPlants([2, 2, 3, 3], 5)
wateringPlants([1, 1, 1, 4, 2, 3], 4)
wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)