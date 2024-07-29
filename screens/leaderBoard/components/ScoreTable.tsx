import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {colors} from "../../../styles";

type ScoreRowProps = {
  id: number
  name: string
  score: number
  startDateTime: Date
  finishDateTime: Date
}

function ScoreTable() {
  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      score: 97,
      startDateTime: new Date('2021-01-01T00:00:00Z'),
      finishDateTime: new Date('2021-01-01T00:00:07Z')
    },
    {
      id: 2,
      name: 'ABC',
      score: 8,
      startDateTime: new Date('2021-01-01T00:00:00Z'),
      finishDateTime: new Date('2021-01-01T00:00:11Z')
    },
    {
      id: 3,
      name: 'eiei zaza',
      score: 18,
      startDateTime: new Date('2021-01-01T00:00:00Z'),
      finishDateTime: new Date('2021-01-01T00:00:17Z')
    }
  ]

  function ScoreHeader() {
    return (
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Score</Text>
        <Text style={styles.headerText}>Within(secs)</Text>
      </View>
    )
  }

  const calculateTime = (startDateTime: Date, finishDateTime: Date): string => {
    return String((finishDateTime.getTime() - startDateTime.getTime()) / 1000)
  }

  function ScoreRow(row: ScoreRowProps) {
    return (
      <View style={styles.tableRow}>
        <Text style={styles.rowText}>{row.id}</Text>
        <Text style={styles.rowText}>{row.name}</Text>
        <Text style={styles.rowText}>{row.score}</Text>
        <Text style={styles.rowText}>{calculateTime(row.startDateTime, row.finishDateTime)}</Text>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.table}>
        <ScoreHeader/>
        {tableData.map((row) => (
          <View key={row.id} style={styles.tableRow}>
            <ScoreRow {...row}/>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default React.memo(ScoreTable)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: colors.black,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.grey["50"],
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  headerText: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey["50"],
  },
  rowText: {
    padding: 10,
    textAlign: 'center',
  },
})

