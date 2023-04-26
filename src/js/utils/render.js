const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
};

const render = (parentNode, childNode) => {
    parentNode.append(childNode);
};

export { render, createElement };
