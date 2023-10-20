

function registrar(event) {
			event.preventDefault();

			const usernameInput = document.querySelector('#username'); 
			const emailInput = document.querySelector('#email'); 
			const passwordInput = document.querySelector('#password'); 
			const confirmPasswordInput = document.querySelector('#confirm-password'); 

			if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
			alert("Por favor, complete todos los campos");
			return false;
			}

			if (passwordInput.value !== confirmPasswordInput.value) {
			alert("Las contraseñas no coinciden"); 
			return false;
			}

			sessionStorage.setItem("username", usernameInput.value);
			sessionStorage.setItem("email", emailInput.value);
			sessionStorage.setItem("password", passwordInput.value);

			alert("¡Registrado correctamente!");
			window.location.href = "login.html";
}


function iniciarSesion(event) {
	
		  event.preventDefault();
		  const usernameInput = document.querySelector('#login-username'); 
		  const passwordInput = document.querySelector('#login-password'); 

		  const storedEmail = sessionStorage.getItem("#email");
		  const storedPassword = sessionStorage.getItem("#password");

		  if (usernameInput.value !== storedEmail || passwordInput.value !== storedPassword) {
			alert("¡Logeado correctamente!");
		    window.location.href = "Interfaz.html";
			return false;
		  }
			alert("¡Logeado correctamente!");
		  window.location.href = "Interfaz.html";
}


const enviarBtn = document.querySelector('.enviarbtn');
enviarBtn.addEventListener('click', function() {
  alert("Un nuevo Proyecto ha sido asignado exictosamente");
  window.location.href = "Registro_Datos.html";
});


function mostrarFormularioAdmin() {
  $('#formulario-login').show();
    var anchoFormulario = $('#formulario-login').outerWidth();
  var altoFormulario = $('#formulario-login').outerHeight();
  var posicionIzquierda = ($(window).width() - anchoFormulario) / 2;
  var posicionArriba = ($(window).height() - altoFormulario) / 2;
  $('#formulario-login').css({
  'position': 'fixed',
  'left': posicionIzquierda,
  'top': posicionArriba
  });
}

formulario.addEventListener("submit", validarformulario )

function validarformulario(e){
  const fechaE = document.querySelector("#fecha-entrada").value
  const fechaS = document.querySelector("#fecha-salida").value
  const nombre = document.querySelector("#nombre").value
  const proyecto = document.querySelector("#proyecto").value
  const carrera = document.querySelector("#carrera").value
  const correo = document.querySelector("#correo").value
  const telefono = document.querySelector("#telefono").value

  const respuesta = document.getElementById("respuesta")
  respuesta.textContent = {fechaE}
}

 