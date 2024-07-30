// database.ts
import Loki from 'lokijs'

export const db = new Loki('examination-database.db', {
  autosave: true,
  autoload: true,
})

export type ScoreSchema = {
  name: string
  score: number
  startDateTime: Date
  finishDateTime: Date
}

export function databaseInitialize() {
  let scores = db.getCollection<ScoreSchema>('scores')
  if (scores === null) {
    scores = db.addCollection<ScoreSchema>('scores')
  }
}

export function getScoresCollection() {
  return db.getCollection<ScoreSchema>('scores')
}
