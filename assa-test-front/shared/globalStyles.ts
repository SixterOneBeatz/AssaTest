import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center",
    color: "#ececf1",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    marginBottom: "1%",
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
  },
});

export const useGlobalStyles = () => globalStyles;
