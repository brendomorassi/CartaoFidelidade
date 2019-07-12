import React from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { ListItem } from 'react-native-elements'




class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
  };
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    AsyncStorage.getItem('user', (err, result) => {
      const data = JSON.parse(result);
      this.setState({ data: data });
    });
  }

  render() {
    


    return (
    
      
            <ScrollView>
              <ListItem
                leftAvatar={{ source: { uri: this.state.data.photoURL } }}
                title={this.state.data.displayName }
                rightIcon={{ name: 'exit-to-app' }}
              />
              <View style = {styles.lineStyle} />

              <TouchableOpacity>
              <ListItem
                title='Alterar Configurações do Cartão'
                subtitle='Mude suas regras, encerremento.'
                leftIcon={{ name: 'build' }}
              />
              </TouchableOpacity>
              <View style = {styles.lineStyle} />

              <ListItem
                title='Cadastrar minha empresa'
                subtitle='Clique aqui e crie sua empresa'
                leftIcon={{ name: 'receipt' }}
              />
              <View style = {styles.lineStyle} />

              <ListItem
                title='Criar cartão de fidelidade'
                subtitle='Crie seu cartão e fidelize seus clientes'
                leftIcon={{ name: 'tab' }}
              />
              <View style = {styles.lineStyle} />

              <ListItem
                title='Listar Todos Clientes'
                subtitle='Clientes vinculados aos seus cartões'
                leftIcon={{ name: 'toc' }}
              />
              <View style = {styles.lineStyle} />

              <ListItem
                title='Faça uma contribuição'
                subtitle='Ajude-nos a manter os serviços, e tenha beneficios !'
                leftIcon={{ name: 'assessment' }}
              />
              <View style = {styles.lineStyle} />

              <ListItem
                title='Sobre o Aplicativo'
                leftIcon={{ name: 'info' }}
              />
              <View style = {styles.lineStyle} />

            </ScrollView>
        
       
    );
  } 

  _showMoreApp = () => {

   
      const user =  AsyncStorage.getItem('user', (err, result) => {
        console.log(JSON.parse(result));
      });

    //this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    firebase.auth().signOut();
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#EFF0F1',
    margin:1,
}
});


export default ProfileScreen;