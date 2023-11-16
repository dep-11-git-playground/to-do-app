function initializeToolTips(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

const liElm = document.querySelector("li");

for(let i = 0; i < 15; i++){
    const cloneElm = liElm.cloneNode(true);
    document.querySelector("ul").append(cloneElm);
}

initializeToolTips();