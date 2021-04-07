const cityName = document.getElementById('cityName');
const submitBtn =  document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp_real_val');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
	event.preventDefault();
	let cityVal = cityName.value;
	
	if(cityVal === ""){
		city_name.innerText = `Plz write before search`;
		datahide.classList.add('data_hide');
		
	}else{
		try{
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f4e89f25038cdbec37e6b830558da263`;
		const response  = await fetch(url);
		const data  = await response.json();
		//console.log(data);
		//json to array 
		
		const arrData = [data];
		
		city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
		temp.innerText = arrData[0].main.temp;
		const tempMood = arrData[0].weather[0].main;
		
		
		//condtion to check sunny or cloudy
		if(tempMood === "Clear"){
			temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i>";
		}
		else if(tempMood === "Clouds"){
			temp_status.innerHTML = "<i class = 'fa fa-cloud' style='color:#009ad8;'></i>";
		}
		else if(tempMood === "Rain"){
			temp_status.innerHTML = "<i class = 'fas fa-rain' style='color:#a4b0be;'></i>";
		}
		else if(tempMood === "Smoke"){
			temp_status.innerHTML = "<i class = 'fas fa-smog' style='color:#f1f1f1;'></i>";
		}
		else{
			temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i>";
		}
		datahide.classList.remove('data_hide');
		
		}catch{
			city_name.innerText = `Plz write proper name of the city before search`;
			datahide.classList.add('data_hide');
		}
	}
	
}

submitBtn.addEventListener('click',getInfo)