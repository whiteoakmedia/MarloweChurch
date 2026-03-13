import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      initialValue: "Love God, Love People, Live with Purpose",
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "string",
      initialValue: "New here? Learn more!",
    }),
    defineField({
      name: "aboutHeading",
      title: "About Section Heading",
      type: "string",
      initialValue: "We are an Assemblies of God Church located in Marlowe, WV.",
    }),
    defineField({
      name: "aboutText",
      title: "About Section Text",
      type: "text",
    }),
    defineField({
      name: "appPromoHeading",
      title: "App Promo Heading",
      type: "string",
      initialValue: "Give, sign up for events, connect with community, check your family in, and more!",
    }),
    defineField({
      name: "appPromoSubheading",
      title: "App Promo Subheading",
      type: "string",
      initialValue: "Download the app today!",
    }),
    defineField({
      name: "appStoreUrl",
      title: "App Store URL",
      type: "url",
    }),
    defineField({
      name: "googlePlayUrl",
      title: "Google Play URL",
      type: "url",
    }),
    defineField({
      name: "ministryCards",
      title: "Ministry Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "image", title: "Image", type: "image" }),
            defineField({ name: "link", title: "Link", type: "string" }),
            defineField({ name: "linkText", title: "Link Text", type: "string", initialValue: "Learn More" }),
          ],
        },
      ],
    }),
    defineField({
      name: "displayChurchWidgetId",
      title: "Display.Church Events Widget ID (Card Slider)",
      type: "string",
      initialValue: "c1cc2b53-1b3c-4878-806f-e9d0b8c987c5",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
