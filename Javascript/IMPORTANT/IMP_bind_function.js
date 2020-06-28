const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
  };
  
  const userTwo = {
    firstName: "Tiffany",
    lastName: "Hudgens"
  };
  
  // Function expression
  const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
  };
  
  // Nope!
  // const fullName = () => {
  //   return `${this.lastName}, ${this.firstName}`;
  // };
  
  const kristine = fullName.bind(userOne);
  const tiffany = fullName.bind(userTwo);
  
  kristine();//?
  tiffany();//?

//   https://puu.sh/FVjU4/3e8ea6e381.png