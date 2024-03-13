// import * as React from "react"
import React, { useState, useRef } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Constants from "expo-constants"

const Card = () => <View style={styles.card} />

export default function App() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const [laps, setLaps] = useState([]);

  function handleStart() {
    if (startTime === 0) {
      setStartTime(Date.now());
      
    }
    setNow(Date.now);

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  function handleReset() {
    setStartTime(0);
    setNow(null);
    clearInterval(intervalRef.current);
    setLaps([]);
  }

  function handleLap() {
    const lapTime = (now - startTime) / 1000;
    setLaps([...laps, lapTime.toFixed(3)]);
  }

  

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StopWatch</Text>
      <Text style={styles.title}>{secondsPassed.toFixed(2)}</Text>
      {/* <Text style={styles.text}>Lap1: </Text> */}
      {/* <View style={styles.lap}>
        {laps.map((lap, index) => (
          <View key={index} style={styles.lapItem}>
            <Text style={styles.lapText}>Lap {index + 1}: {lap} s</Text>
          </View>
        ))}
      </View> */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonRow} onPress={handleStart}>
          <Text style={styles.buttonRow}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow} onPress={handleStop}>
          <Text style={styles.buttonRow}>Stop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonRow} onPress={handleReset}>
          <Text style={styles.buttonRow}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow} onPress={handleLap}>
          <Text style={styles.buttonRow}>Lap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lap}>
        {laps.map((lap, index) => (
          <View key={index} style={styles.lapItem}>
            <Text style={styles.lapText}>Lap {index + 1}: {lap} s</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  row: {
    flex: 2,
    marginVertical: 3,
    flexDirection: "row",
  },
  card: {
    backgroundColor: "cyan",
    flex: 3,
    margin: 5,
  },
  title: {
    color: "black",
    backgroundColor: "chartreuse",
    flex: 0.5,
    alignContent: "center",
    margin: 5,
    paddingTop: 20,
    textAlign: "center",
    borderRadius: 5,
    fontSize: 40,
  },
  buttonRow: {
    flex: .7,
    paddingTop: 17,
    margin: 5,
    flexDirection: "row",
    textAlign: 'center',
    color: "white",
    fontSize: "30",
    backgroundColor: "cyan",
  },
  text: {
    color: "black",
    backgroundColor: "chartreuse",
    flex: 2,
    margin: 5,
    paddingTop: 10,
    paddingLeft: 10,
    // textAlign: "center",
    borderRadius: 5,
    fontSize: 30,
  },
  lap: {
    flex: 1,
    backgroundColor: "cyan",
    margin: 5,
    paddingHorizontal: 20,
  },
  lapItem: {
    paddingVertical: 10,
  },
  lapText: {
    fontSize: 20,
    fontWeight: "bold",
  },

})
