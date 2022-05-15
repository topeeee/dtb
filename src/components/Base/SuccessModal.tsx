import {Text} from '../Typography';
import * as React from 'react';
import Box from './Box';
import Modal from 'react-native-modal';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';

interface Type {
  title: string;
  photoUrL: string;
  id: string;
  category_id: string;
  category_title: string;
}

export interface SuccessModalProps {
  selected: Array<Type>;
  isSuccess: boolean;
  setIsSuccess: any;
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#b3b3b3',
    borderColor: '#b3b3b3',
  },
});

const SuccessModal = ({
  isSuccess,
  setIsSuccess,
  selected,
}: SuccessModalProps) => {
  const handleModalClose = () => {
    // Immediately reload the app after modal close
    RNRestart.Restart();
    setIsSuccess(false);
  };

  return (
    <Modal isVisible={isSuccess} style={{margin: 0}}>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        paddingVertical="xl">
        <Box
          backgroundColor="white"
          style={{width: '90%', borderRadius: 10}}
          padding="sm">
          <FlatList
            data={selected}
            renderItem={({item}) => (
              <Box paddingVertical="sm">
                <Box paddingHorizontal="sm">
                  <Box>
                    <Text variant="bold14">{item.category_title}:</Text>
                    <Text variant="regular14">{item.title}</Text>
                  </Box>
                </Box>
              </Box>
            )}
            ListHeaderComponent={({}) => (
              <Box padding="sm">
                <Text paddingVertical="sm" variant="bold24">
                  Submitted successfully
                </Text>
                <Text variant="bold14">You voted for the following;</Text>
              </Box>
            )}
            ListFooterComponent={() => (
              <Box alignItems="center" justifyContent="center">
                <TouchableOpacity onPress={handleModalClose} style={styles.btn}>
                  <Text
                    style={{color: '#f5f5f5', fontWeight: 'bold'}}
                    variant="regular14">
                    Close
                  </Text>
                </TouchableOpacity>
              </Box>
            )}
            keyExtractor={item => item.id}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
