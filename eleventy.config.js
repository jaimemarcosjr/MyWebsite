const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // Keep the existing passthrough copy
  eleventyConfig.addPassthroughCopy("assets");

  // Define the image shortcode function
  async function imageShortcode(src, alt, cls) {
    // Ensure the source path is correct
    let source = src.startsWith('./') ? src : `./${src}`;

    // Process the image
    let metadata = await Image(source, {
      widths: [300, 600, null], // null for original size
      urlPath: "/images/",
      outputDir: "./_site/images/",
    });

    // Define image attributes
    let imageAttributes = {
      alt,
      class: cls,
      sizes: "(max-width: 600px) 100vw, 600px",
      loading: "lazy",
      decoding: "async",
    };

    // Generate and return the HTML for the image
    return Image.generateHTML(metadata, imageAttributes);
  }

  // Register the shortcode for Nunjucks, Liquid, and JavaScript templates
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
};
