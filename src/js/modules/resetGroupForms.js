export default () => {
    const resetsForms = document.querySelectorAll('form[data-from-reset]');
    const targetForms = document.querySelectorAll('form[data-for-reset]');

    resetsForms.forEach((resetsForm) => {
        resetsForm.addEventListener('reset', (e) => {
            targetForms.forEach((targetForm) => {
                targetForm.reset();

                resetSelects(targetForm);
            });
        })
    })

    const resetSelects = (selector) => {
        const selects = selector.querySelectorAll('.select');

        selects.forEach((select) => {
            const current = select.querySelector('.select__current');
            const initialItem = select.querySelectorAll('.select__item')[0];
            const initialIValue = initialItem.querySelector('.select__text').textContent;
            const radios = select.querySelectorAll('input[type="radio"]');

            radios[0].checked = true;
            current.textContent = initialIValue;
        })
    }
}
