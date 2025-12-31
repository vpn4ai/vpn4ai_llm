module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("absoluteUrl", function (path, siteUrl) {
    const base = (siteUrl || "").replace(/\/$/, "");
    const p = (path || "").startsWith("/") ? path : `/${path}`;
    return `${base}${p}`;
  });

  eleventyConfig.addFilter("dateIso", function (value) {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "txt", "xml"]
  };
};
