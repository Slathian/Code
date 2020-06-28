const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);//?
    const obj2Keys = Object.keys(obj2);//?
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
  
    return true;
  };
  
  const obj1 = {
    name: "Kristine",
    age: 13,
    // favorites: {
    //   food: "Pizza",
    //   vacation: "Disneyland"
    // }
  };
  
  const obj2 = {
    name: "Kristine",
    age: 13,
    // favorites: {
    //   food: "Pizza",
    //   vacation: "Disneyland"
    // }
  };
  
  obj1 == obj2;//?
  isEqual(obj1, obj2);//?

//   This will only work for SHALLOW conditionals. Will not work for mutiple levels.

// If we need something that is a deep comparisons, it is reccomended to use the LoDash Library, which provides an _.isEquals() that will look for deep rooted comparisons