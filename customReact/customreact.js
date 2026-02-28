function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.porps.target)
    container.Children(domElement)
}

const reactElement = {
    type: 'a',
    porps: {
        href: 'https://www.linkedin.com',
        target: '_blank',
    },
    Children: 'Click me to visit LinkedIn'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)