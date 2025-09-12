// Libs
import { getInfoCards } from '../lib/api/infoCards'

export const phone = '(479) 000-0000'
export const phoneUnformatted = '+14790000000'
export const email = 'info@moonhouse.example'

// Get and format address from api info cards
async function getAddress() {
  const infoCards = await getInfoCards()
  const addressJson = infoCards.find((card) =>
    card.description.includes('streetAddress')
  )
  const address = JSON.parse(addressJson?.description || '{}')
  return address
}

export const addressElems = await getAddress()

export const address = addressElems.streetAddress + ' ' + addressElems.addressLocality + ', ' + addressElems.addressRegion + ', ' + addressElems.postalCode + ' ' + addressElems.addressCountry

export const socialNetworks = [
  { name: 'Instagram', link: 'https://instagram.com/moonhouse' },
  { name: 'Facebook', link: 'https://facebook.com/moonhouse' },
]

export const googleMapsLink = 'https://maps.google.com/?q=Fayetteville,AR'

export const daridevWhatsappLink = 'https://api.whatsapp.com/send?phone=5214493402622'