import React from "react";
import Flashcards from "./Flashcards";
import styled from "styled-components";

export default function Deck({counter, setCounter}) {
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <Container>
      {cards.map((card, i) => (
        <Flashcards 
          key={i}
          i={i + 1}
          question={card.question}
          answer={card.answer}
          counter={counter}
          setCounter={setCounter}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 170px;
  margin-bottom: 120px;
`;