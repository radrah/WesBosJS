// Tabs

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick() {
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });
    this.setAttribute('aria-selected', true);
    const { id } = this;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

