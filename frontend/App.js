import React, {useState} from "react";
import { View, Text, ImageBackground,  TouchableOpacity} from "react-native";
import styles  from './styles/mystyles';





/*
clé:d367cb00-82fd-11ed-8679-977d605b2c40 
Installation de l'api: {curl "https://app.sportdataapi.com/api/v1/soccer/leagues" \
    -H "apikey: d367cb00-82fd-11ed-8679-977d605b2c40"}
*/
const myAppMobile =  ()=>{
  
  let [image, setImage] = useState()  

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