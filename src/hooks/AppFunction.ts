import axios from 'axios';
import {Alert} from 'react-native';

const base_url = 'http://localhost:8080';

export const getBallotData = async (
  setList: any,
  setLoading: (arg: boolean) => void,
) => {
  try {
    setLoading(true);
    const res = await axios.get(`${base_url}/api/getBallotData`);
    setLoading(false);
    setList(res.data?.items);
  } catch (e) {
    setLoading(false);
    Alert.alert('An error occur, try again');
  }
};
