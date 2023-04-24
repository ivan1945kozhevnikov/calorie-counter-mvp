const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
};

const render = (parentNode, childNode) => {
    parentNode.appendChild(childNode);
};

export { render, createElement };
