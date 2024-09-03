import { View, Text, Image, Button } from "react-native";
import React from "react";

const CardComponent = () => {
  return (
    <View>
      <Image
        source={require("./../assets/ps.jpg")}
        style={{ width: 200, height: 200 }}
      />

      <Text>Ishan</Text>
      <Text>I like coding on java and react</Text>
      <Button title="Press me"/>
    </View>
  );
};

export default CardComponent;
