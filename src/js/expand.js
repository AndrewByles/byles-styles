export default (opts = {}) => {
    const defaultOptions =  {
        expandableClass: 'js-expandable',
        expandedClass: 'open',
        buttonClass: 'js-expander'
    };
    const options = Object.assign(defaultOptions, opts);
    const expandables = [...document.querySelectorAll(`.${options.expandableClass}`)];

    if(!Array.isArray(expandables) || !expandables.length) {
        return;
    }
    
    expandables.map((expandable) => {
        const buttons = [...expandable.querySelectorAll(`.${options.buttonClass}`)];
        expandable.setAttribute('aria-expanded', false);

        buttons.map((button) => {
            button.addEventListener('click', () => {
                if(expandable.getAttribute('aria-expanded') === 'true') {
                    // REQUEST ANIMATION FRAME
                    expandable.setAttribute('aria-expanded', false);
                    expandable.classList.remove('open');
                    expandable.style.height = null;
                    return;
                }
                // REQUEST ANIMATION FRAME
                expandable.setAttribute('aria-expanded', true);
                expandable.classList.add('open');
                expandable.style.height = `${expandable.scrollHeight}px`;
            });
        });

    });  
};
