import { StyleSheet,View , Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'

const CircleButton = ({onPress}) => {
  return (
    <View style = {styles.circleButtonContainer}>
        <Pressable style ={styles.circleButton} onPress={onPress}>
            <MaterialIcons  name='add' size={40} color={'black'} />
        </Pressable>

    </View>
  )
}

export default CircleButton

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
      },
      circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
      },
      addIcon:{
      }
})