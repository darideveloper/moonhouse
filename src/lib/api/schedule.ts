import type { OpeningHour, OpeningHoursResponse } from "../../types/apitypes";


export const getOpeningHours = async (): Promise<OpeningHour[]> => {
    const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

    if (!apiEndpoint) {
        throw new Error(
            "La variable de entorno VITE_API_BASE_URL no está definida."
        );
    }

    const url = `${apiEndpoint}/items/OpeningHours`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error en la API: ${response.status} ${response.statusText}`
            );
        }

        const json: OpeningHoursResponse = await response.json();

        const publishedHours = json.data.filter(
            (hour) => hour.status === "published"
        );

        return publishedHours;
    } catch (error) {
        console.error("No se pudieron obtener los horarios de apertura:", error);
        return [];
    }
};
