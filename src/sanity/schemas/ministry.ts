import { defineType, defineField } from "sanity";

export default defineType({
  name: "ministry",
  title: "Ministries",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ministry Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "text",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Learn More",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "url",
    }),
    defineField({
      name: "facebookGroup",
      title: "Facebook Group URL",
      type: "url",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["kids", "youth", "adults", "outreach"],
      },
    }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
