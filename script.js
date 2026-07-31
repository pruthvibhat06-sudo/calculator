function gcd(a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function calculate() {

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers.");
        return;
    }

    let hcf = gcd(num1, num2);
    let gcdValue = hcf;
    let lcmValue = lcm(num1, num2);

    document.getElementById("hcf").innerHTML = hcf;
    document.getElementById("gcd").innerHTML = gcdValue;
    document.getElementById("lcm").innerHTML = lcmValue;
}

function clearData() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("hcf").innerHTML = "-";
    document.getElementById("gcd").innerHTML = "-";
    document.getElementById("lcm").innerHTML = "-";
}
