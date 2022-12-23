
const ingresar = document.querySelector('#ingresar');
const registrar = document.querySelector('#registrar');



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

                [usuarioActivo.push(usuarioExiste), sessionStorage.setItem('Usuario Activo', JSON.stringify(usuarioActivo)), ocultarTodoLogin(), sesion(), location.href = /* '/JsPreEntrega3Alvarez/pages/miCuenta.html' */'/pages/miCuenta.html'] :
                
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

function sesion() {

    const nombreCuenta = document.querySelector('.nombreCuenta');
    const eliminarCuenta = document.getElementById('eliminarCuenta');

    sessionStorage.getItem('Usuario Activo') !== null ?
        
        [bienvenido.classList.remove('hidden'), registroHeader.classList.add('hidden'), ingresarHeader.classList.add('hidden'), dropCuenta.classList.remove('hidden'), nombreCuenta.innerHTML = JSON.parse(sessionStorage.getItem('Usuario Activo'))[0].emailUsuario] :
    
        [bienvenido.classList.add('hidden'), registroHeader.classList.remove('hidden'), ingresarHeader.classList.remove('hidden'), dropCuenta.classList.add('hidden')];
    
    
    
    function eliminarUsuario() {
        
        eliminarCuenta.addEventListener('click', () => {
            usuarioAEliminar = JSON.parse(sessionStorage.getItem('Usuario Activo'))[0].emailUsuario;
            console.log(usuarioAEliminar);
            sessionStorage.removeItem('Usuario Activo');
            localStorage.removeItem(usuarioAEliminar);
            location.href = '/pages/registro.html' /* '/JsPreEntrega3Alvarez/pages/registro.html' */;
        })

    }
    
    function cerrarSesion (){
        const cerrarSesion = document.getElementById('cerrarSesion');
        cerrarSesion.onclick = () => {
            sessionStorage.removeItem('Usuario Activo');
            location.href = '/index.html' /* '/JsPreEntrega3Alvarez/index.html' */;
        sesion();
        }
    }

    cerrarSesion();

    eliminarCuenta !== null ?
        eliminarUsuario() : null;

    
}

function ejecutarConEnter() {

    const mainLogin = document.querySelector('.mainDeLogin');
    const enter = document.querySelectorAll('.enter');

    [mainLogin !== null]?

    [enter.forEach((cadaEnter, i) => {
        enter[i].addEventListener('keyup', function (e) {
            ingresar.classList.contains('hidden') === false ?
                e.keyCode === 13 ? ingreso() : registro : null;
        })
    })] :

        null;
    
}

function ingresarORegistro() {

    const bloque = document.querySelectorAll('.bloque');
    const btnAqui = document.querySelectorAll('.btnAqui');

    window.location.pathname === (/* '/JsPreEntrega3Alvarez/pages/registro.html' */ '/pages/registro.html') ?
        [ingresar.classList.add('hidden')] :
        window.location.pathname === (/* '/JsPreEntrega3Alvarez/pages/ingreso.html' */ '/pages/ingreso.html') ?
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




    

 




