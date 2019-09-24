export default (metaDescription, metaTitle, imageOG, path) => {
  return {
    title: metaTitle,
    meta: [
      {
        name: "description",
        hid: "description",
        content: metaDescription
      },
      {
        property: "og:title",
        hid: "og:title",
        content: metaTitle
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


export const headConfig = {
         meta: [
           {
             charset: "utf-8"
           },
           {
             name: "viewport",
             content: "width=device-width, initial-scale=1"
           },
           {
             name: "msapplication-TileColor",
             content: "#00aba9"
           },
           {
             name: "theme-color",
             content: "#ffffff"
           }
         ],
         link: [
           {
             rel: "apple-touch-icon",
             sizes: "180x180",
             href: "/apple-touch-icon.png"
           },
           {
             rel: "icon",
             type: "image/png",
             sizes: "32x32",
             href: "/favicon-32x32.png"
           },
           {
             rel: "icon",
             type: "image/png",
             sizes: "16x16",
             href: "/favicon-16x16.png"
           },
           {
             rel: "preconnect",
             href: "https://fonts.gstatic.com/",
             crossorigin: 'anonymous'
           }
         ]
       };
