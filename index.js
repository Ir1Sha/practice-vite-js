import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const l={email:"user@mail.com",password:"secret"},a="user-data",n=localStorage.getItem(a),s=document.querySelector(".login-form"),e=document.querySelector("[name='email']"),t=document.querySelector("[name='password']"),r=document.querySelector(".login-form button");s.addEventListener("submit",c);function c(o){if(o.preventDefault(),r.textContent==="Logout"){localStorage.removeItem(a),r.textContent="Login",s.reset(),e.removeAttribute("readonly"),t.removeAttribute("readonly");return}if(!e.value.trim()||!t.value.trim()){alert("Fill all fields");return}if(l.email!==e.value.trim()||l.password!==t.value.trim()){alert("Incorrect data");return}localStorage.setItem(a,JSON.stringify({email:e.value.trim(),password:t.value.trim()})),r.textContent="Logout",e.setAttribute("readonly",!0),t.setAttribute("readonly",!0)}if(n){const o=JSON.parse(n);e.value=o.email||"",t.value=o.password||"",r.textContent="Logout",e.setAttribute("readonly",!0),t.setAttribute("readonly",!0)}const d=document.querySelector("#checkbox"),i=localStorage.getItem("them");i==="dark"&&(document.body.classList.add("dark"),document.body.classList.remove("light"),d.checked=!0);d.addEventListener("change",u);function u(o){o.target.checked?(document.body.classList.add("dark"),localStorage.setItem("them","dark"),document.body.classList.remove("light")):(document.body.classList.add("light"),localStorage.setItem("them","light"),document.body.classList.remove("dark"))}
//# sourceMappingURL=index.js.map