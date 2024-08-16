import React, { useState } from "react";
import { View, Text } from "./Themed";
import { LineGraph, GraphPoint } from "react-native-graph";
import { MonoText } from "./StyledText";

import { useQuery, gql } from "@apollo/client";
import { ActivityIndicator } from "react-native";

const query = gql`
  query MyQuery($interval: String, $symbol: String) {
    time_series(symbol: $symbol, interval: $interval) {
      values {
        close
        datetime
      }
    }
  }
`;

const Graph = ({ symbol }: { symbol: string }) => {
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>();

  const { data, loading, error } = useQuery(query, {
    variables: { interval: "1day", symbol: symbol },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error getting stock details</Text>;
  }

  const points: GraphPoint[] = data.time_series.values.map((value: {datetime: Date, close: string}) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  })).toReversed();

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point);
  };

  return (
    <View>
      <Text>Graph</Text>

      <MonoText style={{ fontSize: 20, fontWeight: "bold", color: "#017560" }}>
        ${selectedPoint?.value.toFixed(2)}
      </MonoText>
      <MonoText style={{ color: "gray" }}>
        {selectedPoint?.date.toDateString()}
      </MonoText>

      <LineGraph
        style={{ width: "100%", height: 300 }}
        points={points}
        animated={true}
        color="#017560"
        gradientFillColors={["#017560", "#7476df00"]}
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
