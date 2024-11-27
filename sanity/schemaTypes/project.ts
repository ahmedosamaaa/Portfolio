import {
    orderRankField,
    orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "link",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "projectStack",
            type: "array",
            of: [{ type: "image" }],
            validation: (Rule) => Rule.required(),
        }),
        orderRankField({ type: "project" }),
    ],
});
