import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";

export default function Index() {
  const router = useRouter();
  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className="flex-1 bg-dark-200">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView 
        className="flex-1 px-7" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-9 mx-auto" />
        <Text className="text-white text-3xl font-bold text-center mt-1 ml-2 mr-7 mb-5">
          Auora
        </Text>
        {moviesLoading ? (
          <ActivityIndicator size="large" color="#fff" className="mt-10" />
        )  : 
          moviesError ? (
          <Text className="text-red-500 text-center mt-5">
           Error: {moviesError.message | | "Failed to load movies"}
          )
        
        (
          <View className="flex-1 mt-5">
            <SearchBar
              placeholder="Search for movies"
              onPress={() => router.push("/search")}
            />
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Latest Movies
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
