document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* Tabs
    ---------------------------------------------------------------*/
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabItems = document.querySelectorAll('.tabheader__item'),
          tabItemsContainer = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show', 'fade');
        });

        tabItems.forEach(item => {
            item.classList.remove('tabheader__item_active')
        });
    }
        
    function showTabContent (i = 0) {
        hideTabContent();
        tabItems[i].classList.add('tabheader__item_active');
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
    }

    tabItemsContainer.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.matches('div.tabheader__item')) {
        tabItems.forEach((item, i) => {
            if (target == item) {
                showTabContent (i);
            }
        });
        }
    });

    showTabContent();



    /* Timer
    ---------------------------------------------------------------*/
    const deadline = '2021-08-09T00:00';
    let timer = document.querySelector('.timer');

    timerInit(deadline, timer);
   
    function timerInit(timeToEnd, timer) {
        let days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(setTimer, 1000);

        setTimer()

        function setTimer() {
            let currentDate = calcDate(timeToEnd);

            if (currentDate.total < 0) {
                clearInterval(timeInterval)
            } else {
                days.innerHTML = shiftZero(currentDate.days);
                hours.innerHTML = shiftZero(currentDate.hours);
                minutes.innerHTML = shiftZero(currentDate.minutes);
                seconds.innerHTML = shiftZero(currentDate.seconds);
            }
        }
    }

    function calcDate (time) {
        let t = Date.parse(time) - new Date();
        return {
            'total': t,
            'days': Math.floor( t / 1000 / 60 / 60 / 24),
            'hours': Math.floor( (t / 1000 / 60 / 60) % 24 ),
            'minutes': Math.floor( (t / 1000 / 60) % 60 ),
            'seconds': Math.floor( (t / 1000) % 60 ),
        }
    }

    function shiftZero(num) {
        if (num >=0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }
});
