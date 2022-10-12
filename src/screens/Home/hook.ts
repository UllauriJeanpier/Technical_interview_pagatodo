import {useCallback, useEffect, useState} from 'react';
import {IBank} from '../../interfaces/bank';
import {ErrorException, IError} from '../../interfaces/error';
import {bankRepository} from '../../utils/database/bankRepository';
import {initDatabase} from '../../utils/database/init';
import {getStoreData, setStoreData} from '../../utils/functions';
import {bankService} from './../../services/banks';

interface IHomeHook {
  banks: IBank[];
  errorRetrieveBanks: IError | null;
  isLoadingRetrieveBanks: boolean;
  verifyAndSave: () => Promise<void>;
}

export const useHome = (): IHomeHook => {
  const [banks, setBanks] = useState<IBank[]>([]);
  const [errorRetrieveBanks, setErrorRetrieveBanks] = useState(null);
  const [isLoadingRetrieveBanks, setIsLoadingRetrieveBanks] = useState(false);

  const retrieveBanks = useCallback(async () => {
    setIsLoadingRetrieveBanks(true);
    try {
      const data = await bankService.retrieve();
      if (data instanceof ErrorException) {
        throw data.error;
      }
      setBanks(data);
      return data;
    } catch (error: any) {
      setErrorRetrieveBanks(error);
    } finally {
      setIsLoadingRetrieveBanks(false);
    }
  }, []);

  const saveBanks = (newBanks: IBank[]) =>
    newBanks.forEach(bank => bankRepository.insertBank(bank));

  const verifyAndSave = useCallback(async () => {
    try {
      const wasFetchBefore = await getStoreData('fetched');
      if (wasFetchBefore) {
        const data = await bankRepository.retrieveBanks();
        setBanks(data);
        return;
      }
      const newBanks = await retrieveBanks();
      if (newBanks) {
        setStoreData('fetched', 'yes');
        saveBanks(newBanks);
      }
    } catch (err) {
      console.log(err);
    }
  }, [retrieveBanks]);

  useEffect(() => {
    initDatabase();
    verifyAndSave();
  }, [verifyAndSave]);

  return {
    banks,
    errorRetrieveBanks,
    isLoadingRetrieveBanks,
    verifyAndSave,
  };
};
