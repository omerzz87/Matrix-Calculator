function playSound(id) {
    var sound = document.getElementById(id);
    sound.play();
    
}
  
function printdigit(digit)  { 
    
    var result = document.getElementById("result");
    result.value += digit;
}

for (var i = 0; i <= 9; i++) {
    var button = document.createElement("button");
    button.innerHTML = i;
    button.onclick = (function (num) {
        return function () {
            printdigit(num);
        };
    })(i);
function deleteDigit() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
    if (result.value === '') {
        result.value = '0';
    }
}
    function clear_result() {
        var result = document.getElementById("result");
        result.value = '0';
    }

    for (var i = 0; i <= 9; i++) {
        var button = document.createElement("button");
        button.innerHTML = i;
        button.onclick = (function (num) {
            return function () {
                printdigit(num);
            };
        })(i);
        document.body.appendChild(button);
    }
    function calculate(digit) {
        var result = document.getElementById("result");
        if (digit === '/') {
            var numbers = result.value.split(/[\+\-\*]/);
            var divisionResult = numbers.reduce((a, b) => a / b);
            result.value = divisionResult;
        } else {
            if (result.value === '0' && digit !== '0') {
                result.value = digit;
            } else {
                result.value += digit;
            }
        }
    }

}

for (var i = 0; i <= 9; i++) {
    var button = document.createElement("button");
    button.innerHTML = i;
    button.onclick = (function (num) {
        return function () {
            printdigit(num);
        };
    })(i);
    document.body.appendChild(button);
}
function calculate() { 
    var result = document.getElementById("result");
    try {
        var calculation = result.value.replace('^', '**');
        var output = eval(calculation);
        if (calculation === "9/11") {
            result.value = " ALLAHU AKBAR";
            return;}
        if (output.toString().length > 10) {
            result.value = "Too many digits";
        } else {
            result.value = output;
        }
    } catch (error) {
        result.value = "Error";
    }
}

function printdigit(digit) { 
    playSound("click-sound");
    var result = document.getElementById("result");
    if (result.value === "Error") { 
        result.value = '';
        
    }
    
    if (result.value.length < 10) {
        var numbers = result.value.split(/[\+\-\*\/]/);
        var currentNumber = numbers[numbers.length - 1];
        if (result.value === '0' && digit !== '0' ) {
            result.value = digit;
        } else if (digit === '.' && !currentNumber.includes('.')) {
            result.value += digit;
        } else if (digit !== '.') {
            result.value += digit;
        }
    }
}
