import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>

      {/* Header */}
      <View className='flex-row pb-3 items-center max-4 space-x-2'>
        <Image
          source={{
            uri: 'https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg?fit=fill&w=840&h=473&fm=webp'
          }}
          className='h-7 w-7 bg-grey-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen