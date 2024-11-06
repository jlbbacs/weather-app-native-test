import { View, Text, StyleSheet, Alert, ActivityIndicator, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import WeatherInfo from "./../../components/WeatherInfo";

const APIKEY = "1bd8eedcc7bcb4e503ff2db46e583f13";

const Index = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("cagayan de oro"); // default city

  const fetchWeatherData = async (cityName: string) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } else {
        setWeatherData(null);
        Alert.alert("Error", "City not found");
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
      setLoaded(true);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeatherData(city);
    } else {
      Alert.alert("Error", "Please enter a city name");
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Erza Weather App</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      
      <WeatherInfo weatherData={weatherData} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#c5d2ef",
    height: 80,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
