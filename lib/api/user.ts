import "server-only"

export const getUsers = async () => {
    const { auth } = await import("../auth");
    const { headers } = await import("next/headers");
    const users = await auth.api.listUsers({
        query: {
            sortBy: "name", // The field to sort by.
            sortDirection: "desc", // The direction to sort by.
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });
    return users;
}