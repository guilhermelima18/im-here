import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fdfcfe",
    marginTop: 48,
  },
  eventData: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    flex: 1,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#31cf67",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  participantsList: {
    color: "#fff",
    marginBottom: 5,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 24,
  },
});
