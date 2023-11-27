//tipo o require
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Meu primeiro app no react native! hello world!</Text>
      <Button title = "CADASTRAR" onPress={()=>{
          navigation.navigate('Cadastro')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Vamos fazer o cadastro!</Text>
      <Button title = "LOGIN"onPress={()=>{
          navigation.navigate('Login')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Vamos fazer o login!</Text>
        <Button title = "RECUPERAR SENHA"onPress={()=>{
            navigation.navigate('Recuperar senha')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function RecuperarSenha(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Vamos recuperar sua senha!</Text>
        <Button title = "COMEÇO"onPress={()=>{
            navigation.navigate('Começo')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaInicioApp(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Tela de início do app</Text>
        <Button title = "OBRAS"onPress={()=>{
            navigation.navigate('Obras')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaObras(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Aqui tá as obras dos artistas</Text>
        <Button title = "ARTISTA"onPress={()=>{
            navigation.navigate('Artista')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaArtista(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Aqui tá a pintura e o artista</Text>
        <Button title = "PERFIL"onPress={()=>{
            navigation.navigate('Perfil')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaPerfil(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Aqui fica o perfil do usuário</Text>
        <Button title = "VOLTAR"onPress={()=>{
            navigation.navigate('Início')
        }}></Button>
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
    backgroundColor: '#8096AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
