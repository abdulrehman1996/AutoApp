import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import { wp } from '@/src/utils/Dimension'
import { primaryBlue } from '@/src/config/constants/Colors';
import { Text } from '@/src/components';
import { FONT, commonStyles } from '@/src/config/constants/constants';

interface ProfilePicProps{
    image?:any;
    isBlue?:boolean;
    number?:number;
}
const ProfilePic = ({image,isBlue,number}:ProfilePicProps) => {
  return (
    <View style={[styles.image,isBlue && {backgroundColor:primaryBlue,marginVertical:0}]}>
        {
            image && <ImageBackground style={{flex:1}} source={image} />
        }
        {
            isBlue && <Text style={styles.number}>{number}</Text>
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
        backgroundColor:"#D0D0D0",
        ...commonStyles.center,
    },
    number:{
        fontFamily:FONT.Medium,
        color:'white' 
    }
})