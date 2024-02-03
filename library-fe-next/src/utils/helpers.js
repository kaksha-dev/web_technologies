export function checkIsUserLoggedIn() {
  if (localStorage.getItem("authToken")) {
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("authToken");
  window.location.reload();
}
