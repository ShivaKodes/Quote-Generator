import React from "react";
import styled from "styled-components";
export default function Card() {
  return (
    <CardContainer>
      <p className="quote">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        vitae voluptatum doloribus quod iste! Temporibus quis ut obcaecati harum
        alias?
      </p>
      <p className="author">Lorem, ipsum.</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  min-width: 100px;
  max-width: 50%;
  min-height: 100px;
  background-color: #f2a09f;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .quote {
    line-height: 1.5;
    font-size: 1rem;
  }
  .author {
    align-self: flex-end;
  }
`;
