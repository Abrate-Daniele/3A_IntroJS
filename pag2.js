document.write("SALVE MONDO");
function init(){
    var txtUtente = document.getElementById("txtUtente");
    console.log(_txtUtente);
    txtUtente.placeholder = "Inserisci utente";
    var btnAccedi = document.getElementById("btnAccedi");
    btnAccedi.innerHTML = "LOGIN";
}
function accedi(){
    let utente = "daniele.fea", pwd = "test";
    let txtUtente = document.getElementById("txtUtente");
    if(txtUtente.value == utente)
        alert("Login effettuato");
    else
        alert("Errore nelle credenziali");
}