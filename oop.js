'use strict';
class Vehicle{

  constructor(color,numberofWheels,model, make, type){
        this.model = model;
        this._color = color;
        this.numberofWheels = numberofWheels;
        this.make= make;
        this._type = type;

        this._getModel = function(){
          return model;
        }
        this._getColor= function(){
          return _color;
        }
        this._getNumofWheels = function(){
          return numberofWheels;
        }

        this._getMake = function(){
          return _make;
        }
        this._getType = function(){
          return type;
        }

  }

  setSpeed(speed){
    if(typeof(speed) !='int'){
      return false;
    }
    else{
      let calc = 'Car Speed '+speed;
      return calc;
    }
  }
  setDirection(direction){
    if(typeof(direction) !='int'){
      return false;
    }
    else{
      let calc = 'Vehicle Direction '+direction;
      return calc;
    }
  }

}

//sub classes (Inheritance)
'use strict';

class Car extends Vehicle{

    constructor(color,numberofWheels,model, make, type){
      //Encapsulation
        super(color,numberofWheels,make, model, type);
        const _numberOfWheels = 4;
        const _type = 'Car';
        this._getModel = function(){
          return model;
        }

    }


    climbBridge(speed){
      if(speed <= 80){
        let message= type+" can climb the bridge";
        return message;
      }
      
      else{
        return "Take another route";
      }

    }

}
'use strict';
class Truck extends Vehicle{
  
  constructor(color,numberofWheels,model, make, type, length){
        super(color,numberofWheels,model, make, type);
        const _numberOfWheels = 8;
        const _type = 'Truck';
        this._length = length;
         this._getModel = function(){
          return _model;
        }
        let _typeOfTruck = 'Rigid';
        
        if(length <=12.5 && speed <= 80){
          _typeOfTruck = 'Rigid Truck';
        }
        else{
          _typeOfTruck = 'Rigid and Dog Truck';
        }
       

        this._getType = function(){
          return _typeOfTruck;
        }

        
    }

}


class Bus extends Vehicle{
  constructor(color,numberofWheels,model, make, type){
        super(color,numberofWheels,model, make, type);
    }
}
module.exports.vehicle = Vehicle;
module.exports.car = Car;
module.exports.truck = Truck;
