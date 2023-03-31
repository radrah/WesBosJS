console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs')
const tabButtons = tabs.querySelectorAll('[role="tab"]')
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'))

const handleTabClick = (event) => {
    tabPanels.forEach(panel => {
        panel.hidden = true
    })
    tabButtons.forEach(tabButton => {
        // tabButton.ariaSelected = false;
        tabButton.setAttribute('aria-selected', false);
    })
    const { id } = event.currentTarget;
    /* Method 1
    event.currentTarget.setAttribute('aria-selected', true);
    
    console.log(id)
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    console.log(tabPanel)
    tabPanel.hidden = false
    */

    /* Method 2 - find in the array of tab panels*/ 
    console.log(tabPanels);
    const tabPanel = tabPanels.find(panel =>  panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));