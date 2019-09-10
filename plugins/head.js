export default (metaDescription, metaTitle, imageOG, path) => {
  return {
    title: metaTitle,
    meta: [
      {
        name: "description",
        hid: "description",
        content: metaDescription
      },
      // Open Graph
      {
        property: "og:title",
        hid: "og:title",
        content: metaDescription
      },
      {
        property: "og:description",
        hid: "og:description",
        content: metaDescription
      },
      {
        property: "og:type",
        hid: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        hid: "og:url",
        content: "https://leoseyers.com" + path
      },
      {
        property: "og:image",
        hid: "og:image",
        content: imageOG
      },
      // Twitter Card
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:title",
        content: metaTitle
      },
      {
        name: "twitter:description",
        content: metaDescription
      },
      {
        name: "twitter:image",
        content: imageOG
      },
      {
        name: "twitter:image:alt",
        content: metaTitle
      }
    ]
  };
};
