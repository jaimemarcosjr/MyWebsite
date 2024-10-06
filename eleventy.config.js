


const Image = require("@11ty/eleventy-img");



module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

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
};