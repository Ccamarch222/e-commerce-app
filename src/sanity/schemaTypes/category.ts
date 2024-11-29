import {defineField, defineType} from 'sanity'
  
export const category = defineType({
    name: 'category',
    type: 'document',
    title: 'Categories',
    fields:[
        defineField({
            name: 'name',
            title: 'Name of Categories',
            type: 'string'
        })
    ]
})