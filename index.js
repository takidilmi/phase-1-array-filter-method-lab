// Code your solution here
/* function findMatching(drivers, name) {    
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase().startsWith(name.toLowerCase()))
}

function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
} */
/////////////////////////////////////////////////////////////////////////////////////////

const findMatching = (drivers, name) =>
  drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (drivers, name) =>
  drivers.filter((driver) => driver.toLowerCase().startsWith(name.toLowerCase()));

const matchName = (drivers, name) =>
  drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());