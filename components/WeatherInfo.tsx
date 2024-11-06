import { View, Text, StyleSheet, } from "react-native";
import React from "react";


const WeatherInfo = ({ weatherData }: { weatherData: any }) => {
  if (!weatherData) {
    return <Text style={styles.noDataText}>No weather data available</Text>;
  }

  return (
    <View> 
      
    <View style={styles.container}>
      <Text style={styles.cityText}>City: {weatherData.name}</Text>
      <Text style={styles.countryText}>Country: {weatherData.sys.country}</Text>
      <Text style={styles.temperatureText}>Temperature: {weatherData.main.temp}°C</Text>
      <Text style={styles.humidityText}>Humidity: {weatherData.main.humidity}%</Text>
      <Text style={styles.conditionText}>Condition: {weatherData.weather[0].description}</Text>
   
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  noDataText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  cityText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  countryText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  temperatureText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  humidityText: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  conditionText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#444",
    marginTop: 10,
  },
});

export default WeatherInfo;
