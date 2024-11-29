import {defineField, defineType} from 'sanity'

export const heroImages = defineType({
    name: 'heroImage',
    title: 'Tow hero images',
    type: 'document',
    fields: [
        defineField({
            name: 'image1',
            type: 'image',
            title: 'First Image'
        }),
        defineField({
            name: 'image2',
            type: 'image',
            title: 'Second Image'
        })
    ]

})