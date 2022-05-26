const login = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  console.info(email,password)
}

document
  .getElementById('#login-button')
  .addEventListener('submit', login);

// document
//   .querySelector('#signup-form')
//   .addEventListener('submit', signupFormHandler);
