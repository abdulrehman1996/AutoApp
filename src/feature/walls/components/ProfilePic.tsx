import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '@/src/utils/Dimension'

interface ProfilePicProps{
    image?:any,
}
const ProfilePic = ({image}:ProfilePicProps) => {
  return (
    <View style={styles.image}>
        {
            image && <ImageBackground style={{flex:1}} source={image} />
        }
    </View>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
    image:{
        height:35,
        width:35,
        marginLeft:wp(-3.5),
        marginVertical:6,
        borderRadius:100,
        backgroundColor:"#D0D0D0"
    }
})