

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of the Product"
        },{
            name: "images",
            type: "array",
            title: "Product Images",
            of: [{type: "image"}],
        },
        {
        name: "description",
        type: "text",
        title: "Description of the Product"
        },
        {
        name: "slug",
        type: "slug",
        title: "Product Slug",
        options :{
            source: 'name',
        }
        },
        {
            name: "price",
            type: "number",
            title: "price"
        },
        {
            name: 'price_Id',
            type: "string",
            title: " Stripe Product ID"
        },
        {
            name: "category",
            title: 'Product Category',
            type: 'reference',
            to: [
                {
                    type: "category",
                },
            ]
        }
    ],
}