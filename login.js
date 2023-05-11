function logar () {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login ==  "admin" && senha == "1412") {
       location.href = "aba-pessoal.html";
       }
    else{
        alert('falha no login');
    }
}