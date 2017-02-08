
(function (){
var cars = document.querySelectorAll('.thumbInfo img'),
carDesc = document.querySelector('.modelDetails'),
carPrice = document.querySelector('.priceInfo'),
yellowCar = document.querySelector('#F56'),
blueCar = document.querySelector('#F55'),
redCar = document.querySelector('#R58');

function makeRequest(){
	httpRequest = new XMLHttpRequest();
	if (!httpRequest){
		console.log('Your browser is ancient!');
	}
	httpRequest.onreadystatechange = showCarInfo;
	httpRequest.open('GET', 'includes/ajaxQuery.php' + "?model" + this.id);
	httpRequest.send();
}

function showCarInfo(){
	if(httpRequest.readystate === XMLHttpRequest.DONE && httpRequest.status === 200)
		carData = JSON.parse(httpRequest.responseText);

		[].forEach.call(document.querySelectorAll('.hidden'), function(item){
			item.classList.remove('hidden');
		});
	carDesc.firstChild.nodeValue = carData.carDesc;
	carPrice.firstChild.nodeValue = carData.carPrice;
}

[].forEach.call(cars, function(el) {
	el.addEventListener('click', makeRequest, false);
});

})();