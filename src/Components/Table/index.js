import React from 'react';
import { Container } from './styles';

export default function Table() {
    const users = [
        { name: "Clarinha", idade: 60, peso:"55kg", sexo: "Feminazi"},
        { name: "Clarinha", idade: 60, peso:"55kg", sexo: "Feminazi"},
        { name: "Clarinha", idade: 60, peso:"55kg", sexo: "Feminazi"},
        { name: "Clarinha", idade: 60, peso:"55kg", sexo: "Feminazi"},
    ]   
    
    // const usersInfo = users.map(item => {
    //     console.log(item.idade);
    // })
    
    
    function usersInfo(){
        users.map(item => {
            console.log(item.name, item.idade, item.peso, item.sexo)
        })
    };

    usersInfo()

  return (
      <Container>

      </Container>
  );
}
