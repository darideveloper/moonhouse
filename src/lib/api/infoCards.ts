export interface InfoCard {
    title: string;
    description: string;
    iconName: string;
    link: string;
}

export const getInfoCards = async (): Promise<InfoCard[]> => {
    const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

    if (!apiEndpoint) {
        throw new Error("VITE_API_BASE_URL is not defined");
    }

    const url = `${apiEndpoint}/items/InfoCard`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        const data = json.data as any[];

        const cards = data
            .filter((item) => item.status === "published")
            .sort((a, b) => a.id - b.id)
            .map((item) => ({
                title: item.name,
                description: item.details,
                iconName: item.icon,
                link: item.name === "Reservations" ? `mailto:${item.details}` : "#",
            }));

        return cards;
    } catch (error) {
        console.error("Failed to load info cards:", error);
        return [];
    }
};


