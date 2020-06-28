const headingGenerator = (title, typeOfHeading) => {
    return `
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
  }
  
  headingGenerator('Greetings', 1);