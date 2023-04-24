const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
};

export default createElement;
