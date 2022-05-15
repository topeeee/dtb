import * as React from 'react';
import Box from './Box';
import Image from './Image';
import {Text} from '../Typography/index';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';

interface Type {
  title: string;
  photoUrL: string;
  id: string;
  category_id: string;
  category_title: string;
}

interface ListItemComponentProps {
  setSelected: (arg: Type) => void;
  item: any;
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 15,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#b3b3b3',
    borderColor: '#b3b3b3',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: 10,
  },
});

const ListItemComponent = ({item, setSelected}: ListItemComponentProps) => {
  const [selected_id, setSelected_id] = useState('');

  const handleSelect = (value: Type, data: any) => {
    // check if the id has been selected before
    if (selected_id !== value.id) {
      setSelected({...value, category_id: data.id, category_title: data.title});
      setSelected_id(value.id);
    }
  };

  return (
    <>
      {item.items.map((value: Type, index: number) => (
        <Box key={index} padding="sm" style={{width: '50%'}}>
          <Box
            alignItems="center"
            justifyContent="center"
            padding="sm"
            style={[
              {
                backgroundColor:
                  selected_id === value.id ? '#d5e8d4' : '#dae8fc',
                height: 200,
                borderRadius: 5,
              },
            ]}
            key={value.id}>
            <Text
              style={{textAlign: 'center'}}
              numberOfLines={3}
              variant="regular14">
              {value.title}
            </Text>
            <Image source={{uri: value.photoUrL}} style={styles.img} />
            <TouchableOpacity
              onPress={() => handleSelect(value, item)}
              style={styles.btnContainer}>
              <Text
                style={{color: '#f5f5f5', fontWeight: 'bold'}}
                variant="regular14">
                Select
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ListItemComponent;
