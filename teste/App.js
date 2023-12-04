//tipo o require
import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Image} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TelaInicial() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LiveArt</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://arteref.com/wp-content/uploads/2019/12/2048px-Meisje_met_de_parel.jpg",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold'}}>CADASTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>LOGIN</Text>
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
      <Image
        style={styles.image}
        source={{
          uri: "https://arteref.com/wp-content/uploads/2019/12/2048px-Meisje_met_de_parel.jpg",
        }}
      />
      <Text style={styles.text}>LiveArt</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>CADASTRAR</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Começo");
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 'bold' }}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Recuperar senha");
          }}
          >
          <Text style={{ color: "#fff", fontWeight: 'bold', textAlign: "center"}}>ESQUECI A SENHA</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Começo");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold'}}>ENVIAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaInicioApp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={{color: "#fff", fontFamily: "Roboto", fontSize: 40, marginVertical: 20}}>Movimentos artísticos</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/250px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        }}
      />
      <Text style={{color: "#fff", borderWidth: 0, backgroundColor: "#43576D", padding: 4, borderRadius: 4}}>Expressionismo</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://proximarte.files.wordpress.com/2022/10/aa.jpg?w=1200",
        }}
      />
      <Text style={{color: "#fff", borderWidth: 0, backgroundColor: "#43576D", padding: 4, borderRadius: 4}}>Surrealismo</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://t2.uc.ltmcdn.com/pt/posts/7/7/0/dadaismo_o_que_e_e_como_surgiu_20077_orig.jpg",
        }}
      />
       <Text style={{color: "#fff", borderWidth: 0, backgroundColor: "#43576D", padding: 4, borderRadius: 4}}>Dadaísmo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Obras");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold'}}>OBRAS</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaObras() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image1}
        source={{
          uri: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2017/02/m_farol.jpg?fit=500%2C393&ssl=1",
        }}
      />
      <Image
        style={styles.image2}
        source={{
          uri: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/05/o-quarto-em-arles-van-gogh.jpg?quality=100&strip=info"
        }}
      />
      <Image
        style={styles.image3}
        source={{
          uri: "https://arteeartistas.com.br/wp-content/uploads/2018/09/Noite-Estrelada-Sobre-o-R%C3%B3dano.-Vincent-van-Gogh.-1888.jpg",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Artista");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold'}}>ARTISTA</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaArtista() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{color: "#fff", borderWidth: 0, backgroundColor: "#43576D", padding: 4, borderRadius: 4, fontWeight: 'bold'}}>O farol, Anita Malffati</Text>
      <Image
        style={styles.image4}
        source={{
          uri: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2017/02/m_farol.jpg?fit=500%2C393&ssl=1",
        }}
      />
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Perfil");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold'}}>PERFIL</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PERFIL</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://w7.pngwing.com/pngs/1000/665/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png",
        }}
      />
      <Text style={{color: "#fff", borderWidth: 0, backgroundColor: "#43576D", padding: 4, borderRadius: 4, width: 100, textAlign: "center",}}>@usuario</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Início");
        }}
      >
      <Text style={{ color: "#fff", fontWeight: 'bold' }}>TELA INICIAL</Text>
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
  text1:{
    fontFamily: "Arvo",
    fontSize: 50,
  },
  text2: {
    fontFamily: "sans-serif",
    textAlignalign: "left",
  },
  text3: {

  },
  text4: {

  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "100px",
    borderWidth: 5,
    backgroundColor: "#43576D",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    padding: 25,
    borderWidth: 1,
    backgroundColor: "#000000",
    textAlign: "center",
    fontSize: 30,
    height: 40,
    width: 150,
    borderRadius: 6,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  image1:{
    padding: 100,
    width: "300px",
    height: "400px",
    borderRadius: "20px",
  },
  image2:{
    padding: 60,
    width: "300px",
    height: "250px",
    borderRadius: "20px",
  },
  image3:{
    padding: 40,
    width: "300px",
    height: "250px",
    borderRadius: "20px",
  },
  image4:{
    width: "660px",
    height: "350px",
    borderRadius: "60px",
  },
  text6: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginVertical: 10,
  },
});
