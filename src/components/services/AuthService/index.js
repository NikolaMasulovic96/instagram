import { AsyncStorage } from "react-native";

export default {
  login(loginDto) {
    // return http
    //   .post("http://185.26.117.87:8080/webtv/loginCmsCustomer", loginDto)
    //   .then(({ data }) =>
    //     AsyncStorage.setItem("userData", JSON.stringify(data))
    //   );
    AsyncStorage.setItem("userData", loginDto);
    console.warn(loginDto);
  },
  logout() {
    return AsyncStorage.removeItem("userData");
  },
  getUser() {
    return AsyncStorage.getItem("userData").then(data => JSON.parse(data));
  },
  isLoggedIn() {
    return new Promise(resolve => {
      this.getUser().then(data => {
        if (!data) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }
};
