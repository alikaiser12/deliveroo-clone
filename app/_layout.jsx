import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';



import {Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Homescreen from '../screens/Homescreen';


const App=()=>{
    
  return(
    
        <View className="flex-1 items-center justify-center bg-white">
            <Text > <Homescreen/> </Text>
            <StatusBar style='auto'/>
        </View>
    
    

  )
}


export default App