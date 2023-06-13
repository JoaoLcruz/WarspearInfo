if (sessionStorage.ID_USUARIO == undefined || sessionStorage.ID_USUARIO == null || sessionStorage.ID_USUARIO == "" ) {
    idQuiz.href = '../login.html'
    dash.href = '../login.html'
}
if (sessionStorage.ID_USUARIO != undefined) {
    mudartudo.innerHTML = `<button style="
        padding: 5px 15px 5px 15px;
        background-color: transparent;
        font-size: 20px;
        color: #ffff;
        cursor: pointer;
    " onclick="sair()">Sair</button>`
    
}
function sair() {
    sessionStorage.clear()
    window.location = '../index.html'
}