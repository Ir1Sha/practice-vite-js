(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const m={email:"user@mail.com",password:"secret"},a="user-data",d=localStorage.getItem(a),f=document.querySelector(".login-form"),o=document.querySelector("[name='email']"),n=document.querySelector("[name='password']"),s=document.querySelector(".login-form button");f.addEventListener("submit",p);function p(t){if(t.preventDefault(),s.textContent==="Logout"){localStorage.removeItem(a),s.textContent="Login",f.reset(),o.removeAttribute("readonly"),n.removeAttribute("readonly");return}if(!o.value.trim()||!n.value.trim()){alert("Fill all fields");return}if(m.email!==o.value.trim()||m.password!==n.value.trim()){alert("Incorrect data");return}localStorage.setItem(a,JSON.stringify({email:o.value.trim(),password:n.value.trim()})),s.textContent="Logout",o.setAttribute("readonly",!0),n.setAttribute("readonly",!0)}if(d){const t=JSON.parse(d);o.value=t.email||"",n.value=t.password||"",s.textContent="Logout",o.setAttribute("readonly",!0),n.setAttribute("readonly",!0)}const g=Number(prompt("Enter smthing"));function y(t){return new Promise((i,l)=>{isNaN(t)&&l("error"),t%2===0&&setTimeout(()=>i("even"),1e3),t%2!==0&&setTimeout(()=>i("odd"),2e3)})}y(g).then(t=>console.log(t)).catch(t=>console.log(t));
//# sourceMappingURL=index.js.map
