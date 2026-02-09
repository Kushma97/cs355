const toggle = document.getElementById("darkModeToggle");

const saved = localStorage.getItem("mode");

if (saved === "dark") {
  document.body.classList.add("dark");
  toggle.innerHTML = "OFF";
} else {
  toggle.innerHTML = "ON";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
    toggle.innerHTML = "OFF";
  } else {
    localStorage.setItem("mode", "light");
    toggle.innerHTML = "ON";
  }
});
