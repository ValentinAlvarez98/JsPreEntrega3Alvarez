let usuarios = [];
const bloque = document.querySelectorAll('.bloque');
const btnAqui = document.querySelectorAll('.btnAqui');

function Usuario(emailUsuario, passwordUsuario) {
    this.emailUsuario = emailUsuario;
    this.passwordUsuario = passwordUsuario;
}

function ingreso() {

    const emailVacioInicio = document.querySelector('#emailVacioInicio');
    const passwordVaciaInicio = document.querySelector('#passwordVaciaInicio');

    let emailIngresado = document.querySelector('#emailUsuarioInicio').value;
    let passwordIngresada= document.querySelector('#passwordUsuarioInicio').value;

    emailIngresado === "" ?
        emailVacioInicio.classList.remove('hidden') :
        passwordIngresada === "" ?
            [emailVacioInicio.classList.add('hidden'), passwordVaciaInicio.classList.remove('hidden')] :
    [emailVacioInicio.classList.add('hidden'), passwordVaciaInicio.classList.add('hidden'), comparadorUsuarios()];

    function comparadorUsuarios() {

        let usuarioAIngresar = {
        emailUsuario: emailIngresado.toLowerCase(),
        passwordUsuario: passwordIngresada
        }

        const compararUsuarios = usuarios.find(usuario => (usuario.emailUsuario === usuarioAIngresar.emailUsuario) && (usuario.passwordUsuario === usuarioAIngresar.passwordUsuario));

        const incorrectosInicio = document.querySelector('#incorrectosInicio');

        ((compararUsuarios !== undefined) && (emailIngresado !== "true") && (passwordIngresada !== "true")) ?
            [incorrectosInicio.classList.add('hidden'), location.href = "miCuenta.html"] :
        incorrectosInicio.classList.remove('hidden');

        document.querySelector('#emailUsuarioInicio').value = "";
        document.querySelector('#passwordUsuarioInicio').value = "";
        
    }

}

function registro() {

    const emailVacioRegistro = document.querySelector('#emailVacioRegistro');
    const passwordVaciaRegistro = document.querySelector('#passwordVaciaRegistro');
    const passwordIgualesRegistro = document.querySelector('#passwordIgualesRegistro');

    let emailRegistro = document.querySelector('#emailRegistro').value;
    let passwordRegistro = document.querySelector('#passwordRegistro').value;
    let passwordRegistroConfirmar = document.querySelector('#passwordRegistroConfirmar').value;

    emailRegistro === "" ?
        emailVacioRegistro.classList.remove('hidden') :
        passwordRegistro === "" ?
            [emailVacioRegistro.classList.add('hidden'), passwordVaciaRegistro.classList.remove('hidden')] :
            (passwordRegistro === passwordRegistroConfirmar ? controlRegistro() :
                [passwordVaciaRegistro.classList.add('hidden'), passwordIgualesRegistro.classList.remove('hidden')])
    ;

    function controlRegistro() {

        let usuarioARegistrar = {
            emailUsuario: emailRegistro.toLowerCase(),
            passwordUsuario: passwordRegistro
        }

        const compararUsuarios = usuarios.find(usuario => (usuario.emailUsuario === usuarioARegistrar.emailUsuario));

        let nuevoUsuario = {};

        compararUsuarios === undefined ?
            (nuevoUsuario = new Usuario(usuarioARegistrar.emailUsuario, usuarioARegistrar.passwordUsuario)) && (usuarios.push(nuevoUsuario)) && [alert("Usuario registrado correctamente"), emailVacioRegistro.classList.add('hidden'), passwordVaciaRegistro.classList.add('hidden'), passwordIgualesRegistro.classList.add('hidden') ]: alert("El usuario ya existe");
        
        console.log(usuarios);
        
        document.querySelector('#emailRegistro').value = "";
        document.querySelector('#passwordRegistro').value = "";
        document.querySelector('#passwordRegistroConfirmar').value = "";
    }
}

btnAqui.forEach((cadaBtn, i) => {

    btnAqui[i].addEventListener('click', () => {

        bloque.forEach((cadaBloque, i) => {
            bloque[i].classList.remove('hidden');
        })
        bloque[i].classList.add('hidden');

    })

})



