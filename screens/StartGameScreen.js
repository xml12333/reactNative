import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { PrimaryButton, Title, Card, InstructionText } from "../components";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enterNumber, setEnterNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnterNumber(enteredText);
  }
  function resetInputhandler() {
    setEnterNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enterNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number beetween 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputhandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTop = height < 400 ? 30 : 100;
  return (
    <ScrollView  style={styles.screen}>
    <KeyboardAvoidingView  behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTop }]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enterNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
// const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
