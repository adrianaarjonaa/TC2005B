window.onload = () => {
    if (!sessionStorage.name){
        window.location = "../index.html";
    }
};

const h1 = document.getElementById("saludo");
(h1.innerHTML = "Bienvenido/a "), sessionStorage.name;

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    sessionStorage.removeItem("name");
});

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
    chat.value += "\n" + msg.value;
    msg.value = "";
}

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        sendMsg();
    }
});