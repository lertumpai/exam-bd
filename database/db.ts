// database.ts
import Loki from 'lokijs'
import RNFS from 'react-native-fs';

const dbFilePath = `${RNFS.DocumentDirectoryPath}/examination-database.db`;

const adapter = {
  loadDatabase: function (dbname, callback) {
    RNFS.readFile(dbFilePath, 'utf8')
      .then(data => {
        callback(data);
      })
      .catch(err => {
        if (err.code === 'ENOENT') {
          // File does not exist, initialize new DB
          callback(null);
        } else {
          throw err;
        }
      });
  },
  saveDatabase: function (dbname, dbstring, callback) {
    RNFS.writeFile(dbFilePath, dbstring, 'utf8')
      .then(() => {
        callback();
      })
      .catch(err => {
        throw err;
      });
  },
  deleteDatabase: function (dbname, callback) {
    RNFS.unlink(dbFilePath)
      .then(() => {
        callback();
      })
      .catch(err => {
        throw err;
      });
  }
};

export const db = new Loki(dbFilePath, {
  autosave: true,
  autoload: true,
  adapter
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
