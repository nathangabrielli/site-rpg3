function logar () {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login ==  "admin" && senha == "admin") {
       location.href = "aba-pessoal.html";
        return false;
       }
    else{
        alert('falha no login');
    }
}