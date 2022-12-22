const bloque = document.querySelectorAll('.bloque');
const btnAqui = document.querySelectorAll('.btnAqui');
const mainLogin = document.querySelector('.mainDeLogin');
const ingresar = document.querySelector('#ingresar');
const registrar = document.querySelector('#registrar');
const enter = document.querySelectorAll('.enter');


function ingreso() {

    let emailIngresado = document.querySelector('#emailUsuarioInicio').value;
    let passwordIngresada = document.querySelector('#passwordUsuarioInicio').value;

    emailIngresado === "" ?
        
        [ocultarTodoLogin(), emailVacioInicio.classList.remove('hidden')] :

        /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|gmail)\.(?:|com|es)+$/i.test(emailIngresado) === false ?
            
            [ocultarTodoLogin(), emailIncorrectoInicio.classList.remove('hidden'), emailVacioInicio.classList.add('hidden')] :

            passwordIngresada === "" ?
                
                [ocultarTodoLogin(), emailIncorrectoInicio.classList.add('hidden'), passwordVaciaInicio.classList.remove('hidden')] :

    [ocultarTodoLogin(), comparadorUsuarios()];

    function comparadorUsuarios() {
        
        let usuarioAIngresar = {
            emailUsuario: emailIngresado.toLowerCase(),
            passwordUsuario: passwordIngresada
        };

        let usuarioExiste = JSON.parse(localStorage.getItem(`${usuarioAIngresar.emailUsuario}`, usuarioAIngresar.emailUsuario && usuarioAIngresar.passwordUsuario));

        usuarioExiste !== null ?
            
            [usuarioExiste.emailUsuario === usuarioAIngresar.emailUsuario && usuarioExiste.passwordUsuario === usuarioAIngresar.passwordUsuario ?

                [usuarioActivo.push(usuarioExiste), sessionStorage.setItem('Usuario Activo', JSON.stringify(usuarioActivo)), ocultarTodoLogin(), sesion(), location.href = '/JsPreEntrega3Alvarez/pages/miCuenta.html'] :
                
                [ocultarTodoLogin(), incorrectosInicio.classList.remove('hidden')]] :
            
        usuarioNoExiste.classList.remove('hidden');
        
        document.querySelector('#emailUsuarioInicio').value = "";
        document.querySelector('#passwordUsuarioInicio').value = ""; 

    }

}
 
function registro() {

    let emailRegistro = document.querySelector('#emailRegistro').value;
    let passwordRegistro = document.querySelector('#passwordRegistro').value;
    let passwordRegistroConfirmar = document.querySelector('#passwordRegistroConfirmar').value;

    registroCompleto.classList.add('hidden');

    emailRegistro === "" ?
        
    [emailVacioRegistro.classList.remove('hidden'), usuarioExisteRegistro.classList.add('hidden')] :
        
        /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|gmail)\.(?:|com|es)+$/i.test(emailRegistro) === false ?
            
        [emailIncorrectoRegistro.classList.remove('hidden'), emailVacioRegistro.classList.add('hidden'), usuarioExisteRegistro.classList.add('hidden')] :

            passwordRegistro === "" ?
                
            [emailIncorrectoRegistro.classList.add('hidden'), passwordVaciaRegistro.classList.remove('hidden'), usuarioExisteRegistro.classList.add('hidden')] :
                
                (passwordRegistro === passwordRegistroConfirmar ?

                controlRegistro() :
                    
    [passwordVaciaRegistro.classList.add('hidden'), passwordIgualesRegistro.classList.remove('hidden'), usuarioExisteRegistro.classList.add('hidden')]);
    

    function controlRegistro() {

        let usuarioARegistrar = {
            emailUsuario: emailRegistro.toLowerCase(),
            passwordUsuario: passwordRegistro
        };

        
        let usuarioExiste = JSON.parse(localStorage.getItem(`${usuarioARegistrar.emailUsuario}`, usuarioARegistrar));
        console.log(usuarioExiste);


        usuarioExiste === null ? 
            
            [(nuevoUsuario = new Usuario(usuarioARegistrar.emailUsuario, usuarioARegistrar.passwordUsuario)), (usuarios.push(nuevoUsuario)), nuevoUsuario.guardarUsuario(), ocultarTodoLogin(), (registroCompleto.classList.remove('hidden'))] :

        [ocultarTodoLogin(), usuarioExisteRegistro.classList.remove('hidden')];

        document.querySelector('#emailRegistro').value = "";
        document.querySelector('#passwordRegistro').value = "";
        document.querySelector('#passwordRegistroConfirmar').value = "";

    }
}

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

function sesion () {

    sessionStorage.getItem('Usuario Activo') !== null ?
        
        [bienvenido.classList.remove('hidden'), registroHeader.classList.add('hidden'), ingresarHeader.classList.add('hidden'), dropCuenta.classList.remove('hidden')] :
    
        [bienvenido.classList.add('hidden'), registroHeader.classList.remove('hidden'), ingresarHeader.classList.remove('hidden'), dropCuenta.classList.add('hidden')];
    
    cerrarSesion();
    function cerrarSesion (){
        const cerrarSesion = document.getElementById('cerrarSesion');
        cerrarSesion.onclick = () => {
        sessionStorage.removeItem('Usuario Activo');
        sesion();
        }
    }
    
}

function ejecutarConEnter() {

    [mainLogin !== null]?

    [enter.forEach((cadaEnter, i) => {
        enter[i].addEventListener('keyup', function (e) {
            ingresar.classList.contains('hidden') === false ?
                e.keyCode === 13 ? ingreso() : null :
                e.keyCode === 13 ? registro() : null;
        })
    })] :

        null;
    
}

function ingresarORegistro() {

    window.location.pathname === ('/JsPreEntrega3Alvarez/pages/registro.html') ?
        [ingresar.classList.add('hidden')] :
        window.location.pathname === ('/JsPreEntrega3Alvarez/pages/ingreso.html') ?
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

sesion();

ingresarORegistro();

ejecutarConEnter();




    

 




