function check(num1, num2) {
    if (num1 <= 2 || num1 >= 10 || num2 <= 2 ||num2 >= 10) {
        alert("Please enter numbers between 2 and 10");
    }

    else {
        multiTable(num1, num2);
    }
}

function multiTable(num1, num2) {
    var table = document.getElementById("output");
    let colNum = num1;
    let rowNum = num2;
    let tvalue = 1;
    let r = 0;
    table.innerHTML = "";

    while (r < rowNum) {
        let newRow = table.insertRow();
        let c = 0;

        while (c < colNum) {
            let cell = newRow.insertCell();

                if (r === 0 || c === 0) {
                    if (r === 0) {
                        cell.innerHTML = c + 1;
                    }
                    else {
                        cell.innerHTML = r + 1;
                    }
                }
                else {
                    cell.innerHTML = (r + 1) * (c + 1);
                }
            c++;
        }
        r++;
    }
}

