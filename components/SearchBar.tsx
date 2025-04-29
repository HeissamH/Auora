import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


const SearchBar = () => {
  return (

    <view className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />

    </view>
  
  )
}

export default SearchBar