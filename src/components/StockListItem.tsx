import { StyleSheet, } from 'react-native'
import React from 'react'
import { Text } from './Themed'

type Stock = {
    name: string;
    symbol: string;
    close: string;
    percent_change: string;
}

type StockListItem = {
    stock: Stock
}

const StockListItem = ({ stock }: StockListItem) => {
  return (
      <Text>{stock.close}</Text>
  )
}

export default StockListItem

const styles = StyleSheet.create({})