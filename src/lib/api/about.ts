// @ts-nocheck

const ASSETS_PATH =
  "https://moonhouse.apps.darideveloper.com/assets/ea6c8a63-aed0-45ba-8c52-209e65bbfedd";

interface LandingTextResponse {
  data: Array<{
    id: number;
    status: string;
    Key: string;
    text: string;
  }>;
}

interface AboutImage {
  id: number;
  key: string;
  image: string;
  description?: string;
  status?: string;
}

interface LandingImageResponse {
  data: AboutImage[]; 
}

export const getAboutTexts = async (): Promise<string[]> => {
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

    const json: LandingTextResponse = await response.json();

    const aboutTexts = json.data
      .filter((item) => item.Key === "about" && item.status === "published")
      .map((item) => item.text);

    return aboutTexts;
  } catch (error) {
    console.error("No se pudieron obtener los textos de About:", error);
    return [];
  }
};

export const getAboutImages = async (): Promise<string[]> => {
  const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

  if (!apiEndpoint) {
    throw new Error(
      "La variable de entorno VITE_API_BASE_URL no está definida."
    );
  }

  const url = `${apiEndpoint}/items/landing_images`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error en la API de landing_images: ${response.status} ${response.statusText}`
      );
    }

    const json: LandingImageResponse = await response.json();

    const aboutImages = json.data
      .filter((item) => item.key === "about")
      .map((item) => `${ASSETS_PATH}/${item.image}`);

    return aboutImages;
  } catch (error) {
    console.error("No se pudieron obtener las imágenes de About:", error);
    return [];
  }
};