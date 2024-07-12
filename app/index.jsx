import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './(tabs)/profile';

import { Link } from 'expo-router';


import {images} from '../constants';




const App=()=>{
    
  return(
    
        <SafeAreaView>
          <ScrollView  contentContainerStyle={{height:'100%'}}>
            <View className="w-full justify-center h-full px-20">
              <Image
                source={images.logo}
                className="w-[200px] h-[150px]"
                resizeMode="contain"
              />
              <Text className="py-4 px-7 font-plight text-2xl font-bold text-center ">Welcome to LearnLing</Text>
            </View>
          </ScrollView>

        </SafeAreaView>  

  )
}


export default App