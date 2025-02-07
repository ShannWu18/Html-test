const display = document.querySelector(".output");
let curnum = 0;

const numberBtns = document.querySelectorAll(".key-number");
numberBtns.forEach(button => {
    const number = button.getAttribute('value');
    button.addEventListener('click', () => {
        if (display.textContent === "0") {
            display.textContent = number;
        }
        else {
            display.textContent += number;
        }

    });
});




const percentBtn = document.querySelector("#percent");
percentBtn.addEventListener('click', () => {
    display.textContent += "%";
});



const clearBtn = document.querySelector("#C");
clearBtn.addEventListener('click', () => {
    display.textContent = "0";
});

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener('click', () => {
    const curText = display.textContent;
    if (curText.length > 0) {
        display.textContent = curText.slice(0, -1);
    }
    if (display.textContent === "") {//��ֹɾ����û����ʾ��ɾ����λ����ʾ��
        display.textContent = "0";
    }
});



const reciprocalBtn = document.querySelector("#reciprocal");
reciprocalBtn.addEventListener('click', () => {
    const curText = display.textContent;
    if (curText.length > 0) {
        display.textContent = "1/" + curText;
    }
});


const powBtn = document.querySelector("#pow");
powBtn.addEventListener('click', () => {
    const curText = display.textContent;
    if (curText.length > 0) {
        let curnum = Number(curText);
        curnum = curnum * curnum;
        display.textContent = curnum + "";
    }
});

const sqrtBtn = document.querySelector("#sqrt");
sqrtBtn.addEventListener('click', () => {
    const curText = display.textContent;
    if (curText.length > 0) {
        let curnum = Number(curText);
        curnum = Math.sqrt(curnum);
        display.textContent = curnum + "";
    }
});

const divisionBtn = document.querySelector("#division");
divisionBtn.addEventListener('click', () => {
    const curText = display.textContent;
    if (curText.length > 0) {
        display.textContent = curText + "/";
    }
});


const operateBtns = document.querySelectorAll(".key-operate");//�Ӽ��˳����㣬�Ⱥ�
operateBtns.forEach((button) => {
    const operate = button.getAttribute("value");
    button.addEventListener("click", () => {
        if (display.textContent === "0") {

        }
        else {
            display.textContent += operate;
        }
    });
});




const negateBtn = document.querySelector("#negate");
negateBtn.addEventListener('click', () => {
    const curText = display.textContent;
    if (curText.length > 0) {
        display.textContent = "-" + curText;
    }
});


