import { View, Text, Image, Button } from "react-native";
import React from "react";

const DynamicContent = () => {
  const price = 200000;
  const carName = "Mazda";
  const rating = 3.5
  return (
    <View>
      <Text>${price}</Text>
      <Image
        source={require("./../assets/ps.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>{carName}</Text>
      <Text>Rating: {rating}</Text>
      <Text>Product description goes right here</Text>
      <Button title="Add To Cart"/>
    </View>
  );
};

export default DynamicContent;
