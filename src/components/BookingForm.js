import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuccessAlert from './SuccessAlert'; // Importez le composant SuccessAlert

function BookingForm(props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    agree: false,
    selectedDate: new Date(),
    selectedTime: '19:00'
  });

  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      selectedDate: date,
    });
  };

  const handleTimeSelect = (e) => {
    const selectedTime = e.target.value;
    setFormData({
      ...formData,
      selectedTime: selectedTime,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vous pouvez maintenant envoyer formData à votre backend ou effectuer d'autres actions
    console.log('Données du formulaire soumises :', formData);

    // Réinitialisez les champs du formulaire
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      agree: false,
    });

    // Mettez à jour l'état pour indiquer que le formulaire a été soumis avec succès
    setIsFormSubmitted(true);

    // Ajoutez un délai pour montrer l'alerte de succès avant de fermer la modal
    setTimeout(() => {
      setIsFormSubmitted(false);
      props.onHide();
    }); // Cela affichera l'alerte pendant 2 secondes

    // Vous pouvez également commenter les deux lignes précédentes si vous ne souhaitez pas de délai.
  };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title>Book a Table</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isFormSubmitted ? (
          // Affichez SuccessAlert si le formulaire a été soumis avec succès
          <SuccessAlert />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="selectedDate" className="form-label">
                Select Date
              </label>
              <DatePicker
                selected={formData.selectedDate}
                onChange={handleDateSelect}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="selectedTime" className="form-label">
                Select Time
              </label>
              <select
                className="form-select"
                id="selectedTime"
                name="selectedTime"
                value={formData.selectedTime}
                onChange={handleTimeSelect}>
                <option value="19:00">19:00</option>
                <option value="19:00">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:00">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:00">21:30</option>
                <option value="22:00">22:00</option>
              </select>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="agree">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <Button variant="primary" type="submit" className="mr-2">
                Submit
              </Button>
              <Button variant="secondary" onClick={props.onHide}>
                Close
              </Button>
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default BookingForm;
