
>> **ASSIGNMENT - 10 -** - *Jo Dikhta hai Woh Bikta Hai (What is Seen is What Sold)* - *_28-Jan-2023_*


### 1. Explore all the ways of writing CSS.

  * `Native CSS` - all components's styles in a single file index.css

  * `SCSS` - Syntactical CSS - it is then converted to CSS 

  * `Inline CSS` - _style attribute - pass object - {{backgroundColor : "green"}}_

  * `Component Library` - _MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI_

  * `styled-components` 

  * `CSS Framework` - _Tailwind CSS_

### 2. How do we configure `Tailwind CSS`?

  Steps to use tailwind css in app :
  - `Install Tailwind CSS`
```
npm install -D tailwindcss postcss
npx tailwindcss init
```
  - `Configure PostCSS`
```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

- `Configure your template paths`

```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the Tailwind directives to your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

  * `Content`:
  The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

  * `theme`:
  We can customize color palette, spacing scale, typography scale, or breakpoints using theme section of your tailwind.config.js file

  * `plugins`:
  The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

### 4. Why do we have `.postcssrc` file?

`PostCSS` is a **CSS parser**, framework or API that allows us to use plugins which can do various tasks. We use PostCSS because tailwind is installed as a PostCSS plugin. 

While installing tailwind, install postcss as its peer dependency. Create a '.postcssrc' file in project root, and enable the tailwindcss plugin.

```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
