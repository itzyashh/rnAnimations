import { View, Text, useWindowDimensions } from 'react-native'
import React, { useMemo } from 'react'
import { Canvas, CornerPathEffect, Path, Skia, usePathInterpolation } from '@shopify/react-native-skia'
import { getScores } from '@/constants'
import { useSharedValue } from 'react-native-reanimated'

type ScoreGraphProps = {
    option: string
    width: number
    height: number
}

const ScoreGraph: React.FC<ScoreGraphProps> = ({ option,width,height }) => {

  const progress = useSharedValue(0);

  const scores = getScores(option)
  const { width: windowWidth } = useWindowDimensions()
  const pathWidth = windowWidth;
  const pathHeight = height
  const pathPadding = 20;

  // Normalize the scores to fit within the graph dimensions
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  const normalizedScores = scores.map(score => 
    ((score - minScore) / (maxScore - minScore)) * (pathHeight - 2 * pathPadding) + pathPadding
  );

  const path = useMemo(() => {
    let skPath = Skia.Path.Make();
    skPath.moveTo(pathPadding, pathHeight - normalizedScores[0]);
  normalizedScores.forEach((score, index) => {
    skPath.lineTo(pathPadding + (index * (pathWidth - 2 * pathPadding) / (scores.length - 1)), height - score);
  });
  return skPath;
}, [normalizedScores]);


  return (
    <Canvas style={{
      width: width,
      height: height
    }} >
      <Path path={path} 
      color={'#2ef5ff'}
      style={'stroke'} 

      strokeWidth={4} >
        <CornerPathEffect r={20} />
      </Path>

    </Canvas>
  )
}

export default ScoreGraph