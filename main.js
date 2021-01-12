const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('test')

    const male = document.querySelector('.male');
    const female = document.querySelector('.female')

    if(!male.checked && !female.checked) {
        document.querySelector('.check-boxes').style.border = '2px solid red'
    } else {
        document.querySelector('.check-boxes').style.border = '2px solid green'
    }
})
