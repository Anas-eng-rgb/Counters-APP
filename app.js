const increaseBtn = document.querySelectorAll('.btnIncrease');
const decreaseBtn = document.querySelectorAll('.btnDecrease');

increaseBtn.forEach((item) => {
    item.addEventListener('click' , changesIncrease); 
});


decreaseBtn.forEach((item) => {
    item.addEventListener('click' , changesDecrease);
})

function changesIncrease() {
        let r = Number(Math.random() * 255);
        let g = Number(Math.random() * 255);
        let b = Number(Math.random() * 255);
        const card = this.closest('.card');
        card.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
        const title = card.querySelector('h2');
        title.textContent = +title.textContent + 1;
}

function changesDecrease() {

        let r = Number(Math.random() * 255);
        let g = Number(Math.random() * 255);
        let b = Number(Math.random() * 255);
        const card = this.closest('.card');
        card.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
        const title = card.querySelector('h2');
        title.textContent = title.textContent - 1;
        if(title.textContent < 0) {
            title.textContent = 0;
        }
}