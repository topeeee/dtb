import * as React from 'react';
import {
  Box,
  ListComponent,
  LayoutComponent,
  ActivityIndicator,
  SuccessModal,
} from '../components/Base';
import {useEffect, useState} from 'react';
import {getBallotData} from '../hooks/AppFunction';

const VoteScreen = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    //fetch the data
    getBallotData(setList, setLoading);
  }, []);

  const handleSelect = (value: any) => {
    //check if the category_id of the value is present in the list
    let index = selected.findIndex(
      (x: any) => x.category_id === value.category_id,
    );
    //if not present add to the list array
    if (index === -1) {
      // @ts-ignore
      setSelected([...selected, value]);
    }
    //if present replace the value at the index with the new value
    if (index !== -1) {
      const newValue = selected;
      // @ts-ignore
      newValue[index] = value;
      setSelected(newValue);
    }
  };

  return (
    <LayoutComponent label={'Golden Globe Award!'}>
      <Box padding="sm" flex={1} backgroundColor="white">
        {loading && (
          <Box flex={1} alignItems="center" justifyContent="center">
            <ActivityIndicator style={{alignSelf: 'center'}} size={50} />
          </Box>
        )}
        {!loading && (
          <ListComponent
            setIsSuccess={setIsSuccess}
            list={list}
            setSelected={handleSelect}
            selected={selected}
          />
        )}
      </Box>
      <SuccessModal
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        selected={selected}
      />
    </LayoutComponent>
  );
};

export default VoteScreen;
