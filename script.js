const loginbtn = document.querySelector(".Login-btn");
const login_drop = document.querySelector(".login-drop");
const menu_items = document.querySelector(".menu-items");
loginbtn.onclick = () =>{
    login_drop.classList.toggle("login-drop-open");
};
menu_items.onclick =()=>{
    menu_items.classList.toggle("move");
}


  