const formularioRegistro = document.querySelector('#formularioRegistro');

formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    registro();
})

function registro() {

    let emailRegistro = document.querySelector('#emailRegistro').value;
    let passwordRegistro = document.querySelector('#passwordRegistro').value;
    let passwordRegistroConfirmar = document.querySelector('#passwordRegistroConfirmar').value;

    registroCompleto.classList.add('hidden');

    emailRegistro === "" ?
        
    [ocultarTodoLogin(), emailVacioRegistro.classList.remove('hidden')] :
        
        /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|gmail)\.(?:|com|es)+$/i.test(emailRegistro) === false ?
            
        [ocultarTodoLogin(), emailIncorrectoRegistro.classList.remove('hidden')] :

            passwordRegistro === "" ?
                
            [ocultarTodoLogin(), passwordVaciaRegistro.classList.remove('hidden')] :
                
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