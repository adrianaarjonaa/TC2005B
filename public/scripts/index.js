//console.log("Hola desde javascript !!!");
//alert("hola");
//confirm("Quieres borrar todo?");
//prompt("dime tu nombre");

const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
    const user = { username: username.value, password: password.value};
    const respuesta = await fetch("http://localhost:5003/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await respuesta.json();
    if (data.isLogin) {
      sessionStorage.setItem("id", data.user.id);
      sessionStorage.setItem("name", data.user.name);
      window.location = "./pages/home.html?id=" + data.user.id;
    } else {
      alert("credenciales incorrectas");
    }
  };
  
  const btnLogin = document.getElementById("btnLogin");
  
  btnLogin.addEventListener("click", login);
  
  password.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      login();
    }
  });