import { StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

const ImageViewer = ({stickerImage, selectedImage}) => {

  const imageSource = selectedImage ? {uri.selectedImage} : {stickerImage};
  return (
        <Image source= {imageSource} style ={styles.image}/>

  )
};

export default ImageViewer 

const styles = StyleSheet.create({
        image: {
                width: 360,
                height: 460,
                borderRadius: 18,
              }
})
