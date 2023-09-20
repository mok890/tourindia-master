document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form1");
  const signupForm = document.getElementById("signup-form1");
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
    const response = await fetch("/loginhotel", {
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
    const hotelname = document.getElementById("hotelname").value;
    const ownername = document.getElementById("ownername").value;
    const address = document.getElementById("address").value;
    const gst = document.getElementById("gst").value;
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Send signup data to the server for registration
    const response = await fetch("/signuphotel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelname,
        ownername,
        address,
        gst,
        email,
        password,
      }),
    });
// console.log("Hotels after push:", hotels);
    if (response.ok) {
      // Redirect to the home page or display a success message
      window.location.href = "/loginhotel";
    } else {
      alert("Signup failed. Please try again.");
    }
  });
});
