export const loginAction = credentials => {
  console.log("login action", credentials);
  //XHR to server here
  //XHR Successed get token;
  const token = new Date().toString();
  const access_arr = [1, 2, 3, 4];
  const responseFromServer = { ...credentials, token, access_arr };
  localStorage.setItem("user", JSON.stringify(responseFromServer));
  setTimeout(() => {
      window.location.reload();
  }, 250);
  return {
    type: "LOGIN_ACTION",
    responseFromServer
  };
};
