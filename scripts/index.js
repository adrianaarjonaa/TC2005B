// console.log("Hola desde JavaScript!");

// alert("¡Hola!");

// confirm("¿Quieres borrar todo?");

// prompt("¿Cómo te llamas?");

const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    // console.log(username.value, password.value);
    if(username.value === "adrianaarjn" && password.value === "pizza"){
        sessionStorage.setItem("name", "Adriana");
        window.location = "/pages/home.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);

password.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        login();
    }
});