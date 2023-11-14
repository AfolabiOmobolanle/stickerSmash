import { StyleSheet, View, Image,Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import React, { useState, useRef } from 'react'
import Button from '../components/Button';
import CircleButton from '../components/CircleButton';
import IconButton from '../components/IconButton';
import EmojiPicker from '../components/EmojiPicker';
import EmojiList from '../components/EmojiList';
import EmojiSticker from '../components/EmojiSticker';
import domtoimage from 'dom-to-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const stickerImage = require('../assets/images/background-image.png');

const index = () => {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState();
  const imageRef = useRef();

  if (status === null) {
    requestPermission();  
    
  }

  const onAddEmoji = () => {
    setIsModalVisible(true)
  };
  const onModalClose = () => {
    setIsModalVisible (false);
  }
  const onReset = () => {
    setShowAppOptions(false)
  };


  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try{
      const localUri = await captureRef(imageRef,{
        height:440,
        quality:1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Image Saved!");   
      }
    }
    catch(e){
      console.log(e)
    }

   
    }

    

  

  };

  const selectImageAsync = async () => {

    let results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1
    });


    if (!results.canceled) {

      const imgUrl = results?.assets[0]?.uri;
      setShowAppOptions(true);

      setSelectedImage(imgUrl);
      console.log("imgUrls", imgUrl);
    }
    else {
      alert('You did not select an image')
    }
    // function setShowAppOptions(arg0: boolean) {
    //   throw new Error('Function not implemented.');
    // }
    
    // function setSelectedImage(imgUrl: string) {
    //   throw new Error('Function not implemented.');
    // }
    

  }



  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
     
      {/* <Image source = {stickerImage} style = {styles.image}/> */}
      {!selectedImage && (<Image source = {stickerImage} style = {styles.image}/>)}
      {selectedImage && (<Image source = {{uri:selectedImage}} style = {styles.image}/>)}

      {
          selectedEmoji !== null ?
         ( <EmojiSticker
            imageSize={70}
              stickerSource={selectedEmoji}
          />):(null)
        }

      </View>

      <View style={{ height:15 }} />

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icons='refresh' label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddEmoji} />
            <IconButton icons='save-alt' label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button onPress={selectImageAsync} theme='primary' label={'Choose a Photo'} />


          {/* <Button onPress={() => setShowAppOptions(true)} label={'Use this Photo'} /> */}

        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setSelectedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style='light' />
      </View>
    </GestureHandlerRootView>
  )
}

export default index

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',

  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 30,
  },
  image: {
    width: 320,
    height: 500,
    borderRadius: 18,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

})

