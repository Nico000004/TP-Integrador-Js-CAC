function calcularTotalAPagar(event){
	event.preventDefault();
	let cantidad = parseInt(document.querySelector(`#cantidad`).value);
	let categoria = document.querySelector(`#categoria`).value;
	switch (categoria){
				case "1":
					var descuento = 20;
					break;
				case "2":
					var descuento = 50;
					break;
				case "3":
					var descuento = 85;
					break;
			};
	if (cantidad >= 0) {
		let total = ((cantidad * 200)*descuento/100)
		document.querySelector(`#totalAPagar`).textContent = total;
	}
	else{
		document.querySelector(`#totalAPagar`).textContent = 0;
	}
}
function borrarTotal(){
	document.querySelector(`#totalAPagar`).textContent = 0;
}

const btnResumen = document.querySelector(`#resumen`)
btnResumen.addEventListener(`click`, calcularTotalAPagar);

const btmBorrar = document.querySelector(`#borrar`);
btmBorrar.addEventListener(`click`, borrarTotal);
