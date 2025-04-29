import { Stack } from "expo-router";
import './globals';
export default function RootLayout() {

  
  return <Stack>
<Stack.Screen
  name="(tabs)"
  options={{ headerShown: false }}
/>
<Stack.Screen
name="movie/[id]"
options={{headerShown: false}}/>
  
  </Stack>

}