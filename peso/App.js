import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      resultado: ''
    };
    
    this.pegaPeso = this.pegaPeso.bind(this);
    this.pegaAltura = this.pegaAltura.bind(this);
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    res = this.state.peso / (this.state.altura * this.state.altura)
    if (res < 18.5)
      texto = 'Abaixo do Peso'
    else if(res < 18.5 && 24.9)
      texto = 'Peso Normal'
    else if(res < 24.9)
      texto = 'Sobre Peso'
    else if(res < 29.9)
      texto = 'Obesidade Grau I'
    else if(res < 34.9)
      texto = 'Obesidade Grau II'
    else if(res > 39.9)
      texto = 'Obesidade Grau III ou Mórbida'
    this.setState({
      resultado: texto
    });
  }

  pegaPeso(p){
    this.setState({peso: p});
  }

  pegaAltura(a){
    this.setState({altura: a});
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Image
            source={{ uri: 'https://www.saudebemestar.pt/media/89347/obesidade.jpg'}}
            style={{width:200 ,height: 200, alignSelf: 'center', marginTop: 10}}
        />
    <TextInput
        style={styles.input}
        placeholder="Digite o peso..."
        placeholderTextColor="black"
        onChangeText={this.pegaPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a altura..."
        placeholderTextColor="black"
        onChangeText={this.pegaAltura}
      />

      <Button title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
export default App;