import type { CollectionConfig } from 'payload'

import { HeroBlock } from '../blocks/HeroBlock'
import { ContentBlock } from '../blocks/ContentBlock'
import { CTABlock } from '../blocks/CTABlock'
import { StaffGridBlock } from '../blocks/StaffGridBlock'
import { EventsBlock } from '../blocks/EventsBlock'
import { SermonsBlock } from '../blocks/SermonsBlock'
import { MinistriesBlock } from '../blocks/MinistriesBlock'
import { GivingBlock } from '../blocks/GivingBlock'
import { ContactBlock } from '../blocks/ContactBlock'
import { GalleryBlock } from '../blocks/GalleryBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { FAQBlock } from '../blocks/FAQBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Advanced',
    description: 'Build and edit the pages on your website using drag-and-drop sections.',
    hidden: true,
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The page title — shown in the browser tab and navigation.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      admin: {
        description: 'Build your page by adding, removing, and reordering sections below.',
      },
      blocks: [
        HeroBlock,
        ContentBlock,
        CTABlock,
        StaffGridBlock,
        EventsBlock,
        SermonsBlock,
        MinistriesBlock,
        GivingBlock,
        ContactBlock,
        GalleryBlock,
        TestimonialsBlock,
        FAQBlock,
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
      ],
    },
  ],
}
