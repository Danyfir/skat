export default () => {
    const inputs = document.querySelectorAll('input[type="radio"][name="list-view-switcher"]');

    inputs.forEach((input) => {
        const toggleList = document.querySelector('[data-toggle-list]');

        if(!toggleList) return;

        input.addEventListener('input', (e) => {
            if(e.target.id === 'list-view-switcher-grid') {
                toggleList.classList.remove('subcategories__list--simple');
                toggleList.classList.add('subcategories__list--triple');
            } else if(e.target.id === 'list-view-switcher-list') {
                toggleList.classList.add('subcategories__list--simple');
                toggleList.classList.remove('subcategories__list--triple');
            }
        })
    })
}
