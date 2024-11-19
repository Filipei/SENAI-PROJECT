function esqueceu(){
    Swal.fire({
        title: "Esqueceu sua senha?",
        text: "Verifique seu email.",
        icon: "question",
        customClass: 
        { popup: 'popup', 
          title: 'title', 
          confirmButton: 'confirmbutton',
          text: 'text'
        }
      });
}
function entrar(){
    var email = document.getElementById('inputemail').value
    var senha = document.getElementById('inputsenha').value
    var senhacorreta = '123456'
    var emailcorreto = 'teste@gmail.com'
    if( email === '' || senha ==='' ){
        Swal.fire({
            title: "Dados incompletos",
            text: "Preencha os dados.",
            icon: "error",
            customClass: 
            { popup: 'popup', 
              title: 'title', 
              confirmButton: 'confirmbutton',
              text: 'text'
            }
          });
    }
    else if ( email === emailcorreto && senha === senhacorreta){
        window.location.href = './indexalmo.html';
    } else{
      Swal.fire({
        title: "Dados incorretos",
        text: "Insira os dados corretamente",
        icon: "error",
        customClass: 
        { popup: 'popup', 
          title: 'title', 
          confirmButton: 'confirmbutton',
          text: 'text'
        }
      });
    }
}