let count = 0;

const countHeading = document.querySelector('#count');
const incrementBtn = document.querySelector('#increment-btn');
const resetBtn = document.querySelector('#reset-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    countHeading.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countHeading.textContent = count;
})