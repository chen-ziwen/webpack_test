import './banner.js';
import './tabs.js';
import * as lodash from "lodash";
import './assets/css/style.css';
import Icon from "/public/image/icon.png";
import Data from "./assets/text/data.xml";
import Notes from "./assets/text/data.csv";
import toml from './assets/text/data.toml';
import yaml from './assets/text/data.yaml';
import json from './assets/text/data.json5';
import printMe from "./print";


console.log(toml.title); // 输出 `TOML Example`
console.log(toml.owner.name); // 输出 `Tom Preston-Werner`

console.log(yaml.title); // 输出 `YAML Example`
console.log(yaml.owner.name); // 输出 `Tom Preston-Werner`

console.log(json.title); // 输出 `JSON5 Example`
console.log(json.owner.name); // 输出 `Tom Preston-Werner`
// 这样直接引入是没办执行的

function component() {
    const element = document.createElement("div");
    // 使用lodash
    element.innerHTML = lodash.join(["Hello", "Webpack"], "");
    element.classList.add("test");

    const btn = document.createElement("div");

    btn.innerHTML = "click me and check the console";
    btn.onclick = printMe;

    element.appendChild(btn);
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


