import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/participant";
import { styles } from "./styles";

type CreatePartipant = {
  id: string;
  name: string;
};

export const Home = () => {
  const [participantName, setParticipantName] = useState<string>("");
  const [participants, setParticipants] = useState<CreatePartipant[]>([]);

  const handleTextInputChange = (text: string) => {
    setParticipantName(text);
  };

  const handleParticipantAdd = () => {
    const lastParticipant = participants.findLast((partipant) => partipant.id);

    const lastId = Number(lastParticipant?.id!) + 1;

    const newPartipant = {
      id: lastId ? String(lastId) : "1",
      name: participantName,
    };

    setParticipants((prev) => [...prev, newPartipant]);
    setParticipantName("");
  };

  const handlePartipantDelete = (participantId: string) => {
    const deletePartipant = participants.filter(
      (participant) => participant.id !== participantId
    );
    setParticipants(deletePartipant);
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
        <Participant
          key={participant.name}
          participant={participant}
          onDeleteParticipant={handlePartipantDelete}
        />
      ))}
    </View>
  );
};
