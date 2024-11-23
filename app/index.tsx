import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import SegmentedControls from "./components/SegmentedControls";
import { useState } from "react";
import ScoreGraph from "./components/ScoreGraph";

const options = ['Light', 'Standard', 'Pro']


export default function Index() {

  const [selectedOption, setSelectedOption] = useState('Standard')
  console.log(selectedOption)
  const { width: windowWidth} = useWindowDimensions()

  return (
    <View
      style={styles.container} >
      <SegmentedControls options={options} selectedOption={selectedOption} onSelection={(selectedOption) => setSelectedOption(selectedOption)} />
      <ScoreGraph option={selectedOption} width={windowWidth} height={250} />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363636",
  }
})