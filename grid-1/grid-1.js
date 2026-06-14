document.addEventListener("click", (ev) => {
  if (!ev.target.classList.contains("save-btn")) return;
  const block = ev.target.closest(".dyn-block");
  var text = block.querySelector(".d1").value;
  document.getElementById("out1").textContent = text;
  const enabled = block.querySelector(".enable-checkbox")?.checked ?? true;
  text = block.querySelector(".d2").value;
  document.getElementById("out2").textContent = text;
  document.getElementById("out2active").textContent = enabled ? "kyllä" : "ei";
});

document.addEventListener("click", (ev) => {
  if (!ev.target.classList.contains("cancel-btn")) return;
  const block = ev.target.closest(".dyn-block");
  block.querySelector(".d1").value = "";
  block.querySelector(".d2").value = "";
});

document.addEventListener("click", (ev) => {
  if (!ev.target.classList.contains("enable-checkbox")) return;
  const block = ev.target.closest(".dyn-block");
  const display= block.querySelector('.enable-checkbox').checked?'':'none';
  const el=block.querySelector('.d2');
  if(el){
    el.style.display = display;
    el.value='';
  }
});
