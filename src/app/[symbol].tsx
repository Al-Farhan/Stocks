import { ActivityIndicator, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import top5 from "@/assets/data/top5.json"
import StockListItem from '../components/StockListItem'
import Graph from '../components/Graph'

import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery($symbol: String = "") {
  quote(symbol: $symbol) {
    name
    symbol
    close
    percent_change
  }
}
`;

const StockDetails = () => {
  const { symbol } = useLocalSearchParams();

  const { data, loading, error } = useQuery(query, {variables: {symbol: symbol}});

  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Stock with symbol {symbol} could not be found</Text>
  }

  const stock = data.quote;

  console.log(stock)

  return (
    <View>
      <Stack.Screen options={{ title: stock.symbol, headerBackTitleVisible: false }} />
      <StockListItem stock={stock} />
      <Graph />
    </View>
  )
}

export default StockDetails

const styles = StyleSheet.create({})