import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/participant";
import { Partipant } from "../../types/participant";
import { styles } from "./styles";

export const Home = () => {
  const [participants, setParticipants] = useState<Partipant[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  const handleTextInputChange = (text: string) => {
    setParticipantName(text);
  };

  const handleParticipantAdd = () => {
    const lastParticipant = participants.findLast((partipant) => partipant.id);
    const participantAlreadyExists = participants.find(
      (participant) =>
        participant.name.toLowerCase() === participantName.toLowerCase()
    );

    if (participantAlreadyExists) {
      setParticipantName("");
      return Alert.alert("Opss!", "Notamos que esse participante já existe.");
    }

    const lastId = Number(lastParticipant?.id!) + 1;

    const newPartipant = {
      id: lastId ? String(lastId) : "1",
      name: participantName,
    };

    setParticipants((prev) => [...prev, newPartipant]);
    setParticipantName("");
  };

  const handlePartipantDelete = (participant: Partipant) => {
    const participantId = participant.id;

    Alert.alert(
      "Remover",
      `Deseja realmente remover o participante ${participant.name}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const deleteParticipant = participants.filter(
              (participant) => participant.id !== participantId
            );

            setParticipants(deleteParticipant);
          },
        },
        { text: "Não", style: "cancel" },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Casamento Guilherme e Jéssica</Text>
      <Text style={styles.eventData}>Sábado, 11 de Novembro de 2023</Text>

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

      <FlatList
        keyExtractor={(participant) => participant.id}
        data={participants}
        renderItem={(participant) => (
          <Participant
            key={participant.item.id}
            participant={participant.item}
            onDeleteParticipant={handlePartipantDelete}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};
