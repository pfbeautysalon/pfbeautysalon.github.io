module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Playfair Display"', "serif"],
      },
      colors: {
        "pp-background": "#F3F3F5",
        "pp-background-light": "#CCCCD1",
        "pp-yellow": "#FCB544",
        "pp-yellow-light": "#FCCF88",
        "pp-blue": "#3C4BE1",
        "pp-blue-light": "#7982DE",
        "pp-green": "#90CF65",
        "pp-green-light": "#BEF29A",
        "pp-red": "#FF5645",
      },
    },
  },
  plugins: [],
};
