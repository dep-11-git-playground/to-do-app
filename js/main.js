function initializeToolTips(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

initializeToolTips();

class TaskItem {
    id;
    checked;
    description;
    #liElm;

    constructor(id, description, checked = false){
        this.id = id;
        this.checked = checked;
        this.description = description;
        this.#liElm = this.addItemToList();
        this.#liElm.querySelector(".delete").addEventListener('click', ()=>{
            this.#liElm.remove();
        });
    }

    addItemToList(){
        const ulElm = document.querySelector("ul");
        const liElm = document.createElement('li');
        liElm.className = 'd-flex align-items-center justify-content-between py-2 px-3';
        liElm.innerHTML = `
            <div class="form-check">
                <input ${this.checked ? 'checked' : ''} 
                    class="form-check-input" type="checkbox" value="" id="chk-${this.id}">
                <label class="form-check-label" for="chk-${this.id}">
                    ${this.description}
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
        return liElm;
    }
}

const btnAddElm = document.querySelector('#btn-add');
const txtTaskElm = document.querySelector('#txt-task');
let lastTaskId = 0;

btnAddElm.addEventListener('click', ()=> {
    const text = txtTaskElm.value.trim();
    if (text){
        new TaskItem(lastTaskId++, text);
        txtTaskElm.value = '';
        txtTaskElm.focus();
    }else {
        txtTaskElm.focus();
        txtTaskElm.select();
    }
});

txtTaskElm.addEventListener('keypress', (e)=>{
    if (e.key === "Enter") btnAddElm.click();
});