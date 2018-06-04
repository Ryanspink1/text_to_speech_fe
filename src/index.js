import index from "./js/index";
import './semantic/dist/semantic.min.css';


console.log(`Started`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
