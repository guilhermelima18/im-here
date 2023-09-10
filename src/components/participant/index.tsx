import { Text, TouchableOpacity, View } from "react-native";
import { Partipant } from "../../types/participant";
import { styles } from "./styles";

type ParticipantProps = {
  participant: Partipant;
  onDeleteParticipant: (partipant: Partipant) => void;
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
        onPress={() => onDeleteParticipant(participant)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
