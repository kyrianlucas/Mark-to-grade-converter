$(document).ready(function() {
    // Named function for converting Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Named function for converting Celsius to Kelvin
    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    // Anonymous function for converting Fahrenheit to Celsius and displaying the result
    $('#convertToCelsius').click(function() {
        const fahrenheit = parseFloat($('#temperature').val());
        if (isNaN(fahrenheit)) {
            $('#conversion-result').text('Please enter a valid number for temperature.');
            return;
        }

        const celsius = fahrenheitToCelsius(fahrenheit);
        $('#conversion-result').text(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C.`);
    });

    // Anonymous function for converting Fahrenheit to Kelvin and displaying the result
    $('#convertToKelvin').click(function() {
        const fahrenheit = parseFloat($('#temperature').val());
        if (isNaN(fahrenheit)) {
            $('#conversion-result').text('Please enter a valid number for temperature.');
            return;
        }

        const celsius = fahrenheitToCelsius(fahrenheit);
        const kelvin = celsiusToKelvin(celsius);
        $('#conversion-result').text(`${fahrenheit}°F is equal to ${kelvin.toFixed(2)} K.`);
    });
});
