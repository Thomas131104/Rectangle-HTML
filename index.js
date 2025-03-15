// index.js
import { calculate } from './calculate.js';

let button = document.getElementById('ok');

button.addEventListener('click', (e) => {
    let dai = parseFloat(document.getElementById('dai').value);
    let rong = parseFloat(document.getElementById('rong').value);
    
    let result = calculate(dai, rong);
    
    if (result !== -1) {
        document.querySelector('#cv').innerText = result.cv;
        document.querySelector('#dt').innerText = result.dt;
    } else {
        alert("Vui lòng nhập đúng giá trị.");
    }
});
