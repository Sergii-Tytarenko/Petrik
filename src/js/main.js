'use strict';

/* Tabs
---------------------------------------------------------------*/
const tabContent = document.querySelectorAll('.tabcontent'),
      tabItems = document.querySelectorAll('.tabheader__item'),
      tabItemsContainer = document.querySelector('.tabheader__items');

function hideTabContent () {
    tabContent.forEach(el => {
        el.classList.add('hide');
        el.classList.remove('show');
    });

    tabItems.forEach(item => {
        item.classList.remove('tabheader__item_active')
    });
}
    
function showTabContent (i = 0) {
   hideTabContent();
   tabItems[i].classList.add('tabheader__item_active');
   tabContent[i].classList.add('show', 'fade');
}

tabItemsContainer.addEventListener('click', (event) => {
    let target = event.target;

    if (target && target.matches('div.tabheader__item')) {
       tabItems.forEach((item, i) => {
           if (target == item) {
               showTabContent (i);
           }
       })
    }
});

showTabContent();