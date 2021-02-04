import "../sass/index.scss"


const initHelloWorld = () =>{
    const tagH1 = document.createElement('h1')
    tagH1.innerHTML = 'Im Groot'
    tagH1.classList.add('title')
    return tagH1
}

document.body.appendChild(initHelloWorld())