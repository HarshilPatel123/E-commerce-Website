import { createClient } from "next-sanity"
import imageUrlBuilder  from "@sanity/image-url";


export const client = createClient({
    projectId:"8grgtrc2",
    dataset: "production",
    apiVersion: "2024-02-14",
    useCdn: true,
})


const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}