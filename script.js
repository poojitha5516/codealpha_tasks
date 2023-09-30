function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    let result;

    if (fromUnit === "celsius") {
        // Convert from Celsius to Fahrenheit
        result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "fahrenheit") {
        // Convert from Fahrenheit to Celsius
        result = (inputTemp - 32) * 5/9;
    } else {
        // Convert from Kelvin to Celsius
        result = inputTemp - 273.15;
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)}° ${fromUnit}`;
}
