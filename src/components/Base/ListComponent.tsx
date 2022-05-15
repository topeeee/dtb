import * as React from 'react';
import Box from './Box';
import {Text} from '../Typography/index';
import {Alert, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ListItemComponent from './ListItemComponent';
import {palette} from '../../constants/theme';

export interface Type {
  title: string;
  photoUrL: string;
  id: string;
  category_id: string;
}

export interface FlatListProps {
  id: string;
  items: Array<Type>;
  title: string;
}

export interface ListComponentProps {
  list: any;
  setSelected: (arg: Type) => void;
  setIsSuccess: (arg: boolean) => void;
  selected: any;
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 15,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: palette.success,
    borderColor: '#b3b3b3',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  listContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

const ListComponent = ({
  list,
  setSelected,
  setIsSuccess,
  selected,
}: ListComponentProps) => {
  const handleSubmit = () => {
    if (selected.length === 0) {
      return Alert.alert('Select at least a vote  to submit');
    }
    setIsSuccess(true);
  };

  return (
    <FlatList<FlatListProps>
      data={list}
      renderItem={({item}) => (
        <Box paddingVertical="sm">
          <Box paddingHorizontal="sm">
            <Box
              padding="sm"
              style={{backgroundColor: '#bac8d3', borderRadius: 5}}>
              <Text variant="bold16">{item.title}</Text>
            </Box>
          </Box>
          <Box style={styles.listContainer}>
            <ListItemComponent setSelected={setSelected} item={item} />
          </Box>
        </Box>
      )}
      keyExtractor={item => item.id}
      ListFooterComponent={({}) => (
        <TouchableOpacity onPress={handleSubmit} style={styles.btnContainer}>
          <Text
            style={{color: 'black', fontWeight: 'bold'}}
            variant="regular14">
            Submit Vote
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListComponent;
