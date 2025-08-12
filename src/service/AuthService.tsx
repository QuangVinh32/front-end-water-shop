import request from "./AxiosClient";

const authService = {
  login(credentials) {
    return request.post("login", credentials);
  },
  register(payload) {
    return request.post("register", payload);
  },
};

export default authService;