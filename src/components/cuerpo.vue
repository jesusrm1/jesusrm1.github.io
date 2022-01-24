<template>
    <div class="cuerpo">
		<p class="titulo">Prueba de validación de formularios</p>
		<form action="" class="formulario" id="formulario">
			<div id="grupo__usuario">
				<label for="usuario" class="subtitulo">Usuario</label>
				<br>
				<div>
					<input type="text" class="formulario_input" name="usuario" id="usuario" placeholder="jesus123">
					<i class="fas fa-times-circle"></i>
				</div>
				<p class="comentario">(El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.)</p>
			</div>
			<div id="grupo__nombre">
				<br>
				<label for="nombre" class="subtitulo">Nombre</label>
				<div>
					<input type="text" class="formulario_input" name="nombre" id="nombre" placeholder="Jesus Alfonso">
					<i class="fas fa-times-circle"></i>
				</div>
				<p class="comentario">(El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.)</p>
			</div>
			<div id="grupo__password">
				<br>
				<label for="password" class="subtitulo">Contraseña</label>
				<div>
					<input type="password" class="formulario_input" name="password" id="password">
					<i class="fas fa-times-circle"></i>
				</div>
				<p class="comentario">(La contraseña tiene que ser de 4 a 12 dígitos.)</p>
			</div>
			<div id="grupo__password2">
				<br>
				<label for="password2" class="subtitulo">Repetir Contraseña</label>
				<div>
					<input type="password" class="formulario_input" name="password2" id="password2">
					<i class=" fas fa-times-circle"></i>
				</div>
				<p class="comentario">(Ambas contraseñas deben ser iguales.)</p>
			</div>
			<div id="grupo__correo">
				<br>
				<label for="correo" class="subtitulo">Correo Electrónico</label>
				<div>
					<input type="email" class="formulario_input" name="correo" id="correo" placeholder="correo@correo.com">
					<i class="fas fa-times-circle"></i>
				</div>
				<p class="comentario">(El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.)</p>
			</div>
			<div id="grupo__telefono">
				<br>
				<label for="telefono" class="subtitulo">Teléfono</label>
				<div>
					<input type="text" class="formulario_input" name="telefono" id="telefono" placeholder="12345678">
					<i class="fas fa-times-circle"></i>
				</div>
				<p class="comentario">(El telefono solo puede contener numeros y el maximo son 14 dígitos.)</p>
			</div>
		</form>
    </div>
</template>

<script >
    export default {
    data: () => ({
    
    }),
    mounted() {
        const formulario = document.getElementById('formulario');
		const inputs = document.querySelectorAll('#formulario input');

		const expresiones = {
			usuario: /^[a-zA-Z0-9-]{4,16}$/, // Letras, numeros, guion y guion_bajo
			nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
			password: /^.{4,12}$/, // 4 a 12 digitos.
			correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			telefono: /^\d{7,14}$/ // 7 a 14 numeros.
		}

		const campos = {
			usuario: false,
			nombre: false,
			password: false,
			correo: false,
			telefono: false
		}

		const validarFormulario = (e) => {
			switch (e.target.name) {
				case "usuario":
					validarCampo(expresiones.usuario, e.target, 'usuario');
				break;
				case "nombre":
					validarCampo(expresiones.nombre, e.target, 'nombre');
				break;
				case "password":
					validarCampo(expresiones.password, e.target, 'password');
					validarPassword2();
				break;
				case "password2":
					validarPassword2();
				break;
				case "correo":
					validarCampo(expresiones.correo, e.target, 'correo');
				break;
				case "telefono":
					validarCampo(expresiones.telefono, e.target, 'telefono');
				break;
			}
		}

		const validarCampo = (expresion, input, campo) => {
			if(expresion.test(input.value)){
				document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
				document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
				campos[campo] = true;
			} else {
				document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
				document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
				campos[campo] = false;
			}
		}

		const validarPassword2 = () => {
			const inputPassword1 = document.getElementById('password');
			const inputPassword2 = document.getElementById('password2');
			if(inputPassword1.value !== inputPassword2.value){
				document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
				document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
				campos['password'] = false;
			} else {
				document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
				document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
				campos['password'] = true;
			}
		}

		inputs.forEach((input) => {
			input.addEventListener('keyup', validarFormulario);
			input.addEventListener('blur', validarFormulario);
		});

		formulario.addEventListener('submit', (e) => {
			e.preventDefault();

			const terminos = document.getElementById('terminos');
			if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
				formulario.reset();
			} 
		});
	},
    methods: {

    }
  }
</script>

<style>
    .cuerpo{
        padding:30px;
        background:   #fdfefe  ;
        margin: 30px 20% 0; 
		display: block;
		
    }
	.titulo{
		font-size: 25px;
		margin: 5%;
		text-align: center;
		text-transform: uppercase;
	}
	.subtitulo{
		font-size: 20px;
	}
    .formulario {
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	.formulario_input {
		width: 90%;
		background: rgb(221, 219, 219);
		border: 3px solid transparent;
		border-radius: 3px;
		height: 45px;
		line-height: 45px;
		padding: 0 40px 0 10px;
		transition: .3s ease all;
	}

</style>