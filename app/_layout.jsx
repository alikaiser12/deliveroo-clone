import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './(tabs)/profile';
import Homescreen from '../screens/Homescreen';
import { Link } from 'expo-router';





const App=()=>{
    
  return(
    
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-pblack"> <Homescreen/> </Text>
            <Link href="./home" className='bg-blue-300'>Home</Link>
            
            <StatusBar style='auto'/>
        </View>
    
    

  )
}


export default App