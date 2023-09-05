import { View, Text } from "react-native";
import { styles } from "./home.styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventData}>Sexta, 4 de Novembro de 2022</Text>
    </View>
  );
}
