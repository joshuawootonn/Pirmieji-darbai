const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const registerEmailInput = document
    .querySelector("#registerEmailInput")
    .value.trim();
  const registerPasswordInput = document
    .querySelector("#registerPasswordInput")
    .value.trim();

  try {
    const res = await fetch("http://localhost:5003/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: registerEmailInput,
        password: registerPasswordInput,
      }),
    });
    if (res.ok) {
      registerForm.reset();
      const user = await res.json();

      localStorage.setItem("accessToken", user.token);
      window.location.assign("./login.html");
    }
    if (!res.ok) {
      return console.error("Can not register you.");
    }
  } catch (error) {
    return console.error(error);
  }
});
