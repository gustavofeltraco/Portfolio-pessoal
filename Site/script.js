function Enviar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("msg");
// Vai checar se tem arroba e se os campos Nome e Mensagem não estão vazios.
    if (nome.value != "" && mensagem.value != "" && email.value.includes("@")) {
        alert("Agradecemos por entar em contato " + nome.value + ", o seu formulário foi registrado com sucesso!")
    } else {
        alert("Por favor, confira se o seu nome ou email estão corretos ou se preencheu todos os campos.")
    }
}