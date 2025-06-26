function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Change icon depending on mode
  if (body.classList.contains("light")) {
    icon.src = "assets/moon.png"; // Light mode → moon icon
  } else {
    icon.src = "assets/sun.png"; // Dark mode → sun icon
  }
}