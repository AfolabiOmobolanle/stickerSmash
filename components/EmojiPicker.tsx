import { StyleSheet, Text, View ,Pressable,Modal} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';


const EmojiPicker = ({isVisible, children,onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style = {styles.modalContainer}>
        <View style ={styles.headerContent}>
      <Text style ={styles.header}>Select a sticker</Text>
      <Pressable onPress={onClose}>
        <MaterialIcons name="close" color="#fff" size={22}/>
      </Pressable>
    </View>
    {children}
        </View>
    </Modal>
  )
}

export default EmojiPicker

const styles = StyleSheet.create({
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
      },
      headerContent: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      header: {
        color: '#fff',
        fontSize: 16,
      },
      pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
      },
    
})