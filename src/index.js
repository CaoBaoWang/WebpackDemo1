import x from './x.js'
import png from './assets/1.png'

console.log(x);
console.log('hi');


// const div = document.getElementById('app')
// div.innerHTML = `
//     <img src="${png}" />
// `

const btn = document.createElement('button')
btn.innerText = '懒加载'
btn.onclick = () => {
    const promise = import('./lazy.js')
    promise
        .then((module) => {
            const fn = module.default
            fn()
        })
        .catch(() => {

        })
}
div.appendChild(btn)

