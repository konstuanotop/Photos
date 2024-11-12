import { ApiService, CollectionType } from "../../types"

type CollectionServiceMethods = {
    getCollection: ApiService<{ pageNumber: number, categoryId: number }, CollectionType>
}

export const CollectionService: CollectionServiceMethods = {
    getCollection: async ({ pageNumber, categoryId }) => {
        const response = await fetch(`https://3de40168895133a4.mokky.dev/photo_collections?page=${pageNumber}&limit=4&${categoryId ? `category=${categoryId}` : ''}`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        } else {
            return await response.json()
        }
    }
}