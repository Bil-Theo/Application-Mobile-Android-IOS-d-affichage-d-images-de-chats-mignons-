import React, {useState} from "react";
import { View, Text, ImageBackground,  TouchableOpacity} from "react-native";
import styles  from './styles/mystyles';






const myAppMobile =  ()=>{
  
  const [image, setImage] = useState('https://purr.objects-us-east-1.dream.io/i/fulpW.jpg')
  

  const getCats = ()=>{
    fetch('https://aws.random.cat/meow')
    .then((res)=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((data)=>{
      setImage(data.file)
      console.log("Next Picture's: "+image)
      //console.log(data)
    })
    .catch((error)=>{console.log('Erreur est: '+error)})
  }

  return(
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: image}}
        style = {styles.image}>
        <Text style = {styles.text}>
              Cut-Cat
        </Text>
      </ImageBackground>
      <TouchableOpacity style = {styles.button} onPress={getCats}>
        <Text style ={styles.textButton}>New Image</Text>
      </TouchableOpacity>
    </View>
  );

}


export default myAppMobile;