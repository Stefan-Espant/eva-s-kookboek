// src/routes/api/submitForm.js
import { gql } from 'graphql-request';

export async function post({ body }) {
  // Verwerk het formulier hier
  console.log(body); // Log de ontvangen formuliergegevens voor debuggen

  let query = gql`
    query Recepts {
      recepts {
        achtergrondkleur {
          hex
        }
        accentkleur {
          hex
        }
        titelkleur {
          hex
        }
        bereiding
        id
        ingredienten
        titel
        uid
        aantalPersonen
        bereidingstijd
        image {
          width
          height
          url
        }
        voornaam
        achternaam
      }
    }
  `;

  // Geef een respons terug aan de client
  return {
    status: 200,
    body: { message: 'Formuliergegevens zijn succesvol verwerkt.' },
  };
}
