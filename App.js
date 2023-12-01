//tipo o require
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TelaInicial() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja bem-vindo ao LiveArt!</Text>
      <Button
        color="#000000"
        title="CADASTRAR"
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      ></Button>
      <Button
        color="#000000"
        title="LOGIN"
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
      <StatusBar style="auto" />
      <Text>{text}</Text>
    </View>
  );
}

function TelaCadastro() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        keyboardType="name"
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <Button
        color="#000000"
        title="CADASTRAR"
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <Button
        color="#000000"
        title="ESQUECI A SENHA"
        onPress={() => {
          navigation.navigate("Recuperar senha");
        }}
      ></Button>
      <Button
        color="#000000"
        title="ENTRAR"
        onPress={() => {
          navigation.navigate("Começo");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function RecuperarSenha() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esqueceu a senha</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        color="#000000"
        title="COMEÇO"
        onPress={() => {
          navigation.navigate("Começo");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaInicioApp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de início do app</Text>

      <Button
        color="#000000"
        title="OBRAS"
        onPress={() => {
          navigation.navigate("Obras");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaObras() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui tá as obras dos artistas</Text>

      <Button
        color="#000000"
        title="ARTISTA"
        onPress={() => {
          navigation.navigate("Artista");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaArtista() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui tá a pintura e o artista</Text>

      <Button
        color="#000000"
        title="PERFIL"
        onPress={() => {
          navigation.navigate("Perfil");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui fica o perfil do usuário</Text>

      <Button
        color="#000000"
        title="VOLTAR"
        onPress={() => {
          navigation.navigate("Início");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Recuperar senha" component={RecuperarSenha} />
        <Stack.Screen name="Começo" component={TelaInicioApp} />
        <Stack.Screen name="Obras" component={TelaObras} />
        <Stack.Screen name="Artista" component={TelaArtista} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8096AF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
