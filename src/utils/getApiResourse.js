export async function getApiResourse(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            return false
        }

        return response
    } catch (error) {
        return false
    }
}