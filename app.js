const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })
    //burger animation
    burger.classList.toggle('toggle');
    });
};
//grabbing buttons and screenshots for problem solving section
const button1 = document.getElementById('solbtn1');
const button2 = document.getElementById('solbtn2');
const button3 = document.getElementById('solbtn3');
const button4 = document.getElementById('solbtn4');
const button5 = document.getElementById('solbtn5');
const screenshot1 = document.getElementById('sol1');
const screenshot2 = document.getElementById('sol2');
const screenshot3 = document.getElementById('sol3');
const screenshot4 = document.getElementById('sol4');
const screenshot5 = document.getElementById('sol5');


//show solution function
const showSolution = (button, screenshot) => {
    screenshot.classList.toggle('hide');
    button.innerHTML === 'View My Solution' ? button.innerHTML = 'Hide My Solution' : button.innerHTML = 'View My Solution';

}
//adding event listeners for each problem's button
button1.addEventListener('click', function(){showSolution(button1, screenshot1);});
button2.addEventListener('click', function(){showSolution(button2, screenshot2);});
button3.addEventListener('click', function(){showSolution(button3, screenshot3);});
button4.addEventListener('click', function(){showSolution(button4, screenshot4);});
button5.addEventListener('click', function(){showSolution(button5, screenshot5);});

navSlide();