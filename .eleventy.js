module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/style.css");
    eleventyConfig.addPassthroughCopy("css/bootstrap.min.css");
    eleventyConfig.addPassthroughCopy("css/bootstrap.min.css.map");
    eleventyConfig.addPassthroughCopy("js/bootstrap.bundle.min.js");
    eleventyConfig.addPassthroughCopy("js/script.js");
};


const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  // Example: process images with `eleventy-img`
  eleventyConfig.addShortcode("image", async (src, alt) => {
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ["jpeg", "jpg", "png", "webp"]
    });

    let imageAttributes = {
      alt,
      sizes: "(max-width: 600px) 100vw, 600px",
      loading: "lazy",
      decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    dir: {
      output: "_site"
    }
  };
};
