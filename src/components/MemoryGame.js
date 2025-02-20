import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const initialCards = [
  "🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🍊", "🍓",
  "🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🍊", "🍓"
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setCards(shuffleArray([...initialCards]));
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    
    if (newFlipped.length === 2) {
      setTimeout(() => {
        const [first, second] = newFlipped;
        if (cards[first] === cards[second]) {
          setMatched([...matched, first, second]);
        }
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <Container className="text-center mt-4">
      <h1>Memory Card Game</h1>
      <Row>
        {cards.map((card, index) => (
          <Col xs={3} key={index} className="p-2">
            <Card 
              className="game-card" 
              onClick={() => handleCardClick(index)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body className="d-flex align-items-center justify-content-center" style={{ height: "100px", fontSize: "2rem" }}>
                {flipped.includes(index) || matched.includes(index) ? card : "❓"}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button className="mt-3" onClick={() => setCards(shuffleArray([...initialCards]))}>Reset</Button>
    </Container>
  );
};

export default MemoryGame;
