// working with flights collection and flightData database

// show databases
show dbs;

// switch to database
use test-db;

// insert a document in flightsData collection
db.flightsData.insertOne({
  "departureAirport": "MUC",
  "arrivalAirport": "SFO",
  "aircraft": "Airbus A380",
  "distance": 12000,
  "intercontinental": true
});

// insert multiple documents in flightsData collection
db.flightsData.insertMany([{
  "departureAirport": "MUC",
  "arrivalAirport": "SFO",
  "aircraft": "Airbus A380",
  "distance": 12000,
  "intercontinental": true
},
{
  "departureAirport": "LHR",
  "arrivalAirport": "TXL",
  "aircraft": "Airbus A320",
  "distance": 950,
  "intercontinental": false
}]);

// delete all documents in flightsData collection
db.flightsData.deleteMany({});

// delete all documents with similar criteria in flightsData collection
db.flightsData.deleteMany({ distance: 12000 });

// delete one document in flightsData collection
db.flightsData.deleteOne({ arrivalAirport: 'TXL' });

// update one document in flightsData collection
db.flightsData.updateOne({
  departureAirport: 'LHR'
}, {
  $set: {
    departureAirport: 'KSAN'
  }
});

// update all documents in flightsData collection
db.flightsData.updateMany({}, {
  $set: {
    intercontinental: false
  }
});

// update all documents with similar criteria in flightsData collection
db.flightsData.updateMany({
  distance: 12000
}, {
  $set: {
    distance: 20000
  }
});

// return all documents in flightsData collection and also format it in a pretty way

// find all flights that are intercontinental in flightsData collection

// find all flights that are greater than 10000 in flightsData collection

// find one flight that is greater than 900 in flightsData collection

// replace document with new data in flightsData collection

// update all documents by adding embedded document with fields description = on-time and lastUpdated

// find all documents that have a status object with description field with value of on-time
// -----------------------------------------------------------------------
// working with passengers collection

// fetch all the documents and not return a cursor so that all data is displayed and stop at the first 20 documents *

// print out each document in this collection * 

// use projection to only return the name field and id field *

// use project to only return the name field and exclude the id field *

// use update Albert Twostone to embed an array inside of a document using this data 
// hobbies: [
//   "sports",
//   "cooking"
// ]

// access the hobbies array in a Albert Twostone document *

// find an documents that has one of its hobbies as sports *