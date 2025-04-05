// index.js
import {Rectangle} from './calculate.js';

let button = document.getElementById('ok');

button.addEventListener('click', () => {
    let width = parseFloat(document.getElementById('dai').value);
    let height = parseFloat(document.getElementById('rong').value);
    
    let rectangle = new Rectangle(width, height)
    
    if (rectangle.isExist() === true) {
        document.querySelector('#cv').innerText = rectangle.perimeter();
        document.querySelector('#dt').innerText = rectangle.area();
    } else {
        alert("Vui lòng nhập đúng giá trị.");
    }
});
