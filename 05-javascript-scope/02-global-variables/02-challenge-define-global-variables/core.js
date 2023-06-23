/**
 * Challenge:
 * 1. Create an array of anything, with at least 5 elements.
 * 2. Make them globally scoped.
 * 3. You can use `let` or `const` or `var`.
 */

const nameOfPerson = [
  "Francis",
  "Noey",
  "Norraine",
  "Mon",
  "Robert",
];

const dispalyNames = () => {
  return console.log(nameOfPerson);
}

dispalyNames(); // [ 'Francis', 'Noey', 'Norraine', 'Mon', 'Robert' ]