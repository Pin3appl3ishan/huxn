import React from "react";
import Greet from "../components/Greet";
import CardComponent from "../components/CardComponent";
import DynamicContent from "../components/DynamicContent";
import HugeList from "../components/HugeList";
import ProductCard from "../components/props/ProductCard";
import { Text } from "react-native";
import ToggleButton from "../components/State/ToggleButton";
import WeatherApp from "../components/State/WeatherApp";
import ColorPicker from "../components/State/ColorPicker";
import TodoList from "../components/State/TodoList";

const index = () => {
  return (
    <>
      {/* <ProductCard /> */}
      {/* <ToggleButton/> */}
      {/* <WeatherApp/> */}
      {/* <ColorPicker/> */}
      <TodoList/>
    </>
  );
};

export default index;
