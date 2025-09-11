export interface GalleryImageItem {
    id: number;
    src: string;
    alt: string;
}

export const getGalleryImages = async (): Promise<GalleryImageItem[]> => {
    const apiEndpoint =
        import.meta.env.VITE_API_BASE_URL ||
        (console.warn('[gallery API] VITE_API_BASE_URL missing, using default'),
        'https://moonhouse.apps.darideveloper.com');

    const url = `${apiEndpoint}/items/GalleryImage`;
    console.log('[gallery API] request URL:', url)

    try {
        const response = await fetch(url);
        console.log('[gallery API] response status:', response.status)
        console.log(response);
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        console.log('[gallery API] raw json:', json)
        const data = (json?.data ?? []) as any[];
        console.log('[gallery API] items count:', data.length)

        const items: GalleryImageItem[] = data
            .filter((item) => item.status === "published")
            .sort((a, b) => (a?.sort ?? a.id) - (b?.sort ?? b.id))
            .map((item) => ({
                id: item.id,
                src: `${apiEndpoint}/assets/${item.image}`,
                alt: item.details || "",
            }));

        return items;
    } catch (error) {
        console.error("Failed to load gallery images:", error);
        return [];
    }
};


