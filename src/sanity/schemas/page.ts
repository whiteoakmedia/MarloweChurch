import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Page Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "sections",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "contentSection",
          title: "Content Section",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text" }),
            defineField({ name: "image", title: "Image", type: "image" }),
            defineField({ name: "imagePosition", title: "Image Position", type: "string", options: { list: ["left", "right"] }, initialValue: "right" }),
            defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
            defineField({ name: "ctaLink", title: "CTA Button Link", type: "string" }),
            defineField({ name: "backgroundColor", title: "Background Color", type: "string", options: { list: ["white", "green", "cream"] }, initialValue: "white" }),
          ],
        },
      ],
    }),
  ],
});
