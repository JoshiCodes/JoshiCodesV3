type Theme = {
    /*
    * The name of the theme.
    * Also used as the id.
     */
    name: string,
    /*
    * If the theme is considered dark or not.
     */
    isDark: boolean,
    /*
    * The path to the css file for the theme.
    * (Relative to content/themes)
    * (Defaults to "<name>.css")
     */
    cssFile?: string,
    /*
    * The Gradient to use for displaying the theme.
    * Used in the Theme-Selector.
    * Uses (Tailwind-)CSS Classes.
     */
    displayColors: [
        string, string
    ]
}
export default Theme;