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
  return (
    <View style={styles.container}>
      <Text>Vamos fazer o cadastro!</Text>
      <Button title = "VOLTAR"onPress={()=>{
          navigation.navigate('Início')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
    return (
      <View style={styles.container}>
        <Text>Vamos fazer o login!</Text>
        <Button title = "VOLTAR"onPress={()=>{
            navigation.navigate('Cadastro')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function RecuperarSenha(){
    return (
      <View style={styles.container}>
        <Text>Vamos recuperar sua senha!</Text>
        <Button title = "VOLTAR"onPress={()=>{
            navigation.navigate('Início')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaInicioApp(){
    return (
      <View style={styles.container}>
        <Text>Tela de início do app</Text>
        <Button title = "VOLTAR"onPress={()=>{
            navigation.navigate('Início')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaObras(){
    return (
      <View style={styles.container}>
        <Text>Aqui tá as obras dos artistas</Text>
        <Button title = "VOLTAR"onPress={()=>{
            navigation.navigate('Início')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaArtista(){
    return (
      <View style={styles.container}>
        <Text>Aqui tá a pintura e o artista</Text>
        <Button title = "VOLTAR"onPress={()=>{
            navigation.navigate('Início')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaPerfil(){
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
        <Stack.Screen name="Início" component={TelaInicioApp} />
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
