function verificacao(){
    let user= document.getElementById("usuario").value;
    let password= document.getElementById("senha").value;
    
    if(user.trim() === "" || password.trim() === ""  ){
        alert("Preencha todos os campos");
    } else {
        if(user.trim() === "adm" || password.trim() === "adm") {
            window.location.href = ("./pages/inicial.html");
        }
        else{
            alert("Usuario ou senha incorreto!");
        }
        
    }
}