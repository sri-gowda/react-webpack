const canAccessable = location => {
    const allowedRoutes = ["/", "signup", "/login"]; // allowed routes for unauthorized user
    try {
      const user = getUser();
      if (user && user.sid && user.is_logged_in) {
        return true;
      } else if (allowedRoutes.includes(location.path)) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
};
  
const getUser = () => {
    try {
        let user = undefined;
        if (sessionStorage.getItem("USER_INFO") !== "undefined") {
        user = JSON.parse(sessionStorage.getItem("USER_INFO"));
        }
        return user;
    } catch (e) {
        console.log(e.toString());
    }
};
  
const setUser = user => {
    try {
        sessionStorage.setItem("USER_INFO", JSON.stringify(user));
    } catch (e) {
        console.log(e);
    }
};
  
const removeUser = () => {
    try {
        sessionStorage.removeItem("USER_INFO");
    } catch (e) {
        console.log(e);
    }
}
  
  export { setUser, getUser,removeUser, canAccessable };
  