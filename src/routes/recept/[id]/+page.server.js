import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load({ params }) {
  const { id } = params;

  let query = gql`
    query Recept($id: ID!) {
      recept(where: { id: $id }) {
        achtergrondkleur {
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
      }
    }
  `;

  const variables = { id };

  const request = await hygraph.request(query, variables);

  return {
    recept: request.recept
  };
}
