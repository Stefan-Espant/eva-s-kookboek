import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
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
        auteur
      }
    }
    `;

	const request = await hygraph.request(query);

	return request;
}
