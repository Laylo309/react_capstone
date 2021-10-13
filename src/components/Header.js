/* eslint-disable arrow-body-style */
import React from 'react';
import { Card } from 'react-bootstrap';
import Corona from '../assets/Corona.png';

const cardStyle = [
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem 0.5rem',
    backgroundColor: '#FA4F91',
    border: '0',
    color: '#fff',
  },
  {
    width: '20vh',
    alignItems: 'center',
    padding: '1rem 2rem 1rem 0',
  },
  {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: '0',
    paddingLeft: '1rem',
  }];
const HeaderComponent = () => {
  return (
    <div>
      <Card style={cardStyle[0]}>
        <Card.Body style={{ paddingRight: '0', flex: '0' }}>
          <Card.Img src={Corona} style={cardStyle[1]} />
        </Card.Body>
        <Card.Body style={{ paddingLeft: '0' }}>
          <Card.Title>WORLD</Card.Title>
          <Card.Text>Confirmed Cases:</Card.Text>
          <Card.Text>Confirmed Deaths:</Card.Text>
        </Card.Body>
      </Card>
      <InfoTitle />
    </div>
  );
};

const InfoTitle = () => {
  return (
    <div style={cardStyle[2]}>
      <p>STATS BY COUNTRY</p>
    </div>
  );
};

export default HeaderComponent;
