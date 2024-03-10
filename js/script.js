function verificacao() {
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("senha").value;

    if (user.trim() === "" || password.trim() === "") {

    } else {
        if (user.trim() === "adm" || password.trim() === "adm") {
            Swal.fire(
                {
                    text: 'Bem Vindo!',
                    icon: 'success',
                    tittle: 'Atenção',

                }
            ).then((result) =>{
                if(result.isConfirmed){
                    window.open("./pages/inicial.html", "_self");
                }

            })  
        }
        else {
            Swal.fire(
                {
                    text: 'Usuario ou Senha incorreta!',
                    icon: 'error',
                    tittle: 'Atenção',

                }
            )
        }

    }
}


const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})

