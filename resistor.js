
document.getElementById("thirdBand").style.display = 'none';
document.getElementById("temp").style.display = 'none';

function changeBands(number) {
	
	// Reset band values everytime user changes bands
	var results = document.getElementsByTagName("p");
	
	for(var i = 0; i < results.length; i++)
	{
		results[i].innerHTML = "";
	}
	
	// Reset resistor result
	var result = document.getElementsByTagName("span");
	for(var i = 0; i < result.length; i++)
	{
		if (i == 1)
		{
			result[i].innerHTML = "&Omega;";
		}
		else
		{
			result[i].innerHTML = "";
		}
	}
	
	// Reset dropdown lists
	var selected = document.getElementsByTagName("select");
	
	for(var i = 0; i < selected.length; i++)
	{
		selected[i].selectedIndex = selected[i].defaultSelected;
	}
	
	// Hide the other bands if not used
	if (number == 4) 
	{
		document.getElementById("thirdBand").style.display = 'none';
		document.getElementById("temp").style.display = 'none';
	}
	else if (number == 5)
	{ 
		document.getElementById("thirdBand").style.display = '';
		document.getElementById("temp").style.display = 'none';
	}
	else 
	{
		document.getElementById("thirdBand").style.display = '';
		document.getElementById("temp").style.display = '';
	}
}

function bandValue(band) {
	
	var bandNo = band.id;
	var sign1, sign2, sign3;
	var string;
	
	switch(bandNo){
		case"band1":
			sign1 = band.value;
			document.getElementById("firstValue").innerHTML = sign1;
			calculateValue();
			break;
		case"band2":
			sign2 = band.value;
			document.getElementById("secondValue").innerHTML = sign2;
			calculateValue();
			break;
		case"band3":
			sign3 = band.value;
			document.getElementById("thirdValue").innerHTML = sign3;
			calculateValue();
			break;
		case"band4":
			var multiplier = band.value;
			document.getElementById("multiplier").innerHTML = "<span>&times;</span>" + multiplier + "<span>&Omega;</span>";
			calculateValue();
			break;
		case"toleranceSel":
			var tolerance = band.value;
			document.getElementById("toleranceVal").innerHTML = tolerance + "<span>&percnt;</span>";
			string = document.getElementById("toleranceVal").innerHTML;
			document.getElementById("tol").innerHTML = " " + string;
			break;
		case"temperature":
			var temp = band.value;
			document.getElementById("tempVal").innerHTML = temp + "ppm/K";
			document.getElementById("temper").innerHTML = " " + temp + "ppm";
			break;
	}
}

function calculateValue()
{
	var multiplier;
	var figures;
	
	var value1 = document.getElementById("firstValue").innerHTML;
	var value2 = document.getElementById("secondValue").innerHTML;
	var value3 = document.getElementById("thirdValue").innerHTML;
	
	figures = value1 + value2 + value3;
	
	multiplier = document.getElementById("multiplier").childNodes[1].textContent;
	switch(multiplier)
	{
		case"1K":
			multiplier = 1000;
			break;
		case"10K":
			multiplier = 10000;
			break;
		case"100K":
			multiplier = 100000;
			break;
		case"1M":
			multiplier = 1000000;
			break;
		case"10M":
			multiplier = 10000000;
			break;
		case"100M":
			multiplier = 100000000;
			break;
		case"1G":
			multiplier = 1000000000;
			break;
	}	
	
	if(multiplier != undefined)
	{
		document.getElementById("result").innerHTML = Number(figures) * multiplier;
	}
	else
	{
		document.getElementById("result").innerHTML = figures;
	}
	
}  