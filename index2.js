const { nextISSTimesForMyLocation } = require("./iss_promised");

const printFlyTimes=function(flyTimes){
  for (const time of flyTimes){
    const dateTime=new Date(0);
    dateTime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(body => printFlyTimes(body))
  .catch(error=>console.log("It didn't work: ", error.message))