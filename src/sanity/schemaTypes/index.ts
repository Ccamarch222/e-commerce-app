import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './product'
import {heroImages} from "./heroImages"
import { category } from './category'
import { user } from './user'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType ,category ,heroImages ,user],
}
