import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
      <Text>{isOn ? "On" : "Off"}</Text>
      <Button title="Toggle" onPress={() => setIsOn(!isOn)} />
    </View>
  );
}

export default ToggleButton;
