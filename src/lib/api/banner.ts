// @ts-nocheck

const ASSETS_PATH =
  "https://moonhouse.apps.darideveloper.com/assets/ea6c8a63-aed0-45ba-8c52-209e65bbfedd";

interface BannerData {
  id: number;
  status: string;
  title: string;
  description: string;
  image: string;
  button_text: string;
  button_link: string;
}

interface BannerResponse {
  data: BannerData[];
}

export const getBanner = async (): Promise<BannerData | null> => {
  const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

  if (!apiEndpoint) {
    throw new Error(
      "La variable de entorno VITE_API_BASE_URL no está definida."
    );
  }

  const url = `${apiEndpoint}/items/banner`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error en la API de banner: ${response.status} ${response.statusText}`
      );
    }

    const json: BannerResponse = await response.json();

    const activeBanner = json.data.find((item) => item.status === "published");

    if (!activeBanner) {
      return null;
    }

    return {
      ...activeBanner,
      image: `${ASSETS_PATH}/${activeBanner.image}`,
    };
  } catch (error) {
    console.error("No se pudo obtener el banner:", error);
    return null;
  }
};
