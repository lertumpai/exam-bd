import {Realm} from '@realm/react'

type ScoreSchemaType = {
  name: string
  score: number
  startDateTime: Date
  finishDateTime: Date
}

export class ScoreSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name: string
  score: number
  startDateTime: Date
  finishDateTime: Date

  static generate(payload: ScoreSchemaType) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...payload
    };
  }

  static schema = {
    name: 'Score',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      score: 'int',
      startDateTime: 'date',
      finishDateTime: 'date'
    },
  };
}