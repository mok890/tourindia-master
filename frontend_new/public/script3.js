document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form2");
  const signupForm = document.getElementById("signup-form2");
  //   const toggleSignup = document.getElementById("toggle-signup");
  //   const toggleLogin = document.getElementById("toggle-login");
  //   const signupContainer = document.getElementById("signup-container");

  //   toggleSignup.addEventListener("click", () => {
  //     loginForm.classList.add("hidden");
  //     signupContainer.classList.remove("hidden");
  //   });

  //   toggleLogin.addEventListener("click", () => {
  //     loginForm.classList.remove("hidden");
  //     signupContainer.classList.add("hidden");
  //   });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Send login data to the server for validation
    const response = await fetch("/loginguide", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Redirect to the home page or display a success message
      window.location.href = "/";
    } else {
      alert("Login failed. Please check your credentials.");
    }
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const license = document.getElementById("license").value;
    const experience = document.getElementById("experience").value;
    const gender = document.getElementById("gender").value;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Send signup data to the server for registration
    const response = await fetch("/signupguide", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        license,
        experience,
        gender,
        email,
        password,
      }),
    });
    // console.log("Hotels after push:", hotels);
    if (response.ok) {
      // Redirect to the home page or display a success message
      console.log("Details stored")
      window.location.href = "/loginguide";
      
    } else {
      alert("Signup failed. Please try again.");
    }
  });
});
