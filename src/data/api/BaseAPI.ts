import { domain } from "../setup";

const baseAPI = `${domain}`;


const fetchAPI = async (endpoint: string) => {
  const response = await fetch(`${baseAPI}${endpoint}`);
  return response.json();
}


const infoCards = async () => {
  const res = await fetchAPI("/InfoCard");
  const data = await res.data;
  let cards = data.map((item: any) => ({
    id: item.id,
    title: item.name,
    description: item.details,
    iconName: item.icon,
    link: item.name === 'Reservations' ? `mailto:${item.details}` : '#',
    status: item.status
  }));

  // filter only published
  cards = cards.filter((item: any) => item.status === 'published');

  // sort
  cards.sort((a: any, b: any) => a.id - b.id);

  // remove id
  const result = cards.map(({ id, status, ...rest }: any) => rest);

  return result;
}


const openingHours = async () => {
  const res = await fetchAPI("/OpeningHours");
  const data = await res.data;
  console.log(data)
  return data;
}

export { baseAPI, infoCards, openingHours };