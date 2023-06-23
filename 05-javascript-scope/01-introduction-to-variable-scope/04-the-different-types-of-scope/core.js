// This is a global scope
let name = "Francis"; 

const names = () => { 
  // This is a function scope or local scope
  let otherName = "Ignacio" 
  return { 
    getName: () => { 
      return console.log(name, otherName) 
    }
  }
}

const gettingName = names(); 
gettingName.getName(); 

// This is a block scope
{
  let name = "Francis"; 
  console.log(name); 
}