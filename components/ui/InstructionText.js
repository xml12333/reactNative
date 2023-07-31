import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
};
const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.secondary500,
    fontSize: 24,
  },
});
export default InstructionText;
