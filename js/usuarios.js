let usuarios = [];
let usuarioActivo = [];

function Usuario(emailUsuario, passwordUsuario) {
    this.emailUsuario = emailUsuario;
    this.passwordUsuario = passwordUsuario;


    this.guardarUsuario = function () {
        localStorage.setItem(`${emailUsuario}`, JSON.stringify(this));
    }
}


