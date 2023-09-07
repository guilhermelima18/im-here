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
    const participantAlreadyExists = participants.find(
      (participant) =>
        participant.name.toLowerCase() === participantName.toLowerCase()
    );

    const lastId = Number(lastParticipant?.id!) + 1;

    if (participantAlreadyExists) {
      setParticipantName("");
      return Alert.alert("Opss!", "Notamos que esse participante já existe.");
    }

    const newPartipant = {
      id: lastId ? String(lastId) : "1",
      name: participantName,
    };

    setParticipants((prev) => [...prev, newPartipant]);
    setParticipantName("");
  };

  const handlePartipantDelete = (participantId: string) => {
    Alert.alert(
      "Remover",
      `Deseja realmente remover o participante ${participantId}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const deletePartipant = participants.filter(
              (participant) => participant.id !== participantId
            );

            setParticipants(deletePartipant);
          },
        },
        { text: "Não", style: "cancel" },
      ]
    );
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
