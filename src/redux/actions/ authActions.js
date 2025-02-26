export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      // API isteğini burada yapabilirsin
      console.log("Giriş yapan kullanıcı:", userData);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.message,
      });
    }
  };
};
