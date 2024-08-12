import React, { useState } from "react";
import { View, Text } from "./Themed";
import { LineGraph, GraphPoint } from "react-native-graph";
import timeseries from "@/assets/data/timeseries.json";
import { MonoText } from "./StyledText";

const Graph = () => {

  const points: GraphPoint[] = timeseries.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  }));
  
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(points[points.length - 1]);

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point)
  }

  return (
    <View>
      <Text>Graph</Text>

      <MonoText style={{ fontSize: 20, fontWeight: 'bold', color: "#017560" }}>${selectedPoint?.value.toFixed(2)}</MonoText>
      <MonoText style={{ color: 'gray' }}>{selectedPoint?.date.toDateString()}</MonoText>

      <LineGraph
        style={{ width: "100%", height: 300 }}
        points={points}
        animated={true}
        color="#017560"
        gradientFillColors={["#017560", '#7476df00']}
        enablePanGesture
        onPointSelected={onPointSelected}
        enableIndicator
        indicatorPulsating
        enableFadeInMask
      />
    </View>
  );
};

export default Graph;
