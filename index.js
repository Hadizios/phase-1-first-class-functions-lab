// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers() {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
  return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
  return returnLastTwoDrivers(drivers);
}
