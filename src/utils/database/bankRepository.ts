import {IBank} from '../../interfaces/bank';
import {getDBConnection} from './init';

export const bankRepository = {
  insertBank: async ({age, bankName, description, url}: IBank) => {
    const query = `INSERT INTO bank (age, bankName, description, url) values ('${age}','${bankName}','${description}','${url}')`;
    const db = await getDBConnection();
    db.executeSql(query);
    await db.close();
  },
  retrieveBanks: async () => {
    const banks: IBank[] = [];
    const db = await getDBConnection();
    const results = await db.executeSql('SELECT * FROM bank');
    results.forEach(resultSet => {
      for (let index = 0; index < resultSet.rows.length; index++) {
        banks.push(resultSet.rows.item(index));
      }
    });
    await db.close();
    return banks;
  },
};
