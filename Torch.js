// Torch.js
// Cordova Plugin
//
//
// Created by Shazron Abdullah May 26th 2011
// Update by Lukas Beaton January 24, 2013
//
// This plugin was updated to work with iOS 6 and Cordova 2.3.0 (previously PhoneGap)

function Torch()
{
	this._isOn = false;
	var self = this;
	
	this.__defineGetter__("isOn", function() { return self._isOn; });	
}



Torch.prototype.turnOn = function(){
  var fail = function() {}

  if (typeof fail != "function")  {
    console.log("Torch.turnOn failure: failure parameter not a function")
    return
  }

  var success = function() {}

  if (typeof success != "function")  {
    console.log("Torch.turnOn success: failure parameter not a function")
    return
  }

	cordova.exec(success, fail, "Torch", "turnOn", []);
};

Torch.prototype.turnOff = function(){
  var fail = function() {}

  if (typeof fail != "function")  {
  console.log("Torch.turnOff failure: failure parameter not a function")
  return
  }

  var success = function() {}

  if (typeof success != "function")  {
  console.log("Torch.turnOff success: failure parameter not a function")
  return
  }

	cordova.exec(success, fail, "Torch", "turnOff", []);
};

Torch.install = function(){
	if(!window.plugins) {
		window.plugins = {};
	}
	window.plugins.torch = new Torch();
};

cordova.addConstructor(Torch.install);
