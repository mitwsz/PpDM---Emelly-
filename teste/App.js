//tipo o require
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TelaInicial() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LiveArt</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Cadastro");
        }}>
        <Text style={{color: "#fff"}}>CADASTRAR</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text style={{color: "#fff"}}>LOGIN</Text>
      </TouchableOpacity>
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
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text style={{color: "#fff"}}>CADASTRAR</Text>
      </TouchableOpacity>
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
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Começo");
        }}>
        <Text style={{color: "#fff"}}>ENTRAR</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Recuperar senha");
        }}>
        <Text style={{color: "#fff"}}>ESQUECI A SENHA</Text>

      </TouchableOpacity>
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
      <Text>Nova senha</Text>
      <TextInput

        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Começo");
        }}>
        <Text style={{color: "#fff"}}>ENVIAR</Text>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaInicioApp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de início do app</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Obras");
        }}>
        <Text style={{color: "#fff"}}>OBRAS</Text>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaObras() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui tá as obras dos artistas</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Artista");
        }}>
        <Text style={{color: "#fff"}}>ARTISTA</Text>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaArtista() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui tá a pintura e o artista</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Perfil");
        }}>
        <Text style={{color: "#fff"}}>PERFIL</Text>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui fica o perfil do usuário</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Início");
        }}>
        <Text style={{color: "#fff"}}>VOLTAR</Text>

      </TouchableOpacity>
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
    fontSize: 40,
    marginVertical: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 8,
    backgroundColor: '#000000',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    height: 45,
    width: 150,
    borderRadius: 10

  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
});
