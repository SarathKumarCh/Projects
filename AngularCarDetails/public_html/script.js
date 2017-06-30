// Code goes here
(function() {
  angular.module('plunker', []);

  angular.module('plunker')
    .run(function() {
      console.log("Initialized");
    });

  angular.module('plunker')
    .controller('CarController', Car)

  function Car() {
    var carVm = this;
    carVm.imageUrl = "https://static.pexels.com/photos/24353/pexels-photo.jpg";
    
    carVm.addCar = function(){
      carVm.cars.push(carVm.newCar)
      console.log(carVm.cars);
      
    };
    
    carVm.cars = [{
      "vin": "1HGCR2F3XFA027534",
      "make": "HONDA",
      "model": "ACCORD",
      "year": 2015,
      "redlineRpm": 5500,
      "maxFuelVolume": 15,
      "lastServiceDate": "2017-05-25T17:31:25.268Z"
    }, {
      "vin": "WP1AB29P63LA60179",
      "make": "PORSCHE",
      "model": "CAYENNE",
      "year": 2014,
      "redlineRpm": 8000,
      "maxFuelVolume": 18,
      "lastServiceDate": "2017-03-25T17:31:25.268Z"
    }];

  }

  // var tesla = new Car('tesla', 'model X');
  // console.dir(tesla);
  // tesla.drive();
})();