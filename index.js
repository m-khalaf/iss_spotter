const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error,ip)=>{
// if (error){
//   console.log("It didn't work!: ", error);
//   return;
// }
//   console.log('It worked! Rturned IP: ',ip)
// });

// fetchCoordsByIP('42.189.1.223', (error,coordinates)=>{

//   if (error) {
//     console.log("It didn't work!: ", error);
//     return;
//   }
//   console.log("It worked here you go: ",coordinates);
// });

let cooordinates = {
  latitude: 44.00648,
  longitude: -79.450396
};

// fetchISSFlyOverTimes(cooordinates, (error, flyTimes) => {
//   if (error) {
//     console.log("It didn't work!: ", error);
//     return;
//   }

//   console.log("It worked! Returned flyover times: ",flyTimes);
// });
//142.189.1.223

// console.log(cooordinates.latitude);
// console.log(cooordinates.longitude);