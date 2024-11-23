import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { memo, useEffect } from "react";
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

type SegmentedControlsProps = {
  options: string[];
  selectedOption: string;
  onSelection: (selectedOption: string) => void;
};

const SegmentedControls: React.FC<SegmentedControlsProps> = memo(
  ({ options, selectedOption, onSelection }) => {
    const { width: windowWidth } = useWindowDimensions();
    const segmentedControlWidth = windowWidth - 40;
    const itemWidth = segmentedControlWidth / options.length;

    const left = useSharedValue(itemWidth * options.indexOf(selectedOption) + 5);

    const rStyle = useAnimatedStyle(() => {
        return { left: left.value }
    });
    console.log('selectedOption', selectedOption)


    const animationConfig = {
      mass: 1,
      damping: 13,
      stiffness: 70,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
      reduceMotion: ReduceMotion.System,
    }
  

    useEffect(() => {
        left.value = withSpring(itemWidth * options.indexOf(selectedOption) + 5, animationConfig)
      return () => {
      };
    }, [selectedOption])


    return (
      <View
        style={[
          styles.container,
          {
            width: segmentedControlWidth,
            borderRadius: segmentedControlWidth / 2,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.activeContainer,
            {
              width: itemWidth - 10,
              left: itemWidth * options.indexOf(selectedOption) + 5,
              borderRadius: segmentedControlWidth / 2,
            }, rStyle
          ]}
        />

        {options.map((option) => (
          <TouchableOpacity
            onPress={() => onSelection(option)}
            key={option}
            style={[styles.itemStyle, { width: itemWidth }]}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
);

export default SegmentedControls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c2c2c2",
    height: 60,
  },
  activeContainer: {
    position: "absolute",
    height: "82%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemStyle: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
