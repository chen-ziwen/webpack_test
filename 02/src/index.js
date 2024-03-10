
function getComponent () {
    // 这里使用动态导入的方式 通过动态导入的方式分离出一个bundle
    // 直接通过动态导入的chunk是使用唯一id来指定的，这个时候可以使用魔法注释指定chunk名 (/* webpackChunkName: "lodash" */)
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: {join}})=>{
        const element = document.createElement("div");

        element.innerHTML = join(["hello, webpack","yyds"],"");

        return element;
    }).catch((error)=>'An error occurred while loading the component')
}

getComponent().then((component)=> {
    document.body.appendChild(component);
});