function tanggal(event) {
    if (event.key === "Enter") {
        calculateZodiac();
    }
}

function reset() {
    document.getElementById('result').innerText = '';
    document.getElementById('numberInput').value = '';
}

function calculateZodiac() {
    const input = document.getElementById('numberInput').value;
    if (input >= 321 && input <= 419) {
        document.getElementById('result').innerHTML = ariesText;
    } else if (input >= 420 && input <= 520) {
        document.getElementById('result').innerHTML = taurusText;
    } else if (input >= 521 && input <= 620) {
        document.getElementById('result').innerHTML = geminiText;
    } else if (input >= 621 && input <= 722) {
        document.getElementById('result').innerHTML = cancerText;
    } else if (input >= 723 && input <= 822) {
        document.getElementById('result').innerHTML = leoText;
    } else if (input >= 823 && input <= 922) {
        document.getElementById('result').innerHTML = virgoText;
    } else if (input >= 923 && input <= 1022) {
        document.getElementById('result').innerHTML = libraText;
    } else if (input >= 1023 && input <= 1121) {
        document.getElementById('result').innerHTML = scorpioText;
    } else if (input >= 1122 && input <= 1221) {
        document.getElementById('result').innerHTML = sagittariusText;
    } else if (input >= 1222 || input <= 119) {
        document.getElementById('result').innerHTML = capricornText;
    } else if (input >= 120 && input <= 218) {
        document.getElementById('result').innerHTML = aquariusText;
    } else if (input >= 219 && input <= 320) {
        document.getElementById('result').innerHTML = piscesText;
    }
}
