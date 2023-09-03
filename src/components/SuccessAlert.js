import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

function SuccessAlert({ reservationDate, reservationTime }) {
  useEffect(() => {
    const afficherAlerte = () => {
      Swal.fire({
        title: 'Thank you!',
        text: "Your reservation has been confirmed",
        icon: 'success',
      });
    };

    // Appelez la fonction d'affichage de l'alerte dès que le composant est monté
    afficherAlerte();
  }, []);

  return null; // Le composant SuccessAlert n'a pas besoin de contenu visible
}

export default SuccessAlert;
