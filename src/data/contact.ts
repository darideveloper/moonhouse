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

// Get phone from api
async function getPhoneData() {
  const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

  if (!apiEndpoint) {
    throw new Error(
      "La variable de entorno VITE_API_BASE_URL no está definida."
    );
  }

  const url = `${apiEndpoint}/items/Landing_Text/`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error en la API de Landing_Text: ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json();

    const phoneCard = json.data.find(
      (item: any) => item.Key === "phone_number" && item.status === "published"
    );

    if (phoneCard && phoneCard.text) {
      const rawPhone = phoneCard.text.trim();

      // Format phone number
      const digitsOnly = rawPhone.replace(/\D/g, "");

      // Format for display (479-332-4693)
      const formatted =
        digitsOnly.length === 10
          ? `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(
              3,
              6
            )}-${digitsOnly.slice(6)}`
          : rawPhone;

      // Format for tel: link (+14793324693)
      const unformatted = digitsOnly.startsWith("1")
        ? `+${digitsOnly}`
        : `+1${digitsOnly}`;

      return {
        phone: formatted,
        phoneUnformatted: unformatted,
      };
    }

    // Fallback to default values if not found in API
    return {};
  } catch (error) {
    return {};
  }
}

const phoneData = await getPhoneData();
export const phone = phoneData.phone;
export const phoneUnformatted = phoneData.phoneUnformatted;

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
