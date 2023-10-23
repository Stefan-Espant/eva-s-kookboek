import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {  
    let query = gql`
    query Recepts {
        recepts {
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
        }
      }
    `

const request = await hygraph.request(query)

return request

}