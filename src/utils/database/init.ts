import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {DB} from '../constants';

enablePromise(true);

export const getDBConnection = async () => {
  return await openDatabase({name: DB.NAME, location: 'default'});
};

export const closeDBConnection = async (db: SQLiteDatabase) => {
  return await db.close();
};

const createTables = async (db: SQLiteDatabase) => {
  const query =
    'CREATE TABLE IF NOT EXISTS bank(id INTEGER PRIMARY KEY AUTOINCREMENT,age INTEGER, bankName TEXT, description TEXT, url TEXT);';
  return await db.executeSql(query);
};

const removeTables = async (db: SQLiteDatabase) => {
  const query = 'DROP TABLE IF EXISTS bank;';
  return await db.executeSql(query);
};

export const initDatabase = async () => {
  const db = await getDBConnection();
  await createTables(db);
  db.close();
};
