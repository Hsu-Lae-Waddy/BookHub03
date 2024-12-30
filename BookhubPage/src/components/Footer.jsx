import React from "react";
import styled from 'styled-components';
import Pic from '../assets/Books.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color:rgb(14, 170, 118);
`;


const Left = styled.div`
  width: 40%;
`;

const Right = styled.div`
  width: 55%;
`;

const Img = styled.img`
  width: 200px;
  border-radius: 8px;
`;

const Text = styled.p`
  font-size: 16px;
  color: white;
  align-items: center;
`;

function Footer() {
  return (
    <div className="FooterContainer">
      <Container>
        <Left>
          <Img src={Pic} alt="Books" />
        </Left>
        <Right className="texts">
          <strong>BookHub: Your Gateway to the World of Stories.</strong>
          <br />
          "Join our community of book lovers!"
          <br />
          "Share your book recommendations and reviews."
          <br />
          <strong>Email:</strong> info@bookhub.com
          <br />
          <strong>Phone:</strong> +1-234-567-890

          <p className="C">© 2025 BookHub. All rights reserved.</p>
        </Right>
      </Container>
      
    </div>
  );
}

export default Footer;
