const {nextISSTimesForMyLocation } = require('./iss');

const printFlyTimes=function(flyTimes){
  for (const time of flyTimes){
    const dateTime=new Date(0);
    dateTime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printFlyTimes(passTimes);
});
