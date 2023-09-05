import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./home.styles";

export const Home = () => {
  const [participantName, setParticipantName] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  const handleTextInputChange = (text: string) => {
    setParticipantName(text);
  };

  const handleParticipantAdd = () => {
    setParticipants((prev) => [...prev, participantName]);
    setParticipantName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventData}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={participantName}
          onChangeText={handleTextInputChange}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {participants.map((participant) => (
        <Text key={participant} style={styles.participantsList}>- {participant}</Text>
      ))}
    </View>
  );
};
