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
            location.href = /* '/pages/registro.html' */ '/JsPreEntrega3Alvarez/pages/registro.html';
        })

    }
    
    function cerrarSesion (){
        const cerrarSesion = document.getElementById('cerrarSesion');
        cerrarSesion.onclick = () => {
            sessionStorage.removeItem('Usuario Activo');
            location.href = /* '/index.html' */ '/JsPreEntrega3Alvarez/index.html';
            sesion();
        }
    }


    let existeAdmin = JSON.parse(localStorage.getItem('admin@banifox.com.uy'), usuarioAdmin.emailUsuario && usuarioAdmin.passwordUsuario);

    console.log(existeAdmin);

    let usuarioActivo = {
        emailUsuario: JSON.parse(sessionStorage.getItem('Usuario Activo'))[0].emailUsuario,
        passwordUsuario: JSON.parse(sessionStorage.getItem('Usuario Activo'))[0].passwordUsuario
    };

    console.log(usuarioActivo);

    let comparadorAdmin = `${existeAdmin.emailUsuario}` === `${usuarioActivo.emailUsuario}`;

    console.log(comparadorAdmin);

    window.location.pathname === /* '/index.html' */ '/JsPreEntrega3Alvarez/index.html' ?
        `${existeAdmin.emailUsuario}` === `${usuarioActivo.emailUsuario}` ?
            creadorProductos.classList.remove('hidden') :
            creadorProductos.classList.add('hidden') :
    null;
        
    cerrarSesion();

    eliminarCuenta !== null ?
        eliminarUsuario() : null;

    
}

sesion();