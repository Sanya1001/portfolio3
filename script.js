const spin = document.getElementById('spin-container');
const main = document.getElementById('main');

const nbtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const links = document.getElementById('links');

const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const certifications = document.getElementById('certifications');
const about = document.getElementById('about');

const card = document.getElementById('card');

setTimeout(() =>{
    spin.classList.add('remove');
    main.classList.remove('remove');
}, 1500);

nbtn.addEventListener('click', () => {
    if(navbar.classList.contains('expand')){
        navbar.classList.remove('expand');
        links.classList.add('remove');
    }
    else{
        navbar.classList.add('expand');
        links.classList.remove('remove');
    }
})

// card.innerHTML = '<span id="welcome">WELCOME</span>';
const text = 'WELCOME';
let index = 1;
let flag=0;

setInterval( autowrite, 500); 

function autowrite(){
    if(flag == Number(0)){
        let header = '<span id="welcome">';
    if(index > text.length){
        index = 0;
    }
    else{
        let welcome = header + text.substring(0, index)+ '</span>';
        index++;
        card.innerHTML = welcome;
    }
    }
}

skills.addEventListener('click', () =>{
    flag=1;
    card.classList.add('deactivate');
    card.innerHTML = '<ul id="skills-body" class="card-body"><li>Java: Proficient in commonly used functions, arrays, strings; stack, linked list, queue, binary tree; file operations</li><li>Python: Proficient in commonly used functions, arrays, strings, lists, dictionaries</li><li>JavaScript: Proficient in all commonly used functions</li><li>Flask, Django in Python</li><li>HTML</li><li>CSS</li><li>Node.js and Express.js</li><li>Numpy, pandas, matplotlib, bokeh in Jupyter</li><li>Flutter and Dart: intermediate level proficiency</li><li>Azure blob storage (in python)</li><li>Linux CLI: Basic knowledge</li><li>Leadership and Management</li><li>Content writing</li></ul>';
    setTimeout(()=>{
        card.classList.remove('deactivate');
    }, 2000);
})

about.addEventListener('click', () => {
    flag=1;
    card.classList.add('deactivate');
    card.innerHTML = '<ul class="card-body" id="about-body"><li>Native iOS, Native Android, Flutter, React Native, Xamarin: Full Stack mobile dev certification from Udemy</li><li>Nano, SSH</li><li>Door Security project</li><li>SQL</li><li>Resume website generator/ builder web application (Landing page created)</li></ul>';
    setTimeout(()=>{
        card.classList.remove('deactivate');
    }, 2000);
})

projects.addEventListener('click', () => {
    flag=1;
    card.classList.add('deactivate');
    card.innerHTML = '<ul class="card-body" id="projects-body"><li><a href="#">YearBook</a>&nbsp; Skills: Django, html, css, python</li><li><a href="https://github.com/AdityaMitra5102/BrailleCam">Cam Braille &#8287; &#8287; &#8287;</a> 6th position, Hack to Enable hackathon <br><br>Skills: python, azure blob storage, file operations, content writing, presentation <br>Skills used by teammate: rpi, pytesseract, pyttsx3, piCam</li><li><a href="#">Self Care</a> &nbsp;Skills: Django, python, vanilla JavaScript, html, css</li><li><a href="https://sanya1001.github.io/rbuild/">Resume Builder</a> &nbsp;Skills: (Django, python), vanilla JavaScript, html, css</li></ul>';
    setTimeout(()=>{
        card.classList.remove('deactivate');
    }, 2000);
})

certifications.addEventListener('click', () => {
    flag=1;
    card.classList.add('deactivate');
    card.innerHTML = '<ul id="certifications-body" class="card-body"><li><a href="https://www.freecodecamp.org/certification/sanya1001/responsive-web-design" target="_blank">Responsive web design certification</a> from freeCodeCamp.org</li></ul>';
    setTimeout(()=>{
        card.classList.remove('deactivate');
    }, 2000);
})
