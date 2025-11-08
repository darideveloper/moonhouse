// Get phone from api
export async function getPhoneData(): Promise<{ phone: string; phoneUnformatted: string }> {
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
        return { phone: "", phoneUnformatted: "" } as { phone: string; phoneUnformatted: string };
    } catch (error) {
        return { phone: "", phoneUnformatted: "" } as { phone: string; phoneUnformatted: string };
    }
}