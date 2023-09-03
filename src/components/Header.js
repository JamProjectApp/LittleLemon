import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import BookingForm from './BookingForm';


function Header() {

  const [showBooking, setShowBooking] = useState(false)
  const handleBookingClick = () => {
    setShowBooking(true)
  }
  const handleCloseBooking = () => {
    setShowBooking(false)
  }


  const headerStyle = {
    backgroundColor: '#71807B',
    height: '400px',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  
  };


  return (
    <header style={headerStyle}>
      <Container>
        <h1>Little Lemon</h1>
        <h2>Restaurant</h2>
        <p>Italian food in town since 1980</p>
        <Button onClick={handleBookingClick}>Book a Table</Button>
        <BookingForm show={showBooking} onHide={handleCloseBooking} />
      </Container>
    </header>
  );
}

export default Header;
