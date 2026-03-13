import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "churchName",
      title: "Church Name",
      type: "string",
      initialValue: "Marlowe Assembly of God",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Love God, Love People, Live with Purpose",
    }),
    defineField({
      name: "serviceTimes",
      title: "Service Times Banner",
      type: "string",
      initialValue: "Services on Sundays at 9am, 11am",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      initialValue: "9045 Williamsport Pike, Falling Waters, WV 25419",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "(304) 274-2474",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "marloweag@gmail.com",
    }),
    defineField({
      name: "worshipSchedule",
      title: "Worship Schedule (Footer)",
      type: "text",
      initialValue: "Sundays at 9am, 11am\nWednesdays at 7pm",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Live Stream URL",
      type: "url",
    }),
    defineField({
      name: "youtubeEmbedId",
      title: "YouTube Embed Video ID (for homepage)",
      type: "string",
      initialValue: "qQLEIyhxsMY",
    }),
    defineField({
      name: "tithingUrl",
      title: "Tithe.ly Giving URL",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Church Logo",
      type: "image",
    }),
    defineField({
      name: "heroImage",
      title: "Homepage Hero Background",
      type: "image",
    }),
  ],
  preview: {
    select: { title: "churchName" },
  },
});
