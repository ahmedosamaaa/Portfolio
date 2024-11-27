import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
    `*[_type == "project"] | order(orderRank){ 
    _id,
    title,
    description,
    "image":{'url': image.asset->url},
    _createdAt,
    link,
    projectStack[] {
        'url': asset->url
        }
    }`
);
