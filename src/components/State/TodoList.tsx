import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  item: Todo;
}

const TodoList = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text }]);
      setText("");
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = () => {
    addTodo();
  };

  const renderTodo = ({ item }: TodoItemProps) => (
    <TouchableOpacity
      onPress={() => removeTodo(item.id)}
      style={styles.todoItem}
    >
      <Text style={styles.todoText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.header}>To-Do List</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new Text"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <Button title="Add Task" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
});

export default TodoList;
