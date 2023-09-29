// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function (fare) {
        return x * fare
};
    }
function fareDoubler(fare) {
    return fare * 2
};

function fareTripler(fare) {
    return fare * 3
};

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
  const lastTwoDrivers = returnLastTwoDrivers(drivers);
  return lastTwoDrivers;
}