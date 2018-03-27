import { AppRegistry } from "react-native";
import App from "./App";

//phone template
import './css/phone-template-style.css'

// Generate required css
import iconFont from "react-native-vector-icons/Fonts/Ionicons.ttf";
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}
//inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
