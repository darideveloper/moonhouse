import type {
    MenuItem,
    MenuCategory,
    MenuItemsResponse,
    MenuCategoriesResponse,
} from "../../types/apitypes";

export const getMenuCategories = async (): Promise<MenuCategory[]> => {
    const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

    if (!apiEndpoint) {
        throw new Error(
            "La variable de entorno VITE_API_CATEGORIES_URL no está definida."
        );
    }

    const url = `${apiEndpoint}/items/MenuItemCategory/`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error en la API de categorías: ${response.status} ${response.statusText}`
            );
        }

        const json: MenuCategoriesResponse = await response.json();

        const publishedCategories = json.data.filter(
            (category) => category.status === "published"
        );

        return publishedCategories;
    } catch (error) {
        console.error("No se pudieron obtener las categorías del menú:", error);
        return [];
    }
};


export const getMenuItems = async (): Promise<MenuItem[]> => {

    const apiEndpoint = import.meta.env.VITE_API_BASE_URL

    if (!apiEndpoint) {
        throw new Error(
            "La variable de entorno VITE_API_ITEMS_URL no está definida."
        );
    }

    const url = `${apiEndpoint}/items/MenuItem/`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error en la API de ítems: ${response.status} ${response.statusText}`
            );
        }

        const json: MenuItemsResponse = await response.json();

        const publishedItems = json.data.filter(
            (item) => item.status === "published"
        );

        return publishedItems;
    } catch (error) {
        console.error("No se pudieron obtener los ítems del menú:", error);
        return [];
    }
};
