
const cn = document.getElementById('CN');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const content = document.getElementById('content');

btn1.addEventListener('click', () => {
    content.classList.add("square");
    content.style.backgroundColor = 'pink';
    btn1.style.backgroundColor = "blue"
    btn2.style.backgroundColor = "lightblue"
    cn.innerText = ' 2';
})

btn2.addEventListener('click', () => {
    content.classList.remove("square");
    content.style.backgroundColor = 'rebeccapurple'
    btn2.style.backgroundColor = "blue"
    btn1.style.backgroundColor = "lightblue"
    cn.innerText = ' 1';
})