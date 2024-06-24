export default () => {
    const selects = document.querySelectorAll('.select');

    selects.forEach((select) => {
        const inputs = select.querySelectorAll('input[type="radio"]');
        const current = select.querySelector('.select__current');

        inputs.forEach((input) => {
            input.addEventListener('input', (e) => {
                const text = e.target.nextElementSibling.textContent;
                current.textContent = text;
            })
        })
    })
}
