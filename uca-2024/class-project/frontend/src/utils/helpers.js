export const isUserLoggedIn = () => {
  let loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
  return loggedInUserEmail ? true : false;
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("loggedInUserEmail");
  localStorage.removeItem("userDetails");
  window.location.reload();
};
