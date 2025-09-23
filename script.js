console.log("Welcome to EduHub!");

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// Protect materials section
if (localStorage.getItem("loggedIn") !== "true") {
  const materialsList = document.getElementById("materialsList");
  if (materialsList) {
    materialsList.innerHTML = "<p>Please log in to access learning materials.</p>";
  }
}
