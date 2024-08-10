import React from 'react'
import { View, Text } from './Themed'
import { LineGraph } from 'react-native-graph'

const Graph = () => {
  return (
    <View>
      <Text>Graph</Text>

      <LineGraph
      style={{ backgroundColor: 'red', width: '100%', height: 300 }}
      points={[]}
      animated={true} 
      color='red' 
      />
    </View>
  )
}

export default Graph