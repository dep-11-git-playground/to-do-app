function initializeToolTips(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

initializeToolTips();

class TaskItem {
    checked;
    description;

    constructor(checked, description){
        this.checked = checked;
        this.description = description;
        this.addItemToList();
    }

    addItemToList(){
        const ulElm = document.querySelector("ul");
        const liElm = document.createElement('li');
        liElm.className = 'd-flex align-items-center justify-content-between py-2 px-3';
        liElm.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="chk-1">
                <label class="form-check-label" for="chk-1">
                    Design Wireframes in Figma
                </label>
            </div>
            <div class="d-flex gap-3 fs-5">
                <i  data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title="Click to edit" 
                class="edit bi bi-pencil-fill"></i>
                <i data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title="Click to delete" 
                class="delete bi bi-trash-fill"></i>
            </div>          
        `;
        ulElm.prepend(liElm);
    }
}

new TaskItem();