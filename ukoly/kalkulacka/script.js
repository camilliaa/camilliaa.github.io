function calculateResult() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Zadejte platná čísla';
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Nelze dělit nulou';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Neznámá operace';
            break;
    }

    document.getElementById('result').innerHTML = 'Výsledek: ' + result;
}
