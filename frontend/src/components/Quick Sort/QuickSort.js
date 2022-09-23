const numberArray = [4, 7, 1, 8, 90, 5, 30, 10, 3];
  const stringArray = [
    "auckland",
    "christchurch",
    "wellington",
    "amman",
    "dubai",
    "mombasa",
    "sydney",
    "melbourne",
    "ajman",
    "barcelona",
    "cape town",
    "alfama",
    "las vegas",
    "cape verde",
    "taipei",
    "algorve",
    "lisboa",
  ];
  const objectArray = [
    {
      id: 1,
      country: "New Zealand",
      capital: "wellington",
    },
    {
      id: 2,
      country: "Australia",
      capital: "sydney",
    },
    {
      id: 3,
      country: "Spain",
      capital: "Madrid",
    },
    {
      id: 4,
      country: "Italy",
      capital: "Rome",
    },
    {
      id: 5,
      country: "France",
      capital: "Paris",
    },
    {
      id: 6,
      country: "South Africa",
      capital: "Cape Town",
    },
    {
      id: 7,
      country: "Taiwan",
      capital: "Taipei",
    },
    {
      id: 8,
      country: "Egypt",
      capital: "Cairo",
    },
    {
      id: 9,
      country: "Algeria",
      capital: "Algiers",
    },
    {
      id: 10,
      country: "Jordan",
      capital: "amman",
    },
  ];

  // Use Quick Sort on the fetched properties array
  // const quickSort = (array) => {
  //   if (array.length === 1) {
  //     return array;
  //   }
  //   const pivot = array[array.length - 1];
  //   const leftArr = [];
  //   const rightArr = [];

  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (array[i] < pivot) {
  //       leftArr.push(array[i]);
  //     } else {
  //       rightArr.push(array[i]);
  //     }
  //   }

  //   if (leftArr.length > 0 && rightArr.length > 0) {
  //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  //   } else if (leftArr.length > 0) {
  //     return [...quickSort(leftArr), pivot];
  //   } else {
  //     return [pivot, ...quickSort(rightArr)];
  //   }
  // };

  // Customised to sort the objectArray on country - working!
  // const quickSort = (array) => {
  //   if (array.length === 1) {
  //     return array;
  //   }
  //   const pivot = array[array.length - 1];
  //   const pivotValue = pivot.country;
  //   const leftArr = [];
  //   const rightArr = [];

  //   for (let i = 0; i < array.length - 1; i++) {
  //     const arrayValue = array[i].country;
  //     if (arrayValue < pivotValue) {
  //       leftArr.push(array[i]);
  //     } else {
  //       rightArr.push(array[i]);
  //     }
  //   }

  //   if (leftArr.length > 0 && rightArr.length > 0) {
  //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  //   } else if (leftArr.length > 0) {
  //     return [...quickSort(leftArr), pivot];
  //   } else {
  //     return [pivot, ...quickSort(rightArr)];
  //   }
  // };

  const quickSort = (array) => {
    if (array.length === 1) {
      return array;
    }
    const pivot = array[array.length - 1];
    const pivotValue = pivot.capital;
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++) {
      const arrayValue = array[i].capital;
      if (arrayValue < pivotValue) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
      return [...quickSort(leftArr), pivot];
    } else {
      return [pivot, ...quickSort(rightArr)];
    }
  };

  // console.log(quickSort(results));
  // console.log(quickSort(numberArray));
  // console.log(quickSort(stringArray));
  console.log(quickSort(objectArray));