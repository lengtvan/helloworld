function changeTheme(id) {
  const theme = document.getElementsByTagName("link")[11];
  switch (id) {
    case "typography1":
      theme.href = "assets/css/Medieval.css";
      break;
    case "typography2":
      theme.href = "assets/css/19thCentury.css";
      break;
    case "typography3":
      theme.href = "assets/css/Firsthalf20th.css";
      break;
    case "typography4":
      theme.href = "assets/css/Secondhalf20th.css";
      break;
    case "typography5":
      theme.href = "assets/css/Late20th.css";
      break;
    case "typography6":
      theme.href = "assets/css/2030.css";
      break;
    case "default":
      theme.href = "asset/css/main.css";
      break;
    default:
      theme.href = "asset/css/main.css";
  }
}
document.getElementById("typography1").addEventListener("click", () => {
  changeTheme("typography1");
});
document.getElementById("typography2").addEventListener("click", () => {
  changeTheme("typography2");
});
document.getElementById("typography3").addEventListener("click", () => {
  changeTheme("typography3");
});
document.getElementById("typography4").addEventListener("click", () => {
  changeTheme("typography4");
});
document.getElementById("typography5").addEventListener("click", () => {
  changeTheme("typography5");
});
document.getElementById("typography6").addEventListener("click", () => {
  changeTheme("typography6");
});
document.getElementById("default").addEventListener("click", () => {
  changeTheme("default");
});
