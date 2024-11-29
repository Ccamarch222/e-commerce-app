import {defineField, defineType} from 'sanity'

export const eventType = defineType({
    name: 'product',
    title: 'product',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'name of product'
      }
    ),
    defineField( {
        name: 'images',
        type: 'array',
        title: 'product Images',
        of: [{type: 'image'}],
    }),
    defineField({
        name: 'description',
        type: 'text',
        title: 'Description of product'
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        title: 'product slug',
        options: {
          source: 'name',
        }
    }),
   
    defineField({
      name: 'price',
      title: 'price',
      type: 'number'


  }),
  defineField({
    name: 'price_id',
    title: 'Stripe Price ID',
    type: 'string'


}),
    defineField({
      name: 'category',
      title: 'product category',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    })
   
    ],
  })