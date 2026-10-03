import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import color from "../../../pewarnaan/color";

const RecipeScreen = () => {
  return (
    <View>
      <Text>Halaman Recipe</Text>

        <Link
          href="/tabs"
          style={{
            fontSize: 20,
            marginTop: 20,
            color: color.text,
          }}
        >
          Back to Home
        </Link>
    </View>
  )
}

export default RecipeScreen