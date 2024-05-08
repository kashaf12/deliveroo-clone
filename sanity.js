import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "XXXXXXXX",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
