function logar () {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    
    if(login ==  "admin" && senha == "admin") {
       location.href = "aba-pessoal.html";
        return false;
       }
    else{
        alert('falha no login');
    }
}