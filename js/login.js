function ocultarTodoLogin() {

    emailVacioInicio.classList.add('hidden');
    emailIncorrectoInicio.classList.add('hidden');
    passwordVaciaInicio.classList.add('hidden');
    usuarioNoExiste.classList.add('hidden');
    incorrectosInicio.classList.add('hidden');
    emailVacioRegistro.classList.add('hidden');
    emailIncorrectoRegistro.classList.add('hidden');
    passwordVaciaRegistro.classList.add('hidden');
    passwordIgualesRegistro.classList.add('hidden');
    usuarioExisteRegistro.classList.add('hidden');
    registroCompleto.classList.add('hidden');

}

function ejecutarConEnter() {

    const mainLogin = document.querySelector('.mainDeLogin');
    const enter = document.querySelectorAll('.enter');

    [mainLogin !== null]?

    [enter.forEach((cadaEnter, i) => {
        enter[i].addEventListener('keyup', function (e) {
            ingresar.classList.contains('hidden') === false ?
                e.keyCode === 13 ? ingreso() : null :
                registrar.classList.contains('hidden') === false ?
                    e.keyCode === 13 ? registro() : null :
            null;
        })
    })] :

        null;
    
}

function ingresarORegistro() {

    const bloque = document.querySelectorAll('.bloque');
    const btnAqui = document.querySelectorAll('.btnAqui');

    window.location.pathname === ('/JsPreEntrega3Alvarez/pages/registro.html' /* '/pages/registro.html' */) ?
        [ingresar.classList.add('hidden')] :
        window.location.pathname === ('/JsPreEntrega3Alvarez/pages/ingreso.html' /* '/pages/ingreso.html' */) ?
            [registrar.classList.add('hidden')] :
    null;


    btnAqui.forEach((cadaBtn, i) => {

    btnAqui[i].addEventListener('click', () => {

        bloque.forEach((cadaBloque, i) => {
            bloque[i].classList.remove('hidden');
        })
        bloque[i].classList.add('hidden');

    })

})
}

ocultarTodoLogin();

ejecutarConEnter();

ingresarORegistro();

