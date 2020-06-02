import Typography from "typography"
// import theme from "typography-theme-lincoln"
// import theme from "typography-theme-fairy-gates"
// const typography = new Typography(theme)

// - Defined fonts
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    `Lato`,
    `Avenir Next`,
    `Helvetica Neue`,
    `Segoe UI`,
    `Helvetica`,
    `Arial`,
    `sans-serif`,
  ],
  bodyFontFamily: [
    `Montserrat`,
    `georgia`,
    `serif`,
  ],
  googleFonts: [
    {
      name: `Lato`,
      styles: [
        `400`,
        `400i`,
        `700`,
        `700i`,
      ],
    },
    {
      name: `Montserrat`,
      styles: [
        `400`,
        `400i`,
        `700`,
        `700i`,
      ],
    },
  ],
})



export default typography