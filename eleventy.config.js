const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // Keep the existing passthrough copy
  eleventyConfig.addPassthroughCopy("assets");

  // Define the image shortcode function
  async function imageShortcode(src, alt, cls) {
    let source = src.startsWith('./') ? src : `./${src}`;
  
    let metadata = await Image(source, {
      widths: [320, 480, 640, 800, 1024, 1280, 1600, 1920],
      formats: ["avif"],
      urlPath: "/images/",
      outputDir: "./_site/images/",
      sharpOptions: {
        // General options for all formats
      },
      sharpAvifOptions: {
        quality: 50,
      },
      sharpWebpOptions: {
        quality: 50,
      },
      sharpJpegOptions: {
        quality: 60,
      },
    });
  
    let imageAttributes = {
      alt,
      class: cls,
      sizes: `
        (max-width: 480px) 100vw,
        (max-width: 768px) 100vw,
        (max-width: 1024px) 80vw,
        (max-width: 1200px) 60vw,
        50vw
      `,
      loading: "lazy",
      decoding: "async",
    };
  
    // Generate the HTML using the <picture> element
    return Image.generateHTML(metadata, imageAttributes, {
      whitespaceMode: "inline", // Minify HTML output
    });
  }
  
  // Register the shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
  

  // Define the image source shortcode function
  async function imageSrcShortcode(src) {
    // Ensure the source path is correct
    let source = src.startsWith('./') ? src : `./${src}`;

    // Process the image
    let metadata = await Image(source, {
      widths: [null], // Only generate original size
      formats: ["avif"],
      widths: [1920],
      urlPath: "/images/",
      outputDir: "./_site/images/",
    });

    // Get the image URL
    let imageUrl = metadata.avif[0].url; // Since only one image is generated

    // Return the image URL
    return imageUrl;
  }

  // Register the new shortcode for Nunjucks, Liquid, and JavaScript templates
  eleventyConfig.addNunjucksAsyncShortcode("imageSrc", imageSrcShortcode);
  eleventyConfig.addLiquidShortcode("imageSrc", imageSrcShortcode);
  eleventyConfig.addJavaScriptFunction("imageSrc", imageSrcShortcode);
};
