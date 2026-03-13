import { defineType, defineField } from "sanity";

export default defineType({
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Page Heading",
      type: "string",
      initialValue: "Events",
    }),
    defineField({
      name: "displayChurchWidgetId",
      title: "Display.Church Widget ID (Card View)",
      type: "string",
      initialValue: "b05ec398-c2c3-476e-9178-aad671d87325",
    }),
    defineField({
      name: "calendarUrl",
      title: "Church Center Calendar URL",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Events Page" };
    },
  },
});
