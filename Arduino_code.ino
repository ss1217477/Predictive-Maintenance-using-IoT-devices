#include <math.h>

const int thermistor_output = A0;

void setup() {
  Serial.begin(115200);  // Define baud rate for serial communication
}

void loop() {
  int thermistor_adc_val;
  double output_voltage, thermistor_resistance, therm_res_ln, temperature;

  thermistor_adc_val = analogRead(thermistor_output);  // Read analog value
  output_voltage = ( (thermistor_adc_val * 5.0) / 1023.0 );
  
  thermistor_resistance = ( ( 5 * ( 10.0 / output_voltage ) ) - 10 );  // Calculate resistance
  thermistor_resistance = thermistor_resistance * 1000;  // Convert to ohms
  
  therm_res_ln = log(thermistor_resistance);

  // Steinhart-Hart Thermistor Equation to calculate temperature in Kelvin
  temperature = ( 1 / ( 0.001129148 + ( 0.000234125 * therm_res_ln ) + ( 0.0000000876741 * therm_res_ln * therm_res_ln * therm_res_ln ) ) );
  temperature = temperature - 273.15;  // Convert Kelvin to Celsius

  // Send temperature data to Serial (Python can read this)
  Serial.print("Temperature: ");
  Serial.println(temperature);

  delay(5000);  // Wait for 1 second before reading again
}
