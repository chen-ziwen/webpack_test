
function getComponent () {
    // 这里使用动态导入的方式 通过动态导入的方式分离出一个bundle
    return import('lodash').then(({default: {join}})=>{
        const element = document.createElement("div");

        element.innerHTML = join(["hello, webpack"],"");

        return element;
    }).catch((error)=>'An error occurred while loading the component')
}

getComponent().then((component)=> {
    document.body.appendChild(component);
});