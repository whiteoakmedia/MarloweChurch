import { defineType, defineField } from "sanity";

export default defineType({
  name: "belief",
  title: "Beliefs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "scriptures",
      title: "Scripture References",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "reference", title: "Reference", type: "string" }),
            defineField({ name: "url", title: "Bible Gateway URL", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title" },
  },
});
