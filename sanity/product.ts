
// sanity/pet.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title'
        },
        {
            name: 'Descrition',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'Image',
            type: 'image',
            title: 'Product Image'
        },
    ]
}