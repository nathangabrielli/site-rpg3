function logar () {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login ==  "Haakon" && senha == "1412") {
       location.href = "aba-pessoal.html";
        return false;
       }
    else{
        alert('falha no login');
    }
}