import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter rating for the restaurant between 1 to 5',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter valid rating between 1 and 5'),
    }),
    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
