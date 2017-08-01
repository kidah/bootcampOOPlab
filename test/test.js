const assert  = require('chai').assert;
const Vehicle = require('../oop.js').vehicle;
const Car = require('../oop.js').car;
const Truck = require('../oop.js').truck;

//Mammal tests
describe('Vehicle',function(){
  it('should contain a constructor method',function(){
      assert.deepEqual(typeof Vehicle.constructor(),'function');
  });
  it('should contain private variables',function(){
    assert.equal(typeof Vehicle.prototype.speed,'undefined');
  })
  
 
});

//Rodent tests
describe('Car',function(){
  it('should contain a constructor method',function(){
    assert.deepEqual(typeof Car.constructor(),'function');
  })
  it('should extend class Vehicle',function(){
    assert.equal(Car.prototype instanceof Vehicle,true);
  })
})


//Primate tests
describe('Truck',function(){
  it('should contain the  constructor function' ,function(){
      assert.equal(typeof Truck.constructor,'function')
  });
  it('should inherit the Vehicle class',function(){
      assert.equal(Truck.prototype instanceof Vehicle,true);
  });
  
});