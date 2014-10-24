function ThermostatView(element, currentTemp) {
	this.element = $(element);
	this.thermostat = new Thermostat;
	this.thermostat.temperature = 0;
	this.element.text(this.thermostat.increaseTemperatureBy(currentTemp));
	this.bindTo('#increaseTemperature', this.thermostat, this.thermostat.increaseTemperature, this.element);
	this.bindTo('#decreaseTemperature', this.thermostat, this.thermostat.decreaseTemperature, this.element);
	this.bindTo('#resetTemperature', this.thermostat, this.thermostat.resetTemperature, this.element);
	this.bindTo('#turnOffPowerSaver', this.thermostat, this.thermostat.turnOffPowerSaver, this.element);
	this.bindTo('#turnOnPowerSaver', this.thermostat, this.thermostat.turnOnPowerSaver, this.element);
};

ThermostatView.prototype.bindTo = function(control, obj, func, element) { 
	$(control).on('click', function() {
		element.text(func.call(obj));
	});
};


$(document).ready(function(){
	$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/find?q=London&units=metric',
    type: 'GET',
    dataType: 'jsonp',
    success: function(data) {
    	var temperature = data.list[1].main.temp;
      new ThermostatView('.temperature h1', temperature)}
    });
});







// var currentTemp = data['weather']['curren_weather'][0]['temp'];    

		// new ThermostatView('.temperature h1', parseInt(currentTemp));


// $('#increaseTemperature').on('click', function () {

// 	if(display.thermostat.temperature >= 25) {
// 		$('body').css({'background-color': 'red'})
// 	}

// 	if(display.thermostat.temperature >= 20) {
// 		$('body').css({'background-color': 'yellow'})
// 	}	

// });

// $('#decreaseTemperature').on('click', function() {




// 		if(display.thermostat.temperature <= 15) {
// 		$('body').css({'background-color': 'green'})
// 	}

// 		if(display.thermostat.temperature === 10) {
// 		$('body').css({'background-color': 'blue'})
// 	}