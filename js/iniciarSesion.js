const formularioIngreso = document.querySelector('#formularioIngreso');

formularioIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
    ingreso();
})
    
function ingreso() {

    let emailIngresado = document.querySelector('#emailUsuarioInicio').value;
    let passwordIngresada = document.querySelector('#passwordUsuarioInicio').value;

    emailIngresado === "" ?
        
        [ocultarTodoLogin(), emailVacioInicio.classList.remove('hidden')] :

        /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|gmail|banifox)\.(?:|com|com.uy|es)+$/i.test(emailIngresado) === false ?
            
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

                [usuarioActivo.push(usuarioExiste), sessionStorage.setItem('Usuario Activo', JSON.stringify(usuarioActivo)), ocultarTodoLogin(), sesion(), location.href = '/JsPreEntrega3Alvarez/pages/miCuenta.html'/* '/pages/miCuenta.html' */] :
                
                [ocultarTodoLogin(), incorrectosInicio.classList.remove('hidden')]] :
            
        usuarioNoExiste.classList.remove('hidden');
        
        document.querySelector('#emailUsuarioInicio').value = "";
        document.querySelector('#passwordUsuarioInicio').value = ""; 

    }

}

