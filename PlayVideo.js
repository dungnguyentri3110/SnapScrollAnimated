import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import RNFetchBlob from 'rn-fetch-blob';

const PlayVideo = ({
    params,
}) => {
  const videoRef = useRef(null);
  const [pause, setPause] = useState(true)

  useEffect(()=>{
    checkExist();
  },[])

  const checkExist= async()=>{
    console.log("Link video", "file://" + RNFetchBlob.fs.dirs.DownloadDir + "/1c244873-5d23-4494-a77b-46af78e33bc8_2_.m3u8")
    RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.DownloadDir).then(res =>{
      // console.log("RNFetchBlob.fs.dirs.DownloadDir", res)

    })

    let exist  = await RNFetchBlob.fs.exists(RNFetchBlob.fs.dirs.DownloadDir + "/1c244873-5d23-4494-a77b-46af78e33bc8_2_.m3u8")
    console.log("Exist ", exist);
    
  }


  return(
    <View style={styles.container}>
      <View style={styles.containerVideo}>
        <Video
        paused={pause}
    source={{uri: "file://" + RNFetchBlob.fs.dirs.DownloadDir + "/1c244873-5d23-4494-a77b-46af78e33bc8_2_.m3u8", type: 'm3u8',}}
    ref={videoRef}           
    onError={(error) => {
        console.log("Error", error)
    }}     
    style={styles.backgroundVideo}          
        />
      </View>
      <TouchableOpacity style={{height: 50}} onPress={()=>{
setPause(false)
      }}>
      <Text>Play Video</Text>
      </TouchableOpacity>
 <TouchableOpacity style={{height: 50}} onPress={()=>{
setPause(true)
      }}>
      <Text>Pause Video</Text>
      </TouchableOpacity>
    </View>
)};

const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerVideo:{
    width,
    height: width*720/1280,
    backgroundColor:"red"
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default PlayVideo;
