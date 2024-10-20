const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cps-display");
const grandmaBtn = document.getElementById("grandma-btn");
const grandadBtn = document.getElementById("grandad-btn");
const whatIsThis = document.getElementById("what-is-this");

let cookies = parseInt(localStorage.getItem("cookies")) || 0;
let cps = parseInt(localStorage.getItem("cps")) || 0;

cookieDisplay.textContent = cookies;
cpsDisplay.textContent = cps;

setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", cookies);
}, 1000);

cookieBtn.addEventListener("click", function () {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", cookies);
});

grandmaBtn.addEventListener("click", function () {
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
  }
});
grandadBtn.addEventListener("click", function () {
  if (cookies >= 100) {
    cps = cps + 10;
    cookies = cookies - 100;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
  }
});

whatIsThis.addEventListener("click", function () {
  if (cookies >= 1000) {
    cps = cps + 100;
    cookies = cookies - 1000;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
  }
});
