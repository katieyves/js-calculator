var firstNum = "";
var secondNum;

function getFirstNum() {
    var num = document.querySelector('.values');
    num.addEventListener('click', function(event) {
        if (event.target.className == 'value num') {
            debugger;
            if (event.target.textContent == '.') {
                for (var i = firstNum.length - 1; i >= 0; i--) {
                    if (firstNum[i] == '.') {
                        console.log(firstNum);
                        break;
                    } else {
                        firstNum += event.target.textContent;
                    }
                };
            } else {
                firstNum += event.target.textContent;
            };
            if (firstNum == '.') {
                firstNum += '0.';
            };
            console.log(firstNum);
        };
    });
};
