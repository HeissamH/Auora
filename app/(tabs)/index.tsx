
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView } from "react-native";
import { SearchBar } from "react-native-screens";


export default function Index() {

  return (
    <View className="flex-1 bg-dark-100">
<Image source={images.bg} className=" absolute w-full z-0"/>

<ScrollView className="flex-1 px-5 showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10, minHeight: '100%' }}">
<Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/> 
<View className=" flex-1 mt-5">

  
</View>



</ScrollView>
    </View>
  );
}
