import { AsyncStorage } from "react-native";

export default {
  setCurrentImage(image) {
    AsyncStorage.setItem("currentImage", image);
  },
  getCurrentImage() {
    return AsyncStorage.getItem("currentImage");
  }
};
