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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
  ]

  function ScoreHeader() {
    return (
      <View style={styles.tableHeader}>
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
        <Text style={styles.rowText}>{row.name}</Text>
        <Text style={styles.rowText}>{row.score}</Text>
        <Text style={styles.rowText}>{calculateTime(row.startDateTime, row.finishDateTime)}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScoreHeader/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.table}>
          {tableData.map((row) => (
            <ScoreRow key={row.id} {...row}/>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default React.memo(ScoreTable)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  table: {
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.grey["200"],
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  headerText: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey["300"],
  },
  rowText: {
    flex: 1,
    padding: 10,
    textAlign: 'left',
  },
})

