// Libs
import { getInfoCards } from "../lib/api/infoCards";

export const email = "moonhouse.ar@gmail.com";

// Get and format address from api info cards
async function getAddress() {
  const infoCards = await getInfoCards();
  const addressJson = infoCards.find((card) =>
    card.description.includes("streetAddress")
  );
  const address = JSON.parse(addressJson?.description || "{}");
  return address;
}

export const addressElems = await getAddress();

export const address =
  addressElems.streetAddress +
  " " +
  addressElems.addressLocality +
  ", " +
  addressElems.addressRegion +
  ", " +
  addressElems.postalCode +
  " " +
  addressElems.addressCountry;

export const socialNetworks = [
  { name: "Instagram", link: "https://www.instagram.com/moonhouse_ar" },
  {
    name: "Facebook",
    link: "https://www.facebook.com/people/Moonhouse/100091244078433",
  },
];

export const googleMapsLink = "https://maps.google.com/?q=Fayetteville,AR";

export const daridevWhatsappLink =
  "https://api.whatsapp.com/send?phone=5214493402622";
