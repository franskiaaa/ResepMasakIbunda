import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import color from "../../../pewarnaan/color";

const HomeScreen = () => {
  return (
   <View 
  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
   
         <Link
           href="/tabs/recipe"
           style={{
             fontSize: 20,
             marginTop: 20,
             color: color.text,
           }}
         >
           Go to Recipe
         </Link>
   
         <Text
           style={{
             fontSize: 30,
             fontWeight: 'bold',
             marginTop: 20,
           }}
         >
          List Resep
         </Text>
         <Link
           href="/recipe/1"
           style={{
             fontSize: 20,
             marginTop: 20,
             color: color.text,
           }}
         >
           Recipe 1
         </Link>
         <Link
           href="/recipe/22"
           style={{
             fontSize: 20,
             marginTop: 20,
             color: color.text,
           }}
         >
           Recipe 22
         </Link>
         <Link
           href="/recipe/155"
           style={{
             fontSize: 20,
             marginTop: 20,
             color: color.text,
           }}
         >
           Recipe 155
         </Link>
       </View>
  )
}

export default HomeScreen