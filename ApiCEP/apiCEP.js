

//fetch faz a requisição ao servidor e o then pega as informações e retorna para o solicitante.

fetch('https://viacep.com.br/ws/51021360/json/'). then(response => {
	return response.json()

}). then(corpo => {
	console.log(corpo)

})
