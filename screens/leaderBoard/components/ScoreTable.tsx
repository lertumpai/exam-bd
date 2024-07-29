import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {colors} from "../../../styles";
import {ScoreSchema} from "../../../database/score.schema";


type ScoreTableProps = {
  rows: ScoreSchema[]
}

function ScoreTable(props: ScoreTableProps) {
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

  function ScoreRow(row: ScoreSchema) {
    return (
      <View key={row._id.toHexString()} style={styles.tableRow}>
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
          {props.rows.map((row) => ScoreRow(row))}
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

