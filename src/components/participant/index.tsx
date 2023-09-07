import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  participant: {
    id: string;
    name: string;
  };
  onDeleteParticipant: (partipantId: string) => void;
};

export const Participant = ({
  participant,
  onDeleteParticipant,
}: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{participant.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onDeleteParticipant(participant.id)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
