function cidadeSubmit() {


var cidade=document.getElementById("city").value;

if(cidade == ""){
	alert("Preencher campo");
}

else if(cidade.match("[0-9]+")){
	alert("Nome inválido");
	}

else{
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=fba1a9d32786977774107116d6f4898f", function(data){
	console.log(data);

	var clima = data.weather[0].main;
	var weather = ((data.main.temp)-273.15)+" °C";
	var pokeType;
	var chovendo;
	
	if(clima==="Rain"){
   	chovendo = "Está chovendo!";	
   	}

   	else{
   	chovendo = "Não está chovendo!";	
   	}
	
	if(clima==="Rain"){
		pokeType="13";
	}
	else if(weather<5){
		pokeType= "15";
	}
	else if(weather>=5 && weather<10){
		pokeType= "11";
	}
	else if(weather>12 && weather<15){
		pokeType= "12";
	}
	else if(weather>15 && weather<21){
		pokeType= "5";
	}
	else if(weather>23 && weather<27){
		pokeType= "7";
	}
	else if(weather>27 && weather<33){
		pokeType= "6";
	}
	else if(weather>33){
		pokeType= "10";	
	}
	else{
		pokeType= "1";	
	}

$.getJSON("https://pokeapi.co/api/v2/type/"+pokeType, function(data){
	console.log(data);

	var i = data.pokemon.length;
	var j = 0;
	var temp;
	temp = data.pokemon[i];
	data.pokemon[i] = data.pokemon[j];
	data.pokemon[j] = temp;
	j = Math.floor(Math.random()*(i+1));
   	var nomePokemon=data.pokemon[j].pokemon.name;
	
   	alert("Pokemón encontrado!"+"\n \n"+chovendo+"\n"+"Temperatura Local: "+ weather+"\n"+"Pokemon Encontrado: "+nomePokemon);
});
});
}
}