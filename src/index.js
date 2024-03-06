import './banner.js';
import './tabs.js';
import * as lodash from "lodash";
import './assets/css/style.css';
import Icon from "/public/image/icon.png";
import Data from "./assets/text/data.xml";
import Notes from "./assets/text/data.csv";

// 这样直接引入是没办执行的

function component() {
  const element = document.createElement("div");
  // 使用lodash
  element.innerHTML = lodash.join(["Hello", "Webpack"], "");
  element.classList.add("test");

  // 将图像添加到已存在的div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  
  return element;
}

// 执行当前脚本 将会往body中插入div
document.body.appendChild((component()));


