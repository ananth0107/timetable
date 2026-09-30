# Academic Timetable & Question Bank Management System - Complete Codebase

## File: .gitignore

`text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

`

## File: .oxlintrc.json

`json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}

`

## File: index.html

`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 10v6M2 10l10-5 10 5-10 5z'/><path d='M6 12v5c3 3 9 3 12 0v-5'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="V.O. Chidambaram College, Tuticorin (Affiliated to Manonmaniam Sundaranar University) AI-Powered Academic Management System - Smart Timetable, AI Question Paper Synthesis, Bloom's Taxonomy Mapping, and Syllabus Tracker." />
    <meta name="theme-color" content="#0f2744" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
    <title>V.O. Chidambaram College, Tuticorin | Manonmaniam Sundaranar University</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

`

## File: package.json

`json
{
  "name": "timetable",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "canvas-confetti": "^1.9.4",
    "lucide-react": "^1.47.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4"
  },
  "devDependencies": {
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "oxlint": "^1.81.0",
    "vite": "^8.3.0"
  }
}

`

## File: public\favicon.svg

`svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
`

## File: public\icons.svg

`svg
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>

`

## File: README.md

`md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

`

## File: src\App.css

`css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

`

## File: src\App.jsx

`jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AcademicProvider } from './context/AcademicContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { ToastContainer } from './components/common/ToastContainer';

// Institutional Pages
import { Login } from './pages/Login';
import { DashboardWrapper } from './pages/DashboardWrapper';
import { Timetable } from './pages/Timetable';
import { QuestionGenerator } from './pages/QuestionGenerator';
import { QuestionBank } from './pages/QuestionBank';
import { QuestionPaperBuilder } from './pages/QuestionPaperBuilder';
import { Approval } from './pages/Approval';
import { UserManagement } from './pages/UserManagement';
import { Settings } from './pages/Settings';

import { ErrorBoundary } from './components/common/ErrorBoundary';

// Main App Shell Layout
const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-wrapper">
        <Header
          onToggleSidebar={() => {
            if (window.innerWidth <= 992) {
              setSidebarOpen(prev => !prev);
            } else {
              setSidebarCollapsed(prev => !prev);
            }
          }}
        />

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <ToastContainer />
    </div>
  );
};

// Route Guard
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AcademicProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Authentication Route */}
              <Route path="/login" element={<Login />} />

              {/* Protected Institutional Application Shell */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<DashboardWrapper />} />
                
                {/* Academic Section */}
                <Route path="timetable" element={<Timetable />} />

                {/* Question Management Section */}
                <Route path="questions/generate" element={<QuestionGenerator />} />
                <Route path="questions/bank" element={<QuestionBank />} />
                <Route path="question-paper/create" element={<QuestionPaperBuilder />} />

                {/* Approval Section */}
                <Route path="question-paper/approval" element={<Approval />} />

                {/* Administration Section */}
                <Route
                  path="users"
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <UserManagement />
                    </ProtectedRoute>
                  }
                />

                {/* Settings */}
                <Route path="settings" element={<Settings />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AcademicProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

`

## File: src\assets\hero.png

`png
�PNG

   IHDR  W  i   ���  �PLTE   ���~v�~v�pdu���������dZl���}u����~v�����������~v����w�\̀x����~w����������Q�}v�~v����V�~v����x��F����R����TNZ�~����g^p|u�OHU�x�I�YQ^���������|v�˱�}v�Z�|�x�xC�����x��a԰��\-�g�m�|Ċ��f4�}u�B�LEQ���q5��a�h�iׁHǟc�k�V(��X�r!ܯo�}.�m7��M�O��_�t۴}�[�o3����q�V�Y%�o�Q�Q�s0�fጅ�E�@9FX�J�h,äh�pE��H�:	�B�O��<�=��_ڋ5�r�O��d\j~:�g`mË�8	��H�:	�w�4{�O�~F��m�P�>
�=
��TϏS�@��[�LćM��I�}v��Q�4
u�m��w�]�x>�{E��YΓW�w?��Kܘ[�v@�;|q7��g�a�iބB�G�A��N�U�0p}?ԅJ�~B��_�[(��_߮t�v:��Rܡf�Yɡe�d-�j5�D�p<�L��r��I�T�p9�v1�a-����^�Z�S �U%�K��D�Q�m�f�L��e�C��?�bތO�_�T�X"�Ì�|>ŝc�e4��V�k2�k5�J��o�D�D΁DƔU�N�t�:�]%�P��k�}�v9΄I�F��P�}�L�,gG~�J�_!��[�g,�ɔ��r��M̦c�p/�}+�h'�u7�{�n1�i ԰�����0�B   |tRNS ��p#� ��T�;é���*`YJA�C�d� �S#�20�>� �|c�A��߻���s��|u�o^Y_]���?�٤?�Ǯ���}d�kecۢ8��¬�s�����������Т����Ð�}4  /:IDATx���[��0�a�	!�DH���:m�HTQ%��f_�knݛ�� �6�tV`E��g �0�0c��S�٫��r�������l����6����u��-�Uvc'����n�т?��� �4�x�PS��у�x�[��� �.i[���DX�͏��S���>�\��d{��Ճ�,�mn�E����
���H���Wؘ0x��'{b������W�X�`�3X�7�-21����`'��Ԅ��ݪ�G�?"�����V�`�pM�B#����9���J�=L�5��(Z]��(mW�>٬�`��K�Y��jϱ��Y擂s�IϳO��"X?��T.�K+mI��Oa���=��Cs�D�y)a�8�a.1[H��J`F����1K
Z�`^^�{̆)O0�|�R}���[<Z�
�Q߇�[��5���i��tt7p|iK@/a�I�v���s��J`-�c�9٬����׺�,I1ـ<6[,�� :����z/V~ѱK�t|�� ��]=��U��j{�>�"�|�f�Yqz�)��h�@n�K���|�H�k��R��?FXԐ+3#�V�����1�(FX�[���$���0}Ո�V�bxn�	�{�����@��V1�ʹ^G*iѪr��4�Am"f�
g�%xfoO�z���>�@��:R�z�XWL��S&q7p�M���:g�U*Z��^��|+i�ꍵ��bs�W�@�o�]v[���0��n�1��@�k���!|��_B�UVRź��|���������%��� ��V�`�k��;fZh��5K������>{�H=��/*tEѪ�3�x{�gŬ����yR����xO�	ST��e��哮�9v�{�ڏ��]:,���w�*m	cղ��^MQچ�.�h����p��åXh��?r�.+T����E6���i�M."fO��T��K<�]���K��1�h�Z�`�??b�	z���D@?1���=�ʔW}�QK��a<2������m���u�8���8�Xu��%��[ěD�b3o0O2D@��O����.`ӫ�����A�����evM��R`T֭��p2�j���]�X�xfuKz^�.8��&-c��T�����[���Ղ4���6ÞJS�բ����QGV��5�!u4a#�k�ڭ�f�J[WPG�����b�&�,jꪺ�v|)����	A2U��Jv���Me�|�A���ᩯ5u��hE�6_������E/bMC����%gd��q�xk�X萡�����-[u!,�[n�ȩ�Yv����,;cy��P@]�U�)�O�z�j�C�î�c�.��Y�3�aoY։�;daLD�zU�j���a8n�{�ׁF*�{����xJ;��:#.�N���{�_)Y��3�X־�r�{�B�蠺��7�-�:�����?���������/	������}�w�kw
��1��,����e���l�=�����$��\V9O�1�N�J����5��~ r�@6b�8*յ!ˮ�r;c�#���ݿi޹���٫�fo�*�ґ�[���CZ�klmӞ�I����==���i��g<��Qx��g}�֕|V+5�5%��Ƕ3�c{7�;����ZD�eȩv���VX�]��U�l2)b�DDz����'�T6�x1�̅k#e寇U�t߭O�YD9��evɗ�ڛҳ	-+��|��5����n��^��l�`�Q�����n�����O�\�EI�"��x`ծ׏���eD^��D�{̝av����ׇ�K�Wa�b�.�\��a�VR���o'�ؔ �K��t1���{.��F��)����b��J~4� �JT r���>�E��,d�S��J��KW(f�,�5>k��R�8
�������@�d.���B��È�0���{���V�wS)Z�}�k�ɬcY{/����u v�]��[�����w��f�[� �+��X+$$3�[�e���En@2�Q�|PXUtK�c���ڊ^ڲX�������&�F��s�
vy�]	�I ���0�2� d�yB��0�!�\{����]Lmk[`���Znǚ�}4��nI[�eӺV9�
11�x�*40a��Ƥ���64�aUvu�c�M5�
������xk[������`!i���<�}CQ���1�͓#�@<A���r,q��u����@���D�R���ZۙW�lLX�����|P3uϩ�5\6����`�dX(M�x����O	a4�ֈ��>om�f)���x]մހ�
6�x]q���Щ���n6v����n�rL]�)��2�Ҟ��0М�s�8�[��&���k�M0��_4AL���C����g�M���Z�QPbi��Oa=̾�іe3z~�:�O���2m�_�A�䩁yB��2k�M+�n�V��~�M�C����̏|'����������̊���[[;��@u��ޣum2��@��=7�����$u5��=6+y����&=�:Vq��,t$�q��j�����t���Λ���#�YV>ih`{��{'璝�c��\����ӽ�ilJTX����y �+� `��T2��{=�i�+^��2[���'�I NZc�hԴb�����e�b9׶�b:%�h#K�wUU[�^w[�1����#gAz�L���`pB�^Ko���wN5i�,px��c:�S�om1�t��$�Q��K�sI��w6�IDQ>�2|�������&�� lp �$U2:�A�	��)"�FMX�ʭ+����]�c�O0čw4j�`<̝;-򬚒��x8��3�V�(���pe������dm�"�\��6�!)�6P/��m`0���QA�^�ŷ�������ϕ_��<�;�9�n`���|����mU��uFt�TٕV9.�Pw
�����k_�4��Е	U�w
s�w����曑�U[��b���6�m����ΑYS�AD~d՚����yh��[���.�Y��R�� CZ�]9�6 S��I�B~h�Y8Dƚ�n�a����S�-�J�[���s�.U-�kSp��ӎ�dYr��o=�������Z9��I��P�3F��'T�e[����� �x��+S��U�_`��A�SZ&���ucG�6�MY����z�\��(�%�}�d�É�p�s}hYL���u�Q�j�,��q#i��岼U���J�)�J~8me���?�ڳZ̀2�nAD�vm�/�>��,b�U$��Ԭ�t��Jj ��b��Ӭy6[Yn��N��732UR��'�-��pӬ#VG�ɪ��d��buIv�)A ����uں���@�F��I�Δ�t/Dr�>�َ#VE[MFA ;	�z�m��X��b�X�(`q4~#���.V7͚ͳ����V4u���O�Bڦ��6�t��s_��Q#s�I�?������-�h8	��d
7j����a�#ֹ��3� ���Њ�lڏiV.8m��/ƭ,�A����@4�H�ɴ��T�1b�x~���f�S��.�j���\����\���|x �(�eS�'�A��U�a�"Wm ?΅o��,8�V~�-�s��u5���Cm�a.�Ī�/Ѓ���o��~���p�^��{�ѓm ?ѫ�������X������G �TR_��wO��m[�.�V�V���g���o*���,��ޘ��b�I� ��H��R�  zu��A��k�3ab�V'jjG�%��	b+Q�� �}�kx5���r��PVX�$�;�����֦d�)B�:��[��G��%�x���*u����u5�P�)5�b_b�������/��,�WQb=nT 8h�����躮hQ
zu��S?r��
�l�`Y���7��l{�{g��,�||V�4���EX.V����/4���A�z�ճ�����6��a9�t��Y�c��~�m�o/�S	�?��_�?z�n����޳d1��_-u���(�/�ݿkSQ���V� ox�>�K!��:h
Qj���D$��/ĩ8��!"�"����dPi#c�G#�-��B����ڸ���֓�������\�9��6�Հռ;09|b���2����_2�LZ�v�g�g�<�3z���5�x�֙?��������pz���-wW�F�_9PKkN���(����|d��u_q�1ݓ쮉�L�l��D3{+�y=3fl����������n�#T�=j�h�{+�@�����Ļ �u�8��VA�%���\4�tX�vn4�/֝5k �
C7�y�j=�Xn	磽���S��[̞a�h֠] �C��1��2Ҍ58W�+��f�F��g�1�؇#���aow�
;��9��b��:�H�ZS�w]mu��_z����nboY�5�s-�k����x��g؝e�B�f���,ѶJv͵ݹ�HpG�Q��A�4rh���[�5P6��֗S�q��D<,�k�W�z�#�čF��Z*�vb4�o�@�}챠��^.ק)� ����c�u��V��;�H�ΖP
���uGt�	F�1X(o ����\�b�ن�j�:�HOW�r�K��ॱ~]�r��6(o���ӻl���-��y �#,ז�K�͕���	��B�D��ZH%(ٍa��niUKO	O�j�F�7`��p�XAsm�<�8��|�v-1M�2���|���Oj����	O���Jp��T�W�q*�=N�3K])uW��W�k�	,�Y�k�u�<��+����X������V���-����@�>I��n4�ݡ�G�qOr^����"fњ��xaIki[���+JJY|�C�uƄju���b���V�5�]KYT��;�X�8��ag��ta��X���XI�!^��HDb#�N�V[�p8s\3c8L�cΠ͐��z�i��嶣�C���^�c�x���4�.�I~�����9?k���c��������R0>g���
�V�?/�����A'^�b/�1���V#�,2��)���^��3���A�}G�GR�#O�;+c�<��  .9X����[���==�`���F`pG�A��K�����p�x>oB� � )�$`�t���C|�f���3��!T0��ᧅ�0B��`���㸕8m�ru�Slpg%p��P����N>l�������t��C�z��Wr�\|�@(�ou�z]|V~Z��4����nx�!T`���#�9C5͎�-���՜߆���!��P��P6^Jt�:�(�֠jn�{��BD�>��SqG�7�d�>yɵ�=&<�;�E0�.��01��ǲ֘t���
	1ZTf�M�=z���2j,���]�)�9��\k;%v��\��ʙ��5"@�� �qh�!&���&�����ʔ�J�?:p{��^�� P�H�4������76eH��%��7�jw�����0����N�\tN$���6��A[�N�C��]L\�4h�`���gN.�0dȎ�ܥ�K_��jι�l���yQtyA�1�����@G�^O��5���b:q��j�Q��[�U�g�68�dhd��c�R�Ӄ�;{��z�_c�!�� ��@'���<��˵s�ŻEcg�ǀ�y5���\�ɣ��8=;ؗO�آ!���i���R��ԷfgȦ��C��.A��+�ʑ�];פ�Ԙ/��x#d�bj�5W�4��i��~K�����*�
��l��.x�z$Rl6�}0'[��GY�B��wJ��-�� �nV�B��M��}Np)����0�?`4���+6�3׈�]�o
�[�r��n��4�T�
���O��K���lχ忴���T����(�i��F�h�j�{��QӹO��b$}��>h�N��L:�J�"�b�J�;���:M}���cv}.�l�c�%����n�(��m#�q������Qh�+���T*��w�?�b�sq��.y�� )�������JR�Uf���aLC�5s���bC�2����o� �ڒ�"��^Ӳ��?h���ݔ |<�5����͞��r"%$bkL��l�-�j�1��hRU��� ��X=�wN}�����&��{��I�ЫF�2�S�]*�s�� g�A�P3r������	�X"u$-���l��(��{{�P5MeHI��=��w����j6wU	iR���T�oYw*p7�r)Ҋ
B:���g�I�	]�r�v{!r�&���Ŭ�i��L�4� �F�4��F�����޲�*�T@�$��$����W<��{�X,��τ��һV�$ؔ�S�m��.����l̘b��7�Q���GUUMڪ�Ju��c��l�E5.�s6'�䤽��#��{�T,�<��������NV�}�R~��A0����e�<��X��(�ǄV��,�Q�MEiﳩ�� �%�Ҽ�|�������hRJ�S��{G��V��x��D��i�H"!�������_�e^Jp�ǎ�/8�t*}7����K����*U5ն9�w�a.�G9�Cj��Iɖ�������[Ҋ�xI�9X1�[�ٽh�?��N�}�UA����R��e�U��z]��o�W%��h/M����!�_�;��8�����>���x� "�8#Dq߄!� ��5#�XuO��s�[���Zt�`���jK#���o�����vڷ�7��|��v{4���յƆL������4X���tK'���w���\]����ڜ#�.�nS�#���$��K+R�L�T:�c�Z����9?A�/`v����v�5`��N�)�Sמ<ִ�fY!j٘���]��O����zN��U��l�#xb�`RKj����4[fv�a<߶�'��"���4�P�w��?^֊��'ٔ�0��Ƚ����Z��ye�T� �����T_�9pr����3�����`��]�9d��-�üW�_�;׭�/?֒QhJ|�#X���%gw���`��ɉ�R�+�W�t���
��N�x� U:Vz�<7g1���n��l�0����ͩ�k�?y�����a��0b^-��W��O��U�����6Ǩ�k�[&ԯiH�[҇�~���h�1 ��[��8�n>w���Ѓ}p��˗�I�'�B(���E�J�����f������7���\�6�+ >׉U�i��'WAIP.?�qoȟ��{�!;�9��t&����cj5_�p�ub�}��f�Q�|���E��2��	�����X�c��:GuH�8����u��}ǎev��3W���_*�?�6����A�E��c�x�1�P��go��M����y�!����j���Ӯ����B����S����3�O����b���r�\޽��X�5+$�<!��@%d�4*$�����m�}�j���5*l�WT�a��0L/�Y�%�ʼ9�şU�!�>?ؕٻ�b���h����)<,b����wwu��A��ߤm�E���D0d[:�\�-Ř���0�O��M=X2�ş��%/ʥMG�E�A)�8���'�Gⲱ�(j�}wY�fu���W�]W�	?<i|RBp�D`�Hb���d���q;5�[���n=J�ӏ�_�\,|	�pP��� aJ=Bi�["��"7VwhFt�7���O�8yhW X�K�0��V_�z�f	���Ǉ��X���u(-_{�q1YL��e!쁡�
`���5�zK�H��]�t�zw�;��k��KڪQ����b�(C��u �#lY?0 ���������P��h%>���O��V�|"�%�����2W����=�f�H��08c\�b�)���C� ��Z���[����D@,ߣ�gI*Œz��+�%Hhy\2.l�<�zwy`�ڵ�Ϊs��F��[�HQ�U�	�B(�X�~�,�����n*$�dE����"P�� P� �%������U���&�A���;L��<����D �lo0��l[q�h�"�6cZ��vbc-	�r�#,)��U�� aKS�D.�����}i�v��]��Ugmv�ge�)��ۍJ]���aTy�����?��Y�"ؓEO!��J\)8=�Г���_���?��;�|��sӄ��7˒y�����K��u��v�+�(����e�Tf�2BI��= ����/�tYN�������_�q��~g��6�Uϙٷ�f��Opՠޓ�{$cL�犻B�*�r4����y���
b�b����(�o��|#�2��{u⟝��}�t�y~����k��םs�ܫ��w�a�\<?��W$�Mk��<ۣ��)��I��׸x$h�����	���<u�ի����6c�߹���ۨ޻i�W���Ͻo�\(y�}�� t�.�@-7�l���1%�.] A��c����o��O��s7رn.�?�����9�˨�ɫ;w�|���ͪ�����~��S!>5*�Vnl��߀y*!��-����z�wy��x��\''qA���X�EA��Ny�6Dh��bգU���+���]��(�M�z�
-�4��V��7N�l���#�'�'��;f>`����hi��Ǐ��p[�aFD�P�����g��+�μ�8��g�\����v�eJ���}�*!7�f�KG/�[[�j�j��M(��5Bb�YAF\�3�<���u0��ȫ{��|��2g��)�5��g�G�ˆ��ג��um=����\.��U_�
���q�O�
Gi^$"�.�������s�b���
�����fCw�E�~Y/��d�+ ��Y����-��V�2��پ� UR�L�(ǈG�k�n�ˬ\�/�O��]0v�|n:N�1������ix�o/��_&r���'���Xj�ێ��*B8s�J�\Pf���@��g^ֿ���4���I��8fѝ6Ɠ�e�dG.�E	ɮX�ƬbJIdφ�.4K"E�#�1�Er�"
�-��GN���;{㥪���:2]w����*bq�w������j㲯E$[��2V��pR��  [ۜ>�{��=�n�jk��T�
�4����w�hN����5��r���Q��jf7h�roɄ\|�U"�bS!B��6j�6��) S�-ίeWr��p�մ0N>�OG�nZ[�` �:s���7��DdI�f'I���oȥ�K;�J+�0�A�YMSk��!,x����V����'q�p=�?=��=�ۭ<9_�imͦ3�=Ej�%����s�ݣ�g$��9Q
+�6G�TT�?|�y�4�R�-4��<�]��?��ξ��@����:n��������3݄Bm����Ffwi�z�+S��� �%�~H�<|UBa���a
$hZ��K�^ʵ 9��Ք�[o��Vo�=�
���d>�'���
�]�:����]��0�����~@�EAP�xCguvʐX�!i֤��/`i>[���G5�Bi���l�(�%g�����'�;�>�A���'�����ͧ���^v�$���(��ۼ�|�������v2���z ӬY�������j��3Im��[�9ĵ �:����۳�w�����y����p�5���	o#Q���������aD�������ε� Z�ȳF���n?��z����
�6���3��$����o� ��~Z �6��)A:�>b�\)6�"#uw:5���}��y<c[��%��aL�ޛxR��W�����g���X��e뷘��6C�&M��H�}��Q�#L�&Vr8�絆����\��5�2���`'�g`%6Q�i5�4��^��|>L>f�О�@��[}W-d��Qʈ*�u�Cj9=b����������g���c�^��[�a��%	���X^6pҸ�'[��
x�[��-��E�&��
 D���f�G��+ؘB`��yѹ����[�S�z4r���Q���WZ�3g��5������e5t�fA<��)DVRuNʙ�N+��T�E�LK�0�As�#���]��$�cSx�K� �8��Q���ǃ�j|��d<�=�xd���غ�K�Hx�Q�X��FH��(f�>���S���܅j�X�z ��cS�&ʍ���V��״e����sK�X���*q:�%N"���ZqC��E.W�97����p{Q�ȕ��=}�����$k&$��@{��7��մ�d�K���9�zeU�fP*��OU�0�e9�ϊy��]��\��p���q�Jy�ѵ�{u�����o=(���{�������|���v�U����Vʁ���s5ձ����$eU�>�ˢ,�o�9��,�r7�'x\�w̠,���U8�~�3lM���g���<��^�0�ީ�YdU�y������8��^������윻��0����8�(N�� ���88H� �$�6$J
5K�&�Gɠ\>���.]�.".�����<>thׇ����M�����e�$�@��A²l)���{�.lo�[�CC�N)VG�8�o�"���{s����,[۸��=��Z�6�-��Q�~��h�Y��r��׺�j�^���mUF6�1PJ%��O������n����2Z�a'�	;��?t���@9�U��[C��!����%���'��W�~�#�?C�/-���\�l�m�B��/7�7���	CM�F����*��ց�{��p�����9����i��d���<�N���z]bK����[w�<y�p5�گ?��ӵ��(��"�c:�i|��p�z�y��wg"	9g�}ad�B��##��	�`���h�괫�ܹ��!�b��ww7�_�OY�n�7���Mf[I0�鉤�wo=ؾ�]���u|�R���J  4F�aB�vKq"`�81�����l}N�c\�5V�OZO!��O��׳C����%rp�iI��av	�cy^n��6�q���!4�Vhc!���$�@6(t�)��j$]}����e�:��WϮ�����^��m�9kj�9��,����b�>h7y��um�H�V�F!`�(�JZ��P����@rJV��������̏x��o*Z��D�<�>��X�-6��e*��:h�sTP�'� �j�D@T�B���E=OS���u��8'/u�B���M�_Ю�.����Iϝ�w߮��
���L�R����piB@�%a܋��#,'�s�Ma��M�\���g=�pRc�+v�mrLZt����.6�:챷I��g\�0 ��o�&0ƛr.��yܭ���M��
��`�og�����U�n��MWnV_�~�=��4�Ć�7��@�q �;��U�҅s��@��M:t�Z��N!}~ǿ��W���]����j�K��͚nJ�mT8 $�rB�V�-����4-sW�uYt�E���m����.Gp��z-����x^m�4((���Y64�� + \9+�0@�BU#4�1y�הu뎋����~&�{Sz����
�F����1aeC��$"@�VCc ,o�`�"�AE����S�}���5m�q�v.W�|�8y<N)��5p�`��0�~B�*��Х��H��J�%-�<ۮX� �'���-��m���s�<نF�!  ϊ�V�@Ҳ�e �8�-r[P��S�������#`Pw���}�b���P�HEi�mK �lc� 1؈ �@��)G?y_��m����6wǢC����'��ɉj���{�:��G %��t��uL��p�_�V���k���.��ian0V��ŭ�,�9e���ȁ[F�P<�e��f���Y�+��ߢc�%�k����`�l$@����,����"H5Goihcz����h�Z�v���b��%1V����J:8�IH�s�"bZh��֯�=�k7�51Rܛ�C�m�m 7 (����Zv��/�?Xߵoƨ1=�q�2ur nB��*u�2۩�X��Ѡ"(,3���n!��ʇH����G�qc�R�G��<k�͇���
�� ��"�$Po	=�c�!�1B���z�7{X���, y!PA%C�葆	s�婪z	��9���i1�mv�/��t�cL,��� ���,�y�j��
��9�%��Ie:�n�%x����z,�Q5)P����k��M��;i���1;�߮�nw�C��^��lt�*7�    IEND�B`�
`

## File: src\assets\react.svg

`svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`

## File: src\assets\vite.svg

`svg
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>

`

## File: src\components\common\Badge.jsx

`jsx
import React from 'react';

export const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'neutral'
  icon: Icon,
  className = '',
  size = 'md'
}) => {
  // Normalize status text to appropriate badge variant
  let finalVariant = variant;
  if (typeof children === 'string') {
    const text = children.toLowerCase();
    if (text.includes('approved') || text.includes('balanced') || text.includes('active') || text.includes('covered')) {
      finalVariant = 'success';
    } else if (text.includes('changes required') || text.includes('high') || text.includes('overloaded') || text.includes('danger') || text.includes('inactive')) {
      finalVariant = 'danger';
    } else if (text.includes('submitted') || text.includes('under review') || text.includes('pending') || text.includes('warning')) {
      finalVariant = 'warning';
    } else if (text.includes('draft') || text.includes('lab') || text.includes('theory')) {
      finalVariant = 'info';
    } else if (text.includes('bloom') || text.includes('understand') || text.includes('apply') || text.includes('analyze') || text.includes('create')) {
      finalVariant = 'purple';
    }
  }

  return (
    <span className={`badge badge-${finalVariant} ${size === 'sm' ? 'text-xs' : ''} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};

`

## File: src\components\common\Button.jsx

`jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg' | 'icon'
  icon: Icon,
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  title,
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : size === 'icon' ? 'btn-icon' : '';
  const variantClass = `btn-${variant}`;

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      title={title}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      ) : Icon ? (
        <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      ) : null}
      {children}
    </button>
  );
};

`

## File: src\components\common\ConfirmDialog.jsx

`jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed with this action? This cannot be undone.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger' // 'danger' | 'primary' | 'success'
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      maxWidth="450px"
      icon={AlertTriangle}
      footer={
        <>
          <Button variant="outline" size="sm" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant={variant}
            size="sm"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
        {message}
      </p>
    </Modal>
  );
};

`

## File: src\components\common\DashboardCard.jsx

`jsx
import React from 'react';

export const DashboardCard = ({
  title,
  subtitle,
  action,
  icon: Icon,
  children,
  className = '',
  style = {}
}) => {
  return (
    <div className={`card ${className}`} style={style}>
      {(title || action) && (
        <div className="card-header">
          <div className="card-title">
            {Icon && (
              <span style={{ color: 'var(--primary-600)', display: 'inline-flex' }}>
                <Icon size={18} />
              </span>
            )}
            <div>
              <span>{title}</span>
              {subtitle && <div className="card-subtitle">{subtitle}</div>}
            </div>
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

`

## File: src\components\common\EmptyState.jsx

`jsx
import React from 'react';
import { FolderOpen } from 'lucide-react';
import { Button } from './Button';

export const EmptyState = ({
  icon: Icon = FolderOpen,
  title = 'No Data Found',
  description = 'There are no items to display at this moment.',
  actionLabel,
  onAction
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.5rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px dashed var(--border-medium)'
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-50)',
          color: 'var(--primary-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}
      >
        <Icon size={28} />
      </div>
      <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{title}</h4>
      <p style={{ margin: '0.4rem 0 1.25rem 0', maxWidth: '380px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

`

## File: src\components\common\ErrorBoundary.jsx

`jsx
import React from 'react';
import { AlertTriangle, RefreshCw, Home, Trash2 } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Antigravity Application Crash Caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleResetCacheAndReload = () => {
    try {
      localStorage.removeItem('apex_clean_programs_v4');
      localStorage.removeItem('apex_clean_subjects_v4');
      localStorage.removeItem('apex_clean_class_timetables_v4');
      localStorage.removeItem('apex_clean_timetable_v4');
      localStorage.removeItem('apex_clean_users_list_v4');
      localStorage.removeItem('apex_clean_subjects');
      localStorage.removeItem('apex_clean_class_timetables_v3');
      localStorage.removeItem('apex_clean_timetable_v3');
      localStorage.removeItem('apex_clean_qbank');
      localStorage.removeItem('apex_clean_qpapers');
      localStorage.removeItem('apex_clean_events');
      localStorage.removeItem('apex_clean_notifs');
      localStorage.removeItem('apex_clean_users_list');
    } catch (e) {
      console.error('Failed to clear cache:', e);
    }
    window.location.href = '/dashboard';
  };

  handleGoHome = () => {
    window.location.href = '/dashboard';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-app, #f8fafc)',
            color: 'var(--text-primary, #0f172a)',
            padding: '2rem',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          }}
        >
          <div
            style={{
              maxWidth: '540px',
              width: '100%',
              backgroundColor: 'var(--bg-surface, #ffffff)',
              borderRadius: '16px',
              border: '1px solid var(--border-light, #e2e8f0)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
              padding: '2.25rem',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                color: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <AlertTriangle size={32} />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--text-primary, #0f172a)' }}>
              Something Went Wrong
            </h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #475569)', lineHeight: 1.5, margin: '0 0 1.5rem 0' }}>
              The application encountered an unexpected runtime error during page rendering. Your session data is intact.
            </p>

            {this.state.error && (
              <div
                style={{
                  textAlign: 'left',
                  backgroundColor: 'var(--bg-app, #f1f5f9)',
                  borderRadius: '8px',
                  padding: '0.85rem 1rem',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  color: '#dc2626',
                  border: '1px solid #fee2e2',
                  marginBottom: '1.5rem',
                  overflowX: 'auto',
                  maxHeight: '120px'
                }}
              >
                {this.state.error.toString()}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={this.handleReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
              >
                <RefreshCw size={16} /> Reload Page
              </button>

              <button
                onClick={this.handleResetCacheAndReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
              >
                <Trash2 size={16} /> Reset Corrupted Cache & Restore Default Data
              </button>

              <button
                onClick={this.handleGoHome}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary, #64748b)',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                <Home size={15} /> Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;

`

## File: src\components\common\Header.jsx

`jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAcademic } from '../../context/AcademicContext';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Search,
  Moon,
  Sun,
  Menu,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Layers,
  Calendar
} from 'lucide-react';
import { NotificationPanel } from './NotificationPanel';

export const Header = ({ onToggleSidebar }) => {
  const { role, currentUser } = useAuth();
  const { theme, toggleTheme, notifications } = useAcademic();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/timetable?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const roleLabel =
    role === 'admin'
      ? 'System Administrator'
      : role === 'hod'
      ? 'Head of Department'
      : 'Teaching Faculty';

  return (
    <header
      className="header-container"
      style={{
        height: 'var(--header-height)',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-light)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.25rem'
      }}
    >
      {/* Left: Menu Toggle + Academic Portal Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <button
          onClick={onToggleSidebar}
          style={{
            background: 'var(--bg-app)',
            border: '1px solid var(--border-medium)',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem 0.5rem',
            borderRadius: 'var(--radius-sm)'
          }}
          title="Toggle Navigation Menu"
        >
          <Menu size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div>
            <h2
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                margin: 0,
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}
            >
              Academic Timetable & Assessment System
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                color: 'var(--text-muted)'
              }}
              className="hide-on-mobile"
            >
              <span>V.O. Chidambaram College, Tuticorin</span>
              <span>•</span>
              <span>Dept. of Computer Science</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div style={{ flex: 1, maxWidth: '380px', margin: '0 1rem' }} className="hide-on-mobile">
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
          <Search
            size={15}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-light)',
              pointerEvents: 'none'
            }}
          />
          <input
            type="text"
            placeholder="Search subjects, faculty, schedule..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{
              paddingLeft: '32px',
              paddingRight: '10px',
              fontSize: '0.82rem',
              height: '34px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-app)',
              border: '1px solid var(--border-medium)'
            }}
          />
        </form>
      </div>

      {/* Right: Academic Term + Role Badge + Theme + Notifications */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {/* Academic Session Indicator */}
        <div
          className="hide-on-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.55rem',
            backgroundColor: 'var(--bg-app)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.74rem',
            color: 'var(--text-secondary)'
          }}
        >
          <Calendar size={13} style={{ color: 'var(--primary-600)' }} />
          <span>AY 2025–26 (Even Sem)</span>
        </div>

        {/* Role Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.65rem',
            backgroundColor:
              role === 'admin'
                ? 'var(--danger-50)'
                : role === 'hod'
                ? 'var(--primary-50)'
                : 'var(--bg-app)',
            color:
              role === 'admin'
                ? 'var(--danger-700)'
                : role === 'hod'
                ? 'var(--primary-700)'
                : 'var(--text-secondary)',
            border: `1px solid ${
              role === 'admin'
                ? 'var(--danger-100)'
                : role === 'hod'
                ? 'var(--primary-200)'
                : 'var(--border-medium)'
            }`,
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.72rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.02em'
          }}
        >
          {role === 'admin' ? (
            <ShieldCheck size={13} />
          ) : role === 'hod' ? (
            <Layers size={13} />
          ) : (
            <Briefcase size={13} />
          )}
          <span>{role}</span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--bg-app)',
            border: '1px solid var(--border-medium)',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            padding: '0.4rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} style={{ color: '#f59e0b' }} />}
        </button>

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            id="notification-bell-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              background: 'var(--bg-app)',
              border: '1px solid var(--border-medium)',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
            title="Academic Notices"
          >
            <Bell size={16} />
            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '3px',
                  right: '3px',
                  width: '7px',
                  height: '7px',
                  backgroundColor: 'var(--danger-600)',
                  borderRadius: '50%'
                }}
              />
            )}
          </button>
          <NotificationPanel
            isOpen={showNotifications}
            onClose={() => setShowNotifications(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

`

## File: src\components\common\LoadingAnimation.jsx

`jsx
import React from 'react';
import { CheckCircle2, Circle, Loader2, Sparkles } from 'lucide-react';

export const LoadingAnimation = ({
  steps = [],
  currentStep = 0,
  title = 'AI Engine Processing...',
  subtitle = 'Please wait while the neural model computes the optimal academic structure'
}) => {
  return (
    <div
      style={{
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Glow icon */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-50)',
          color: 'var(--primary-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          animation: 'pulseGlow 2s infinite'
        }}
      >
        <Sparkles size={32} />
      </div>

      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{title}</h3>
      <p style={{ margin: '0.4rem 0 1.75rem 0', fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '420px' }}>
        {subtitle}
      </p>

      {/* Steps Pipeline */}
      {steps.length > 0 && (
        <div
          style={{
            width: '100%',
            maxWidth: '460px',
            backgroundColor: 'var(--bg-surface-hover)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            const isPending = idx > currentStep;

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textAlign: 'left',
                  color: isCompleted
                    ? 'var(--success-600)'
                    : isActive
                    ? 'var(--primary-600)'
                    : 'var(--text-light)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  transition: 'all var(--transition-base)'
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  {isCompleted ? (
                    <CheckCircle2 size={18} style={{ color: 'var(--success-500)' }} />
                  ) : isActive ? (
                    <Loader2 size={18} className="animate-spin" style={{ color: 'var(--primary-600)' }} />
                  ) : (
                    <Circle size={18} style={{ color: 'var(--border-medium)' }} />
                  )}
                </div>
                <span style={{ color: isPending ? 'var(--text-muted)' : 'inherit' }}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

`

## File: src\components\common\Modal.jsx

`jsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = '580px',
  icon: Icon
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-medium)',
          width: '100%',
          maxWidth,
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          animation: 'modalPopIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {Icon && (
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon size={20} />
              </div>
            )}
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>{title}</h3>
              {subtitle && <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.15s'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            padding: '1.5rem',
            overflowY: 'auto',
            flex: 1
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              padding: '1rem 1.5rem',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-surface-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

`

## File: src\components\common\NotificationPanel.jsx

`jsx
import React, { useRef, useEffect } from 'react';
import { useAcademic } from '../../context/AcademicContext';
import { useNavigate } from 'react-router-dom';
import { Check, CheckCheck, Trash2, Bell, Sparkles, AlertCircle } from 'lucide-react';
import { Badge } from './Badge';

export const NotificationPanel = ({ isOpen, onClose }) => {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead, clearAllNotifications } = useAcademic();
  const panelRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !e.target.closest('#notification-bell-btn')) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div
      ref={panelRef}
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        right: '0',
        width: '380px',
        maxWidth: '92vw',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-dropdown)',
        border: '1px solid var(--border-light)',
        zIndex: 1000,
        animation: 'fadeSlideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '0.9rem 1.15rem',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-surface-hover)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Bell size={16} style={{ color: 'var(--primary-600)' }} />
          <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Notifications</h4>
          {unreadCount > 0 && (
            <Badge variant="primary" size="sm">{unreadCount} new</Badge>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {unreadCount > 0 && (
            <button
              onClick={markAllNotificationsAsRead}
              title="Mark all as read"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary-600)',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                padding: '0.2rem 0.4rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <CheckCheck size={14} /> Mark Read
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              title="Clear all"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '0.25rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex'
              }}
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
        {notifications.length === 0 ? (
          <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <Bell size={28} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
            <p style={{ margin: 0, fontSize: '0.85rem' }}>No notifications right now</p>
          </div>
        ) : (
          notifications.map((item) => {
            const isUnread = !item.read;
            return (
              <div
                key={item.id}
                onClick={() => {
                  markNotificationAsRead(item.id);
                  if (item.link) {
                    navigate(item.link);
                    onClose();
                  }
                }}
                style={{
                  padding: '0.85rem 1.15rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  backgroundColor: isUnread ? 'var(--primary-50)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color var(--transition-fast)',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isUnread ? 'var(--primary-500)' : 'transparent',
                    marginTop: '6px',
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: isUnread ? 600 : 500, color: 'var(--text-primary)' }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

`

## File: src\components\common\PageHeader.jsx

`jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PageHeader = ({
  title,
  subtitle,
  breadcrumbs = [],
  actions,
  badge
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.75rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: '0.4rem'
            }}
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={13} style={{ color: 'var(--text-light)' }} />}
                {crumb.to ? (
                  <Link to={crumb.to} style={{ color: 'var(--text-muted)' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <h1 style={{ margin: 0 }}>{title}</h1>
          {badge && <div>{badge}</div>}
        </div>

        {subtitle && (
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        )}
      </div>

      {actions && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          {actions}
        </div>
      )}
    </div>
  );
};

`

## File: src\components\common\Sidebar.jsx

`jsx
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  CalendarDays,
  FileQuestion,
  Database,
  FileText,
  CheckSquare,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  X
} from 'lucide-react';

export const Sidebar = ({ isOpen, isCollapsed, onToggleCollapse, onClose }) => {
  const { role, currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinkStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: isCollapsed ? '0.6rem 0' : '0.5rem 0.75rem',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    borderRadius: 'var(--radius-sm)',
    color: isActive ? 'var(--text-sidebar-bright)' : 'var(--text-sidebar)',
    backgroundColor: isActive ? 'var(--bg-sidebar-active)' : 'transparent',
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.84rem',
    textDecoration: 'none',
    position: 'relative',
    transition: 'background-color var(--transition-fast)'
  });

  const sectionHeaderStyle = {
    padding: '0.65rem 0.75rem 0.25rem',
    fontSize: '0.68rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#94a3b8',
    display: isCollapsed ? 'none' : 'block'
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            zIndex: 90,
            display: 'none'
          }}
        />
      )}

      <aside
        className={`sidebar-container ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}
        style={{
          width: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
          backgroundColor: 'var(--bg-sidebar)',
          color: 'var(--text-sidebar)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 95,
          borderRight: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Institutional Branding */}
        <div
          style={{
            height: 'var(--header-height)',
            padding: isCollapsed ? '0 0.5rem' : '0 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              cursor: isCollapsed ? 'pointer' : 'default',
              overflow: 'hidden'
            }}
            onClick={isCollapsed ? onToggleCollapse : undefined}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--primary-600)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <GraduationCap size={19} />
            </div>
            {!isCollapsed && (
              <div style={{ whiteSpace: 'nowrap' }}>
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-sidebar-bright)',
                    display: 'block',
                    lineHeight: 1.2
                  }}
                >
                  V.O.C. College
                </span>
                <span style={{ fontSize: '0.68rem', color: '#93c5fd' }}>
                  Computer Science Portal
                </span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="mobile-close-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-sidebar)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.25rem'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Sections */}
        <nav
          style={{
            flex: 1,
            padding: isCollapsed ? '0.6rem 0.35rem' : '0.6rem 0.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem'
          }}
        >
          {/* 1. Dashboard */}
          <NavLink
            to="/dashboard"
            title={isCollapsed ? 'Dashboard' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <LayoutDashboard size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>

          {/* 2. Academic Section */}
          <div style={sectionHeaderStyle}>Academic</div>

          <NavLink
            to="/timetable"
            title={isCollapsed ? 'Timetable' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <CalendarDays size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Timetable</span>}
          </NavLink>

          {/* 3. Question Management Section */}
          <div style={sectionHeaderStyle}>Question Management</div>

          <NavLink
            to="/questions/generate"
            title={isCollapsed ? 'Question Generator' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <FileQuestion size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Question Generator</span>}
          </NavLink>

          <NavLink
            to="/questions/bank"
            title={isCollapsed ? 'Question Bank' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <Database size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Question Bank</span>}
          </NavLink>

          <NavLink
            to="/question-paper/create"
            title={isCollapsed ? 'Question Paper' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <FileText size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Question Paper</span>}
          </NavLink>

          {/* 4. Approval Section */}
          <div style={sectionHeaderStyle}>Approval</div>

          <NavLink
            to="/question-paper/approval"
            title={isCollapsed ? 'Approvals' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <CheckSquare size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <span>Approvals</span>
                {role === 'hod' && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      padding: '0.1rem 0.35rem',
                      backgroundColor: 'rgba(59, 130, 246, 0.25)',
                      borderRadius: 'var(--radius-xs)',
                      color: '#93c5fd'
                    }}
                  >
                    HOD
                  </span>
                )}
              </div>
            )}
          </NavLink>

          {/* 5. Administration Section (Admin only) */}
          {role === 'admin' && (
            <>
              <div style={sectionHeaderStyle}>Administration</div>
              <NavLink
                to="/users"
                title={isCollapsed ? 'User Management' : undefined}
                style={({ isActive }) => navLinkStyle(isActive)}
                onClick={() => {
                  if (window.innerWidth <= 992) onClose();
                }}
              >
                <Users size={17} style={{ flexShrink: 0 }} />
                {!isCollapsed && <span>User Management</span>}
              </NavLink>
            </>
          )}

          {/* 6. Settings */}
          <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
            <NavLink
              to="/settings"
              title={isCollapsed ? 'Settings' : undefined}
              style={({ isActive }) => navLinkStyle(isActive)}
              onClick={() => {
                if (window.innerWidth <= 992) onClose();
              }}
            >
              <Settings size={17} style={{ flexShrink: 0 }} />
              {!isCollapsed && <span>Settings</span>}
            </NavLink>
          </div>
        </nav>

        {/* User Identity & Logout */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: isCollapsed ? '0.65rem 0.35rem' : '0.65rem 0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isCollapsed ? 'center' : 'space-between',
              gap: '0.4rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                overflow: 'hidden'
              }}
            >
              <img
                src={
                  currentUser?.avatar ||
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
                }
                alt={currentUser?.name || 'User'}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  flexShrink: 0
                }}
              />
              {!isCollapsed && (
                <div style={{ overflow: 'hidden' }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-sidebar-bright)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {currentUser?.name || 'Academic User'}
                  </div>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      color: '#94a3b8',
                      whiteSpace: 'nowrap',
                      textTransform: 'capitalize'
                    }}
                  >
                    {role === 'admin' ? 'Administrator' : role === 'hod' ? 'HOD • CS Dept' : 'Faculty • CS Dept'}
                  </div>
                </div>
              )}
            </div>

            {!isCollapsed && (
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#f87171',
                  padding: '0.35rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Sign Out"
              >
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

`

## File: src\components\common\StatCard.jsx

`jsx
import React from 'react';

export const StatCard = ({
  title,
  value,
  icon: Icon,
  subtitle,
  variant = 'default' // 'default' | 'primary' | 'success' | 'warning' | 'danger'
}) => {
  const variantStyles = {
    default: {
      border: 'var(--border-light)',
      iconBg: 'var(--bg-app)',
      iconColor: 'var(--text-secondary)'
    },
    primary: {
      border: 'var(--primary-200)',
      iconBg: 'var(--primary-50)',
      iconColor: 'var(--primary-700)'
    },
    success: {
      border: 'var(--success-100)',
      iconBg: 'var(--success-50)',
      iconColor: 'var(--success-700)'
    },
    warning: {
      border: 'var(--warning-100)',
      iconBg: 'var(--warning-50)',
      iconColor: 'var(--warning-700)'
    },
    danger: {
      border: 'var(--danger-100)',
      iconBg: 'var(--danger-50)',
      iconColor: 'var(--danger-700)'
    }
  };

  const style = variantStyles[variant] || variantStyles.default;

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: style.border,
        gap: '0.65rem',
        padding: '1.1rem 1.25rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          {title}
        </span>
        {Icon && (
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: style.iconBg,
              color: style.iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Icon size={16} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <div style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>
          {value}
        </div>
      </div>

      {subtitle && (
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default StatCard;

`

## File: src\components\common\Table.jsx

`jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { EmptyState } from './EmptyState';

export const Table = ({
  columns = [],
  data = [],
  selectable = false,
  selectedIds = [],
  onSelectRow,
  onSelectAll,
  idField = 'id',
  pageSize = 10,
  emptyTitle = 'No records found',
  emptyDescription = 'There are no items matching your criteria.',
  className = ''
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'

  const handleSort = (key) => {
    if (sortColumn === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  // Sorting
  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    if (valA === valB) return 0;
    if (valA == null) return 1;
    if (valB == null) return -1;

    if (typeof valA === 'string') {
      const cmp = valA.localeCompare(valB);
      return sortDirection === 'asc' ? cmp : -cmp;
    }
    return sortDirection === 'asc' ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const isAllSelected = paginatedData.length > 0 && paginatedData.every(item => selectedIds.includes(item[idField]));

  if (data.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      <div
        style={{
          overflowX: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-surface)'
        }}
        className={className}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '0.88rem'
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--bg-surface-hover)',
                borderBottom: '1px solid var(--border-light)',
                color: 'var(--text-secondary)'
              }}
            >
              {selectable && (
                <th style={{ width: '44px', padding: '0.85rem 1rem' }}>
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={(e) => onSelectAll && onSelectAll(e.target.checked, paginatedData)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key || col.header}
                  style={{
                    padding: '0.85rem 1rem',
                    fontWeight: 600,
                    cursor: col.sortable ? 'pointer' : 'default',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    width: col.width || 'auto'
                  }}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>{col.header}</span>
                    {col.sortable && (
                      <span style={{ color: 'var(--text-muted)' }}>
                        {sortColumn === col.key ? (
                          sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                        ) : (
                          <div style={{ width: 14, height: 14 }} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => {
              const isSelected = selectedIds.includes(row[idField]);
              return (
                <tr
                  key={row[idField] || idx}
                  className="animate-row"
                  style={{
                    borderBottom: '1px solid var(--border-light)',
                    backgroundColor: isSelected ? 'var(--primary-50)' : 'transparent',
                    transition: 'background-color var(--transition-fast)'
                  }}
                >
                  {selectable && (
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onSelectRow && onSelectRow(row[idField], row)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td
                      key={col.key || col.header}
                      style={{
                        padding: '0.85rem 1rem',
                        color: 'var(--text-primary)',
                        verticalAlign: 'middle'
                      }}
                    >
                      {col.render ? col.render(row[col.key], row, idx) : row[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 0.25rem',
            fontSize: '0.84rem',
            color: 'var(--text-secondary)'
          }}
        >
          <span>
            Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn btn-outline btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <span style={{ padding: '0 0.5rem', fontWeight: 600 }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

`

## File: src\components\common\ToastContainer.jsx

`jsx
import React from 'react';
import { useAcademic } from '../../context/AcademicContext';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useAcademic();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';
        const isDanger = toast.type === 'danger';

        const bg = isSuccess ? 'var(--bg-surface)' : isWarning ? 'var(--warning-50)' : isDanger ? 'var(--danger-50)' : 'var(--bg-surface)';
        const borderColor = isSuccess ? 'var(--success-500)' : isWarning ? 'var(--warning-500)' : isDanger ? 'var(--danger-500)' : 'var(--primary-500)';
        const iconColor = isSuccess ? 'var(--success-600)' : isWarning ? 'var(--warning-600)' : isDanger ? 'var(--danger-600)' : 'var(--primary-600)';

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: bg,
              borderRadius: 'var(--radius-md)',
              borderLeft: `4px solid ${borderColor}`,
              boxShadow: 'var(--shadow-lg)',
              borderTop: '1px solid var(--border-light)',
              borderRight: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              minWidth: '280px',
              maxWidth: '420px',
              animation: 'fadeSlideUp 0.25s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: iconColor, display: 'flex' }}>
                {isSuccess ? <CheckCircle size={18} /> : isWarning || isDanger ? <AlertCircle size={18} /> : <Info size={18} />}
              </span>
              <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                {toast.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '2px',
                display: 'flex'
              }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

`

## File: src\context\AcademicContext.jsx

`jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_TIMETABLE,
  INITIAL_CLASS_TIMETABLES,
  generateClassTimetable,
  CS_TIMETABLE_SLOTS,
  CS_MORNING_SLOTS,
  SATURDAY_MODES,
  CS_PROGRAMS,
  INITIAL_QUESTION_BANK,
  INITIAL_QUESTION_PAPERS,
  INITIAL_NOTIFICATIONS,
  MOCK_USERS,
  DEPARTMENTS,
  SUBJECTS
} from '../data/mockData';

const AcademicContext = createContext(null);

const safeGetStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    if (!saved || saved === 'undefined' || saved === 'null') return fallback;
    const parsed = JSON.parse(saved);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch (err) {
    console.warn(`[AcademicContext] Corrupt localStorage for ${key}, falling back to defaults:`, err);
    return fallback;
  }
};

export const AcademicProvider = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('apex_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('apex_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Programs & Classes State
  const [programs, setPrograms] = useState(() => {
    return safeGetStorage('apex_clean_programs_v5', CS_PROGRAMS);
  });

  // Subjects State (Full CRUD for Admin & HOD)
  const [subjects, setSubjects] = useState(() => {
    return safeGetStorage('apex_clean_subjects_v5', SUBJECTS);
  });

  // Multi-Class Timetables State (Every class in CS Dept)
  const [classTimetables, setClassTimetables] = useState(() => {
    return safeGetStorage('apex_clean_class_timetables_v5', INITIAL_CLASS_TIMETABLES);
  });

  // Backward compatible single Timetable State
  const [timetable, setTimetable] = useState(() => {
    return safeGetStorage('apex_clean_timetable_v5', INITIAL_TIMETABLE);
  });

  // Question Bank State
  const [questionBank, setQuestionBank] = useState(() => {
    return safeGetStorage('apex_clean_qbank_v5', INITIAL_QUESTION_BANK);
  });

  // Question Papers State
  const [questionPapers, setQuestionPapers] = useState(() => {
    return safeGetStorage('apex_clean_qpapers_v5', INITIAL_QUESTION_PAPERS);
  });


  // Notifications State
  const [notifications, setNotifications] = useState(() => {
    return safeGetStorage('apex_clean_notifs_v5', INITIAL_NOTIFICATIONS);
  });

  // Users State (Admin)
  const [users, setUsers] = useState(() => {
    return safeGetStorage('apex_clean_users_list_v5', MOCK_USERS);
  });

  // Toast System State
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Sync state to versioned localStorage
  useEffect(() => {
    localStorage.setItem('apex_clean_programs_v5', JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem('apex_clean_subjects_v5', JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem('apex_clean_class_timetables_v5', JSON.stringify(classTimetables));
  }, [classTimetables]);

  useEffect(() => {
    localStorage.setItem('apex_clean_timetable_v5', JSON.stringify(timetable));
  }, [timetable]);

  useEffect(() => {
    localStorage.setItem('apex_clean_qbank_v5', JSON.stringify(questionBank));
  }, [questionBank]);

  useEffect(() => {
    localStorage.setItem('apex_clean_qpapers_v5', JSON.stringify(questionPapers));
  }, [questionPapers]);


  useEffect(() => {
    localStorage.setItem('apex_clean_notifs_v5', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('apex_clean_users_list_v5', JSON.stringify(users));
  }, [users]);

  // ================= TIMETABLE HELPERS =================
  const getClassTimetableKey = (programId, year, section) => `${programId}_${year}_${section}`;

  const getClassTimetable = (programId, year, section) => {
    const key = getClassTimetableKey(programId, year, section);
    if (!classTimetables[key]) {
      const generated = generateClassTimetable(programId, year, section, true);
      setClassTimetables(prev => ({ ...prev, [key]: generated }));
      return generated;
    }
    return classTimetables[key];
  };

  const createClassTimetable = (programId, year, section) => {
    const key = getClassTimetableKey(programId, year, section);
    const newTbl = generateClassTimetable(programId, year, section, false);
    setClassTimetables(prev => ({ ...prev, [key]: newTbl }));
    showToast(`New blank timetable initialized for ${year} Year ${section}.`, 'info');
    return newTbl;
  };

  const generateAllDepartmentTimetables = () => {
    const next = {};
    programs.forEach(prog => {
      prog.years.forEach(yr => {
        prog.sections.forEach(sec => {
          const key = getClassTimetableKey(prog.id, yr.year, sec);
          next[key] = generateClassTimetable(prog.id, yr.year, sec, true);
        });
      });
    });
    setClassTimetables(next);
    showToast('Department master schedules successfully generated for all batches.', 'success');
  };

  const clearClassTimetable = (programId, year, section) => {
    const key = getClassTimetableKey(programId, year, section);
    const blank = generateClassTimetable(programId, year, section, false);
    setClassTimetables(prev => ({ ...prev, [key]: blank }));
    showToast(`Timetable cleared for ${year} Year ${section}.`, 'info');
  };

  const updateClassTimetableCell = (programId, year, section, dayKey, slotIndex, updatedData) => {
    const key = getClassTimetableKey(programId, year, section);
    setClassTimetables(prev => {
      const current = prev[key] || generateClassTimetable(programId, year, section, true);
      const daySlots = [...(current.grid[dayKey] || [])];
      daySlots[slotIndex] = { ...daySlots[slotIndex], ...updatedData };
      return {
        ...prev,
        [key]: {
          ...current,
          grid: {
            ...current.grid,
            [dayKey]: daySlots
          }
        }
      };
    });
  };

  const swapClassTimetableCells = (programId, year, section, source, target) => {
    const key = getClassTimetableKey(programId, year, section);
    setClassTimetables(prev => {
      const current = prev[key] || generateClassTimetable(programId, year, section, true);
      const srcList = [...(current.grid[source.dayKey] || [])];
      const tgtList = source.dayKey === target.dayKey ? srcList : [...(current.grid[target.dayKey] || [])];

      const temp = { ...srcList[source.slotIndex] };
      srcList[source.slotIndex] = { ...tgtList[target.slotIndex] };
      tgtList[target.slotIndex] = temp;

      return {
        ...prev,
        [key]: {
          ...current,
          grid: {
            ...current.grid,
            [source.dayKey]: srcList,
            [target.dayKey]: tgtList
          }
        }
      };
    });
    showToast('Timetable period swapped successfully.', 'info');
  };

  const setSaturdayMode = (programId, year, section, modeKey) => {
    const key = getClassTimetableKey(programId, year, section);
    setClassTimetables(prev => {
      const current = prev[key] || generateClassTimetable(programId, year, section, true);
      return {
        ...prev,
        [key]: {
          ...current,
          saturdayMode: modeKey
        }
      };
    });
    showToast(`Saturday schedule mode updated to ${SATURDAY_MODES[modeKey]?.label || modeKey}.`, 'info');
  };

  // Program & Section Operations
  const addSection = (programId, newSectionName) => {
    setPrograms(prev =>
      prev.map(p => {
        if (p.id === programId) {
          if (p.sections.includes(newSectionName)) return p;
          return { ...p, sections: [...p.sections, newSectionName] };
        }
        return p;
      })
    );
    showToast(`Section "${newSectionName}" added.`, 'success');
  };

  const deleteSection = (programId, sectionName) => {
    setPrograms(prev =>
      prev.map(p => {
        if (p.id === programId) {
          return { ...p, sections: p.sections.filter(s => s !== sectionName) };
        }
        return p;
      })
    );
    showToast(`Section "${sectionName}" removed.`, 'info');
  };

  // Subjects CRUD
  const addSubject = (newSubject) => {
    const code = newSubject.code?.trim().toUpperCase();
    if (!code) return;
    setSubjects(prev => {
      if (prev.some(s => s.code === code)) {
        showToast(`Subject with code ${code} already exists.`, 'warning');
        return prev;
      }
      return [...prev, { ...newSubject, code }];
    });
    showToast(`Subject ${newSubject.name} (${code}) added.`, 'success');
  };

  const updateSubject = (code, updatedData) => {
    setSubjects(prev => prev.map(s => (s.code === code ? { ...s, ...updatedData } : s)));
    showToast(`Subject ${code} updated.`, 'success');
  };

  const deleteSubject = (code) => {
    setSubjects(prev => prev.filter(s => s.code !== code));
    showToast(`Subject ${code} removed.`, 'info');
  };

  // ================= QUESTION BANK CRUD =================
  const addQuestion = (newQ) => {
    const id = `QB-${Date.now().toString(36).toUpperCase()}`;
    const questionItem = {
      id,
      createdDate: new Date().toISOString().split('T')[0],
      ...newQ
    };
    setQuestionBank(prev => [questionItem, ...prev]);
    showToast('Question added to Question Bank.', 'success');
    return questionItem;
  };

  const updateQuestion = (id, updated) => {
    setQuestionBank(prev => prev.map(q => (q.id === id ? { ...q, ...updated } : q)));
    showToast('Question details updated.', 'success');
  };

  const deleteQuestion = (id) => {
    setQuestionBank(prev => prev.filter(q => q.id !== id));
    showToast('Question deleted from Question Bank.', 'info');
  };

  // ================= QUESTION PAPERS CRUD =================
  const saveQuestionPaper = (paperData) => {
    const id = paperData.id || `QP-${Date.now().toString(36).toUpperCase()}`;
    const newPaper = {
      ...paperData,
      id,
      createdDate: paperData.createdDate || new Date().toISOString().split('T')[0],
      status: paperData.status || 'Draft'
    };

    setQuestionPapers(prev => {
      const idx = prev.findIndex(p => p.id === id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = newPaper;
        return next;
      }
      return [newPaper, ...prev];
    });

    showToast('Question paper blueprint saved.', 'success');
    return newPaper;
  };

  const submitPaperToHOD = (paperId) => {
    setQuestionPapers(prev =>
      prev.map(p => (p.id === paperId ? { ...p, status: 'Submitted', hodRemarks: 'Awaiting HOD verification' } : p))
    );
    showToast('Question paper submitted to HOD for approval.', 'success');
  };

  const approveQuestionPaper = (paperId, remarks = 'Approved by HOD.') => {
    setQuestionPapers(prev =>
      prev.map(p => (p.id === paperId ? { ...p, status: 'Approved', hodRemarks: remarks } : p))
    );
    showToast('Question paper approved for examination.', 'success');
  };

  const requestChangesQuestionPaper = (paperId, remarks) => {
    setQuestionPapers(prev =>
      prev.map(p =>
        p.id === paperId
          ? { ...p, status: 'Changes Required', hodRemarks: remarks || 'Revisions requested by HOD.' }
          : p
      )
    );
    showToast('Question paper returned for revisions.', 'warning');
  };


  // ================= USERS CRUD (Admin) =================
  const addUser = (userData) => {
    const id = `usr_${userData.role}_${Date.now().toString(36)}`;
    const newUser = {
      id,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      ...userData
    };
    setUsers(prev => [...prev, newUser]);
    showToast(`User ${userData.name} created successfully.`, 'success');
    return newUser;
  };

  const updateUser = (id, updatedData) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, ...updatedData } : u)));
    showToast('User profile updated.', 'success');
  };

  const toggleUserStatus = (id) => {
    setUsers(prev =>
      prev.map(u => {
        if (u.id === id) {
          const nextStatus = u.status === 'Active' ? 'Inactive' : 'Active';
          showToast(`User ${u.name} set to ${nextStatus}.`, 'info');
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
  };

  // ================= NOTIFICATIONS OPERATIONS =================
  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    showToast('All notifications marked as read.', 'info');
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    showToast('All notifications cleared.', 'info');
  };

  return (
    <AcademicContext.Provider
      value={{
        theme,
        toggleTheme,
        programs,
        addSection,
        deleteSection,
        subjects,
        addSubject,
        updateSubject,
        deleteSubject,
        classTimetables,
        getClassTimetable,
        createClassTimetable,
        generateAllDepartmentTimetables,
        clearClassTimetable,
        updateClassTimetableCell,
        swapClassTimetableCells,
        setSaturdayMode,
        SATURDAY_MODES,
        CS_TIMETABLE_SLOTS,
        CS_MORNING_SLOTS,
        questionBank,
        addQuestion,
        updateQuestion,
        deleteQuestion,
        questionPapers,
        saveQuestionPaper,
        submitPaperToHOD,
        approveQuestionPaper,
        requestChangesQuestionPaper,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        clearAllNotifications,
        users,
        addUser,
        updateUser,
        toggleUserStatus,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AcademicContext.Provider>
  );
};

export const useAcademic = () => {
  const context = useContext(AcademicContext);
  if (!context) {
    throw new Error('useAcademic must be used within an AcademicProvider');
  }
  return context;
};

`

## File: src\context\AuthContext.jsx

`jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USERS } from '../data/mockData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('apex_auth') === 'true';
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const isAuth = localStorage.getItem('apex_auth') === 'true';
    if (isAuth) {
      const saved = localStorage.getItem('apex_user');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* ignore */ }
      }
      return MOCK_USERS[0];
    }
    return null;
  });

  useEffect(() => {
    if (currentUser && isAuthenticated) {
      localStorage.setItem('apex_user', JSON.stringify(currentUser));
      localStorage.setItem('apex_auth', 'true');
    }
  }, [currentUser, isAuthenticated]);

  const login = (email, password, selectedRole = 'staff') => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const role = (selectedRole || 'staff').toLowerCase();

    // Check if matching mock user exists by email or role
    let matchedUser = MOCK_USERS.find(
      u => u.email.toLowerCase() === cleanEmail && u.role.toLowerCase() === role
    );

    if (!matchedUser) {
      matchedUser = MOCK_USERS.find(u => u.role.toLowerCase() === role);
    }

    // If custom email entered, create a personalized profile for this session
    if (cleanEmail && (!matchedUser || matchedUser.email.toLowerCase() !== cleanEmail)) {
      const emailUsername = cleanEmail.split('@')[0] || 'User';
      const formattedName = emailUsername
        .split(/[._-]/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

      const defaultAvatar = role === 'admin'
        ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
        : role === 'hod'
        ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';

      matchedUser = {
        id: `usr_${role}_${Date.now()}`,
        name: role === 'hod' ? `Dr. ${formattedName}` : role === 'staff' ? `Prof. ${formattedName}` : formattedName,
        email: cleanEmail,
        role: role,
        department: role === 'admin' ? 'Central Academic Affairs' : 'Department of Computer Science',
        deptCode: role === 'admin' ? 'ADMIN' : 'CS',
        designation: role === 'admin' ? 'Institutional Administrator' : role === 'hod' ? 'Professor & Head of Department' : 'Assistant Professor',
        empId: role === 'admin' ? 'ADM-SYS-101' : role === 'hod' ? 'HOD-CS-001' : 'FAC-CS-099',
        avatar: defaultAvatar,
        assignedSubjects: role === 'staff' ? ['CS301 - Database Management Systems', 'CS304 - Java Programming'] : role === 'hod' ? ['CS401 - Artificial Intelligence & Expert Systems', 'MCS101 - Advanced Data Structures & Algorithms'] : [],
        status: 'Active',
        phone: '+1 (555) 789-0123'
      };
    }

    setCurrentUser(matchedUser);
    setIsAuthenticated(true);
    localStorage.setItem('apex_auth', 'true');
    localStorage.setItem('apex_user', JSON.stringify(matchedUser));
    return matchedUser;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('apex_auth');
    localStorage.removeItem('apex_user');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated,
      role: currentUser?.role || 'staff',
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

`

## File: src\data\mockData.js

`js
// Clean Institutional Academic Dataset
// V.O. Chidambaram College, Tuticorin (MS University)
// Department of Computer Science

export const MOCK_USERS = [
  {
    id: 'usr_admin_1',
    name: 'Ananth',
    email: 'ananth19012007@gmail.com',
    role: 'admin',
    department: 'Central Academic Affairs',
    deptCode: 'ADMIN',
    designation: 'Chief Academic Registrar & Administrator',
    empId: 'ADM-SYS-001',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: [],
    status: 'Active',
    phone: '+91 94431 00001'
  },
  {
    id: 'usr_hod_1',
    name: 'Dr. M. Gomathinayagam',
    email: 'gomathinayagam@gmail.com',
    role: 'hod',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Professor & Head of Department',
    empId: 'HOD-CS-001',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS401 - Artificial Intelligence', 'MCS101 - Advanced Data Structures'],
    status: 'Active',
    phone: '+91 94432 12345'
  },
  {
    id: 'usr_staff_1',
    name: 'Prof. Alan Davis',
    email: 'alan.davis@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Associate Professor',
    empId: 'FAC-CS-002',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS301 - Database Management Systems', 'CS101 - Programming in C'],
    status: 'Active',
    phone: '+91 94432 12346'
  },
  {
    id: 'usr_staff_2',
    name: 'Dr. K. Ramesh',
    email: 'ramesh.k@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Associate Professor',
    empId: 'FAC-CS-003',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS302 - Operating Systems', 'MCS202 - Distributed Databases'],
    status: 'Active',
    phone: '+91 94432 12347'
  },
  {
    id: 'usr_staff_3',
    name: 'Prof. Priya Sharma',
    email: 'priya.sharma@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-004',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS304 - Java Programming', 'CS306 - Web Technologies'],
    status: 'Active',
    phone: '+91 94432 12348'
  },
  {
    id: 'usr_staff_4',
    name: 'Prof. R. Senthil',
    email: 'senthil.r@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-005',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS303 - Python for Data Science', 'MCS301 - Deep Learning & NLP'],
    status: 'Active',
    phone: '+91 94432 12349'
  },
  {
    id: 'usr_staff_5',
    name: 'Dr. M. Meenakshi',
    email: 'meenakshi.m@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-006',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS305 - Computer Networks', 'MCS302 - Cryptography & Security'],
    status: 'Active',
    phone: '+91 94432 12350'
  },
  {
    id: 'usr_staff_6',
    name: 'Prof. David Wilson',
    email: 'david.wilson@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-007',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS102 - Digital Principles', 'CS402 - Cloud Computing & Security'],
    status: 'Active',
    phone: '+91 94432 12351'
  }
];

export const CS_PROGRAMS = [
  {
    id: 'UG_BSCCS',
    code: 'BSC_CS',
    name: 'B.Sc. Computer Science',
    degree: 'B.Sc.',
    level: 'Undergraduate (UG)',
    durationYears: 3,
    totalSemesters: 6,
    sections: ['Section A', 'Section B'],
    studentCount: 180,
    years: [
      { year: 'I', label: 'Year I', semesters: ['Semester I', 'Semester II'] },
      { year: 'II', label: 'Year II', semesters: ['Semester III', 'Semester IV'] },
      { year: 'III', label: 'Year III', semesters: ['Semester V', 'Semester VI'] }
    ]
  },
  {
    id: 'PG_MSCCS',
    code: 'MSC_CS',
    name: 'M.Sc. Computer Science',
    degree: 'M.Sc.',
    level: 'Postgraduate (PG)',
    durationYears: 2,
    totalSemesters: 4,
    sections: ['Section A', 'Section B'],
    studentCount: 60,
    years: [
      { year: 'I', label: 'Year I', semesters: ['Semester I', 'Semester II'] },
      { year: 'II', label: 'Year II', semesters: ['Semester III', 'Semester IV'] }
    ]
  }
];

export const DEPARTMENTS = [
  { id: 'CS_UG', name: 'B.Sc. Computer Science', deptCode: 'CS', facultyCount: 8, studentCount: 180, hod: 'Dr. M. Gomathinayagam' },
  { id: 'CS_PG', name: 'M.Sc. Computer Science', deptCode: 'CS', facultyCount: 6, studentCount: 60, hod: 'Dr. M. Gomathinayagam' }
];

export const SUBJECTS = [
  // --- B.Sc. Computer Science (UG Curriculum) ---
  { code: 'CS101', name: 'Programming in C & Data Structures', credits: 4, semester: 'Semester I', year: 'I', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Alan Davis', type: 'Theory + Lab' },
  { code: 'CS102', name: 'Digital Principles & Architecture', credits: 4, semester: 'Semester II', year: 'I', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. David Wilson', type: 'Theory' },
  { code: 'CS201', name: 'Object Oriented Programming with C++', credits: 4, semester: 'Semester III', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory + Lab' },
  { code: 'CS301', name: 'Database Management Systems', credits: 4, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Alan Davis', type: 'Theory + Lab' },
  { code: 'CS302', name: 'Operating Systems', credits: 4, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. K. Ramesh', type: 'Theory' },
  { code: 'CS303', name: 'Python for Data Science', credits: 3, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. R. Senthil', type: 'Theory + Lab' },
  { code: 'CS304', name: 'Java Programming', credits: 4, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Priya Sharma', type: 'Theory + Lab' },
  { code: 'CS305', name: 'Computer Networks', credits: 3, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. M. Meenakshi', type: 'Theory' },
  { code: 'CS306', name: 'Web Technologies', credits: 3, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Priya Sharma', type: 'Theory + Lab' },
  { code: 'CS401', name: 'Artificial Intelligence & Expert Systems', credits: 4, semester: 'Semester VI', year: 'III', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory' },
  { code: 'CS402', name: 'Cloud Computing & Security', credits: 4, semester: 'Semester VI', year: 'III', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. David Wilson', type: 'Theory' },

  // --- M.Sc. Computer Science (PG Curriculum) ---
  { code: 'MCS101', name: 'Advanced Data Structures & Algorithms', credits: 4, semester: 'Semester I', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory' },
  { code: 'MCS102', name: 'Advanced Java Enterprise Systems', credits: 4, semester: 'Semester I', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Prof. Priya Sharma', type: 'Theory + Lab' },
  { code: 'MCS201', name: 'Machine Learning & Neural Computing', credits: 4, semester: 'Semester II', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory + Lab' },
  { code: 'MCS202', name: 'Distributed Databases & Big Data', credits: 4, semester: 'Semester II', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. K. Ramesh', type: 'Theory' },
  { code: 'MCS301', name: 'Deep Learning & NLP', credits: 4, semester: 'Semester III', year: 'II', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Prof. R. Senthil', type: 'Theory + Lab' },
  { code: 'MCS302', name: 'Cryptography & Cyber Security', credits: 4, semester: 'Semester III', year: 'II', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. M. Meenakshi', type: 'Theory' },
  { code: 'MCS401', name: 'Cloud Native Microservices', credits: 4, semester: 'Semester IV', year: 'II', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Prof. David Wilson', type: 'Theory' }
];

// CS Department Daily Timetable Period Slots (1:45 PM to 6:20 PM - Afternoon Shift)
export const CS_TIMETABLE_SLOTS = [
  { time: '01:45 PM - 02:40 PM', period: 1, label: 'Period 1' },
  { time: '02:40 PM - 03:35 PM', period: 2, label: 'Period 2' },
  { time: '03:35 PM - 04:25 PM', period: 3, label: 'Period 3' },
  { time: '04:25 PM - 04:40 PM', period: 'Interval', isBreak: true, label: 'Interval (15m)' },
  { time: '04:40 PM - 05:30 PM', period: 4, label: 'Period 4' },
  { time: '05:30 PM - 06:20 PM', period: 5, label: 'Period 5' }
];

// Morning Session Slots (08:45 AM to 01:20 PM)
export const CS_MORNING_SLOTS = [
  { time: '08:45 AM - 09:40 AM', period: 1, label: 'Period 1' },
  { time: '09:40 AM - 10:35 AM', period: 2, label: 'Period 2' },
  { time: '10:35 AM - 11:25 AM', period: 3, label: 'Period 3' },
  { time: '11:25 AM - 11:40 AM', period: 'Interval', isBreak: true, label: 'Interval (15m)' },
  { time: '11:40 AM - 12:30 PM', period: 4, label: 'Period 4' },
  { time: '12:30 PM - 01:20 PM', period: 5, label: 'Period 5' }
];

export const SATURDAY_MODES = {
  AFTERNOON: {
    key: 'AFTERNOON',
    label: 'Afternoon Session',
    timing: '01:45 PM - 06:20 PM',
    badgeText: 'Regular Class',
    badgeVariant: 'success',
    countsForAttendance: true,
    description: 'Regular afternoon schedule included in college attendance register.'
  },
  MORNING: {
    key: 'MORNING',
    label: 'Morning Session',
    timing: '08:45 AM - 01:20 PM',
    badgeText: 'Special / Remedial',
    badgeVariant: 'warning',
    countsForAttendance: false,
    description: 'Morning session for special labs, seminars & extra classes.'
  },
  OFF: {
    key: 'OFF',
    label: 'Weekend Holiday',
    timing: 'No Classes',
    badgeText: 'Holiday',
    badgeVariant: 'neutral',
    countsForAttendance: false,
    description: 'Non-working weekend holiday.'
  }
};

export const generateClassTimetable = (programId = 'UG_BSCCS', year = 'II', section = 'Section A', populateDefault = true) => {
  const isUG = programId === 'UG_BSCCS';
  const progName = isUG ? 'B.Sc. Computer Science' : 'M.Sc. Computer Science';
  const semester = isUG
    ? (year === 'I' ? 'Semester II' : year === 'II' ? 'Semester IV' : 'Semester VI')
    : (year === 'I' ? 'Semester II' : 'Semester IV');

  const slots = [...CS_TIMETABLE_SLOTS];

  const createEmptyDay = (dayKey) => [
    { id: `${programId}_${year}_${section}_${dayKey}1`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}2`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}3`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}b`, isBreak: true, label: 'Interval (15m)' },
    { id: `${programId}_${year}_${section}_${dayKey}4`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}5`, isFree: true, label: 'Free Period' }
  ];

  if (!populateDefault) {
    return {
      department: 'Department of Computer Science',
      deptCode: 'CS',
      program: progName,
      programId,
      year,
      section,
      semester,
      saturdayMode: 'AFTERNOON',
      slots,
      grid: {
        MON: createEmptyDay('m'),
        TUE: createEmptyDay('t'),
        WED: createEmptyDay('w'),
        THU: createEmptyDay('th'),
        FRI: createEmptyDay('f'),
        SAT: createEmptyDay('sat')
      }
    };
  }

  const relevantSubjects = SUBJECTS.filter(s => s.program === programId && (s.year === year || !s.year));
  const fallbackSubjects = SUBJECTS.filter(s => s.program === programId);
  const pool = (relevantSubjects.length > 0 ? relevantSubjects : fallbackSubjects).map((s) => ({
    code: s.code,
    subject: s.name,
    faculty: s.faculty || 'Prof. Alan Davis',
    room: isUG ? `LH-${year === 'I' ? '101' : year === 'II' ? '201' : '301'}` : `PG-Lab-${year === 'I' ? '1' : '2'}`,
    isLab: s.type?.includes('Lab') || false
  }));

  const getSub = (idx) => pool[idx % pool.length];
  const offset = section.includes('B') ? 2 : 0;

  const grid = {
    'MON': [
      { id: `${programId}_${year}_${section}_m1`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_m2`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_m3`, ...getSub(2 + offset) },
      { id: `${programId}_${year}_${section}_mb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_m4`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_m5`, ...getSub(0 + offset) }
    ],
    'TUE': [
      { id: `${programId}_${year}_${section}_t1`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_t2`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_t3`, ...getSub(2 + offset) },
      { id: `${programId}_${year}_${section}_tb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_t4`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_t5`, ...getSub(4 + offset) }
    ],
    'WED': [
      { id: `${programId}_${year}_${section}_w1`, ...getSub(pool.length - 1), isLab: true },
      { id: `${programId}_${year}_${section}_w2`, ...getSub(pool.length - 1), isLab: true },
      { id: `${programId}_${year}_${section}_w3`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_wb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_w4`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_w5`, ...getSub(2 + offset) }
    ],
    'THU': [
      { id: `${programId}_${year}_${section}_th1`, ...getSub(2 + offset) },
      { id: `${programId}_${year}_${section}_th2`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_th3`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_thb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_th4`, ...getSub(1 + offset), isLab: true },
      { id: `${programId}_${year}_${section}_th5`, ...getSub(1 + offset), isLab: true }
    ],
    'FRI': [
      { id: `${programId}_${year}_${section}_f1`, ...getSub(4 + offset) },
      { id: `${programId}_${year}_${section}_f2`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_f3`, ...getSub(2 + offset), isLab: true },
      { id: `${programId}_${year}_${section}_fb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_f4`, ...getSub(2 + offset), isLab: true },
      { id: `${programId}_${year}_${section}_f5`, ...getSub(0 + offset) }
    ],
    'SAT': [
      { id: `${programId}_${year}_${section}_sat1`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_sat2`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_sat3`, isFree: true, label: 'Mentoring Period' },
      { id: `${programId}_${year}_${section}_satb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_sat4`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_sat5`, isFree: true, label: 'Technical Association' }
    ]
  };

  return {
    department: 'Department of Computer Science',
    deptCode: 'CS',
    program: progName,
    programId,
    year,
    section,
    semester,
    saturdayMode: 'AFTERNOON',
    slots,
    grid
  };
};

export const INITIAL_CLASS_TIMETABLES = {
  'UG_BSCCS_I_Section A': generateClassTimetable('UG_BSCCS', 'I', 'Section A', true),
  'UG_BSCCS_I_Section B': generateClassTimetable('UG_BSCCS', 'I', 'Section B', true),
  'UG_BSCCS_II_Section A': generateClassTimetable('UG_BSCCS', 'II', 'Section A', true),
  'UG_BSCCS_II_Section B': generateClassTimetable('UG_BSCCS', 'II', 'Section B', true),
  'UG_BSCCS_III_Section A': generateClassTimetable('UG_BSCCS', 'III', 'Section A', true),
  'UG_BSCCS_III_Section B': generateClassTimetable('UG_BSCCS', 'III', 'Section B', true),
  'PG_MSCCS_I_Section A': generateClassTimetable('PG_MSCCS', 'I', 'Section A', true),
  'PG_MSCCS_I_Section B': generateClassTimetable('PG_MSCCS', 'I', 'Section B', true),
  'PG_MSCCS_II_Section A': generateClassTimetable('PG_MSCCS', 'II', 'Section A', true)
};

export const INITIAL_TIMETABLE = INITIAL_CLASS_TIMETABLES['UG_BSCCS_II_Section A'];

// Realistic Question Bank Dataset
export const INITIAL_QUESTION_BANK = [
  {
    id: 'QB-DBMS-001',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    unit: 'Unit 1',
    topic: 'Relational Model & Keys',
    question: 'Define Primary Key, Candidate Key, and Foreign Key with a real-world banking database example.',
    marks: 5,
    difficulty: 'Medium',
    bloomLevel: 'Understand',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-10'
  },
  {
    id: 'QB-DBMS-002',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    unit: 'Unit 1',
    topic: 'Database Architecture',
    question: 'Explain the Three-Schema Architecture with a neat diagram. Differentiate Physical and Logical Data Independence.',
    marks: 8,
    difficulty: 'Hard',
    bloomLevel: 'Analyze',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-12'
  },
  {
    id: 'QB-DBMS-003',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    unit: 'Unit 2',
    topic: 'Normalization',
    question: 'What is BCNF? How does it differ from 3NF? Demonstrate with an anomalous relation and normalize it.',
    marks: 8,
    difficulty: 'Hard',
    bloomLevel: 'Evaluate',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-15'
  },
  {
    id: 'QB-OS-001',
    subject: 'Operating Systems',
    subjectCode: 'CS302',
    unit: 'Unit 1',
    topic: 'Process Management',
    question: 'Explain the 5-state process lifecycle diagram. What is the role of the PCB (Process Control Block)?',
    marks: 5,
    difficulty: 'Medium',
    bloomLevel: 'Understand',
    author: 'Dr. K. Ramesh',
    createdDate: '2026-03-11'
  },
  {
    id: 'QB-OS-002',
    subject: 'Operating Systems',
    subjectCode: 'CS302',
    unit: 'Unit 2',
    topic: 'CPU Scheduling',
    question: 'Given 4 processes with arrival times [0, 1, 2, 3] and burst times [6, 8, 7, 3], calculate average waiting time using Round Robin (Quantum = 2).',
    marks: 8,
    difficulty: 'Hard',
    bloomLevel: 'Apply',
    author: 'Dr. K. Ramesh',
    createdDate: '2026-03-14'
  },
  {
    id: 'QB-JAVA-001',
    subject: 'Java Programming',
    subjectCode: 'CS304',
    unit: 'Unit 1',
    topic: 'OOP Concepts',
    question: 'Differentiate Abstract Class and Interface in Java with code snippets demonstrating multiple inheritance.',
    marks: 5,
    difficulty: 'Medium',
    bloomLevel: 'Apply',
    author: 'Prof. Priya Sharma',
    createdDate: '2026-03-08'
  },
  {
    id: 'QB-NET-001',
    subject: 'Computer Networks',
    subjectCode: 'CS305',
    unit: 'Unit 1',
    topic: 'OSI Reference Model',
    question: 'Explain the functions and protocols of each layer in the OSI 7-Layer Architecture with an illustration.',
    marks: 8,
    difficulty: 'Medium',
    bloomLevel: 'Understand',
    author: 'Dr. M. Meenakshi',
    createdDate: '2026-03-09'
  },
  {
    id: 'QB-PY-001',
    subject: 'Python for Data Science',
    subjectCode: 'CS303',
    unit: 'Unit 1',
    topic: 'NumPy & Pandas',
    question: 'Explain how Pandas DataFrame handles missing values using dropna() and fillna(). Write syntax examples.',
    marks: 5,
    difficulty: 'Easy',
    bloomLevel: 'Apply',
    author: 'Prof. R. Senthil',
    createdDate: '2026-03-16'
  }
];

// Realistic Question Papers Dataset
export const INITIAL_QUESTION_PAPERS = [
  {
    id: 'QP-2026-CIA1-DBMS',
    title: 'Continuous Internal Assessment - I (CIA-1)',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    program: 'UG_BSCCS',
    programName: 'B.Sc. Computer Science',
    year: 'II',
    semester: 'Semester IV',
    examType: 'Continuous Internal Assessment (CIA)',
    date: '2026-04-05',
    duration: '60 Minutes',
    maxMarks: 20,
    status: 'Approved',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-18',
    hodRemarks: 'Approved for CIA-1 examination. Quality and taxonomy balance are satisfactory.',
    questions: [
      { id: 'q1', section: 'Part A', part: 'A', marks: 1, text: 'Define Primary Key and its primary constraint.', bloom: 'Remember' },
      { id: 'q2', section: 'Part A', part: 'A', marks: 1, text: 'What is cardinality in relational schema?', bloom: 'Remember' },
      { id: 'q3', section: 'Part B', part: 'B', marks: 5, text: 'Explain the 3-Schema database architecture with a neat diagram.', bloom: 'Understand' },
      { id: 'q4', section: 'Part B', part: 'B', marks: 5, text: 'Differentiate between DDL, DML, and DCL commands with SQL examples.', bloom: 'Apply' },
      { id: 'q5', section: 'Part C', part: 'C', marks: 8, text: 'What is Normalization? Explain 1NF, 2NF, and 3NF with step-by-step table anomalies.', bloom: 'Analyze' }
    ]
  },
  {
    id: 'QP-2026-CIA1-OS',
    title: 'Continuous Internal Assessment - I (CIA-1)',
    subject: 'Operating Systems',
    subjectCode: 'CS302',
    program: 'UG_BSCCS',
    programName: 'B.Sc. Computer Science',
    year: 'II',
    semester: 'Semester IV',
    examType: 'Continuous Internal Assessment (CIA)',
    date: '2026-04-07',
    duration: '60 Minutes',
    maxMarks: 20,
    status: 'Submitted',
    author: 'Dr. K. Ramesh',
    createdDate: '2026-03-20',
    hodRemarks: 'Awaiting HOD verification.',
    questions: [
      { id: 'q1', section: 'Part A', part: 'A', marks: 1, text: 'What is a system call? Give two examples.', bloom: 'Remember' },
      { id: 'q2', section: 'Part A', part: 'A', marks: 1, text: 'Define process starvation in priority scheduling.', bloom: 'Remember' },
      { id: 'q3', section: 'Part B', part: 'B', marks: 5, text: 'Explain the 5-state process lifecycle with diagram.', bloom: 'Understand' },
      { id: 'q4', section: 'Part B', part: 'B', marks: 5, text: 'Differentiate Preemptive and Non-Preemptive scheduling.', bloom: 'Understand' },
      { id: 'q5', section: 'Part C', part: 'C', marks: 8, text: 'Calculate average turnaround and waiting time for FCFS vs SJF algorithms on 4 given processes.', bloom: 'Apply' }
    ]
  },
  {
    id: 'QP-2026-MID-JAVA',
    title: 'Mid-Term Assessment Examination',
    subject: 'Java Programming',
    subjectCode: 'CS304',
    program: 'UG_BSCCS',
    programName: 'B.Sc. Computer Science',
    year: 'II',
    semester: 'Semester IV',
    examType: 'Mid-Term Examination',
    date: '2026-04-12',
    duration: '90 Minutes',
    maxMarks: 50,
    status: 'Draft',
    author: 'Prof. Priya Sharma',
    createdDate: '2026-03-22',
    hodRemarks: '',
    questions: [
      { id: 'q1', section: 'Part A', part: 'A', marks: 2, text: 'Explain the JVM, JRE, and JDK architecture.', bloom: 'Understand' },
      { id: 'q2', section: 'Part A', part: 'A', marks: 2, text: 'Why is multiple inheritance not supported in Java classes?', bloom: 'Understand' },
      { id: 'q3', section: 'Part B', part: 'B', marks: 8, text: 'Explain Exception Handling mechanism using try, catch, finally, throw, and throws keywords.', bloom: 'Apply' }
    ]
  }
];



export const INITIAL_NOTIFICATIONS = [
  { id: 'n1', title: 'CIA-1 Question Papers Due', message: 'All faculty must submit CIA-1 question papers for HOD approval by April 2nd.', timestamp: '2 hours ago', read: false, type: 'academic' },
  { id: 'n2', title: 'Department Staff Meeting', message: 'Monthly CS Department academic review meeting scheduled for Friday 3:30 PM.', timestamp: '1 day ago', read: true, type: 'info' }
];

`

## File: src\index.css

`css
@import './styles/global.css';

/* Additional Root Layout Enhancements */
#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

`

## File: src\main.jsx

`jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

`

## File: src\pages\AdminDashboard.jsx

`jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import { Link } from 'react-router-dom';
import {
  Users,
  ShieldCheck,
  CalendarDays,
  Settings,
  BookOpen,
  Plus,
  Building,
  GraduationCap
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

export const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const { users = [], programs = [], subjects = [] } = useAcademic();

  const facultyCount = users.filter(u => u.role === 'staff').length;
  const hodCount = users.filter(u => u.role === 'hod').length;
  const adminCount = users.filter(u => u.role === 'admin').length;

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Institutional Admin Banner */}
      <div
        className="card"
        style={{
          borderLeft: '4px solid var(--danger-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem 1.25rem'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700 }}>
            System Administration Portal — {currentUser?.name}
          </h1>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
            Institutional Access Governance & Master Academic Data Management
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to="/users" className="btn btn-primary btn-sm">
            <Users size={15} />
            <span>Manage Users</span>
          </Link>
          <Link to="/settings" className="btn btn-outline btn-sm">
            <Settings size={15} />
            <span>System Settings</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid-4">
        <StatCard
          title="Registered Users"
          value={users.length}
          subtitle={`${facultyCount} Faculty • ${hodCount} HOD • ${adminCount} Admin`}
          icon={Users}
          variant="primary"
        />
        <StatCard
          title="Academic Programs"
          value={programs.length}
          subtitle="B.Sc. CS (UG) & M.Sc. CS (PG)"
          icon={GraduationCap}
        />
        <StatCard
          title="Master Courses"
          value={subjects.length}
          subtitle="Curriculum subjects active"
          icon={BookOpen}
          variant="success"
        />
        <StatCard
          title="Departments"
          value="1 Dept"
          subtitle="Department of Computer Science"
          icon={Building}
        />
      </div>

      {/* User Roster Summary */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              <Users size={17} style={{ color: 'var(--primary-600)' }} />
              <span>Academic Personnel Roster</span>
            </div>
            <div className="card-subtitle">
              Active faculty, HOD, and administrative user accounts
            </div>
          </div>
          <Link to="/users" className="btn btn-primary btn-sm">
            <Plus size={14} />
            <span>Add User</span>
          </Link>
        </div>

        <div className="table-container">
          <table className="academic-table">
            <thead>
              <tr>
                <th>User Details</th>
                <th>Employee ID</th>
                <th>Institutional Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{u.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{u.email}</div>
                  </td>
                  <td style={{ fontSize: '0.8rem', fontWeight: 500 }}>{u.empId || '—'}</td>
                  <td>
                    <Badge
                      variant={
                        u.role === 'admin'
                          ? 'danger'
                          : u.role === 'hod'
                          ? 'primary'
                          : 'neutral'
                      }
                    >
                      {u.role?.toUpperCase()}
                    </Badge>
                  </td>
                  <td style={{ fontSize: '0.8rem' }}>{u.department}</td>
                  <td>
                    <Badge variant={u.status === 'Active' ? 'success' : 'neutral'}>
                      {u.status || 'Active'}
                    </Badge>
                  </td>
                  <td>
                    <Link
                      to="/users"
                      className="btn btn-outline btn-sm"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                    >
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

`

## File: src\pages\Approval.jsx

`jsx
import React, { useState } from 'react';
import { useAcademic } from '../context/AcademicContext';
import {
  CheckSquare,
  FileCheck,
  Eye,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  MessageSquare,
  Clock,
  User,
  BookOpen,
  Send
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';

export const Approval = () => {
  const { questionPapers, approveQuestionPaper, requestChangesQuestionPaper, showToast } = useAcademic();

  const [activeTab, setActiveTab] = useState('All'); // 'All' | 'Pending' | 'Approved' | 'Changes'

  // Inspect Modal State
  const [inspectPaper, setInspectPaper] = useState(null);

  // Request Changes Modal State
  const [requestChangePaper, setRequestChangePaper] = useState(null);
  const [changeReason, setChangeReason] = useState('');

  const filteredPapers = questionPapers.filter(paper => {
    if (activeTab === 'Pending') return paper.status === 'Submitted' || paper.status === 'Under Review';
    if (activeTab === 'Approved') return paper.status === 'Approved';
    if (activeTab === 'Changes') return paper.status === 'Changes Required';
    return true;
  });

  const handleApprove = (paperId) => {
    approveQuestionPaper(paperId, 'Approved by HOD. Ready for printing & examination.');
    if (inspectPaper && inspectPaper.id === paperId) {
      setInspectPaper(null);
    }
  };

  const handleSendChangeRequest = (e) => {
    e.preventDefault();
    if (!requestChangePaper || !changeReason.trim()) {
      showToast('Please provide a specific reason for requesting changes.', 'warning');
      return;
    }

    requestChangesQuestionPaper(requestChangePaper.id, changeReason.trim());
    setRequestChangePaper(null);
    setChangeReason('');
    if (inspectPaper) setInspectPaper(null);
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Question Paper Assessment & Approvals"
        subtitle="HOD Academic Moderation Panel for vetting and approving institutional question papers"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'HOD Approvals' }
        ]}
      />

      {/* Tabs Filter Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '0.5rem'
        }}
      >
        {['All', 'Pending', 'Approved', 'Changes'].map((tab) => {
          const isActive = activeTab === tab;
          const count = questionPapers.filter(p => {
            if (tab === 'Pending') return p.status === 'Submitted' || p.status === 'Under Review';
            if (tab === 'Approved') return p.status === 'Approved';
            if (tab === 'Changes') return p.status === 'Changes Required';
            return true;
          }).length;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.86rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary-600)' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'var(--primary-50)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>{tab === 'Changes' ? 'Changes Required' : tab === 'Pending' ? 'Pending Review' : tab}</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isActive ? 'var(--primary-200)' : 'var(--bg-surface-hover)',
                  color: isActive ? 'var(--primary-800)' : 'var(--text-muted)'
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Question Papers List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredPapers.length === 0 ? (
          <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <FileCheck size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
            <h4 style={{ margin: 0 }}>No question papers in this category</h4>
            <p style={{ fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>All submissions are currently processed.</p>
          </div>
        ) : (
          filteredPapers.map((paper) => {
            const isPending = paper.status === 'Submitted' || paper.status === 'Under Review';

            return (
              <div
                key={paper.id}
                className="card hover-lift"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  borderLeft: `4px solid ${paper.status === 'Approved' ? 'var(--success-500)' : paper.status === 'Changes Required' ? 'var(--danger-500)' : 'var(--warning-500)'}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{paper.title}</h3>
                      <Badge>{paper.status}</Badge>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <User size={14} /> Created by: <strong style={{ color: 'var(--text-primary)' }}>{paper.author || 'Prof. Alan Davis'}</strong>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <BookOpen size={14} /> {paper.subject} ({paper.subjectCode})
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={14} /> {paper.duration} • {paper.maxMarks} Marks
                      </span>
                      <span>Submitted: {paper.createdDate}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Eye}
                      onClick={() => setInspectPaper(paper)}
                    >
                      Inspect Blueprint
                    </Button>

                    {isPending && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          icon={RotateCcw}
                          onClick={() => setRequestChangePaper(paper)}
                          style={{ color: 'var(--warning-600)', borderColor: 'var(--warning-200)' }}
                        >
                          Request Changes
                        </Button>
                        <Button
                          variant="success"
                          size="sm"
                          icon={CheckCircle}
                          onClick={() => handleApprove(paper.id)}
                        >
                          Approve Paper
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* HOD Feedback Banner if present */}
                {paper.hodFeedback && (
                  <div
                    style={{
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: paper.status === 'Approved' ? 'var(--success-50)' : 'var(--danger-50)',
                      border: `1px solid ${paper.status === 'Approved' ? 'var(--success-100)' : 'var(--danger-100)'}`,
                      fontSize: '0.84rem',
                      color: paper.status === 'Approved' ? 'var(--success-700)' : 'var(--danger-600)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <MessageSquare size={16} />
                    <span><strong>HOD Feedback Note:</strong> "{paper.hodFeedback}"</span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Inspect Paper Modal */}
      <Modal
        isOpen={!!inspectPaper}
        onClose={() => setInspectPaper(null)}
        title={inspectPaper ? `${inspectPaper.title} - Full Paper Review` : ''}
        subtitle="Vetting Bloom taxonomy compliance and question difficulty balance"
        maxWidth="750px"
        icon={BookOpen}
        footer={
          inspectPaper && (inspectPaper.status === 'Submitted' || inspectPaper.status === 'Under Review') ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setRequestChangePaper(inspectPaper);
                }}
              >
                Request Changes
              </Button>
              <Button
                variant="success"
                size="sm"
                icon={CheckCircle}
                onClick={() => handleApprove(inspectPaper.id)}
              >
                Approve & Sign Off
              </Button>
            </>
          ) : (
            <Button variant="primary" size="sm" onClick={() => setInspectPaper(null)}>
              Close Review
            </Button>
          )
        }
      >
        {inspectPaper && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Meta summary card */}
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', fontSize: '0.84rem' }}>
              <div><strong>Subject:</strong> {inspectPaper.subject} ({inspectPaper.subjectCode})</div>
              <div><strong>Maximum Marks:</strong> {inspectPaper.maxMarks} Marks</div>
              <div><strong>Duration:</strong> {inspectPaper.duration}</div>
              <div><strong>Faculty:</strong> {inspectPaper.author}</div>
              <div><strong>Semester:</strong> {inspectPaper.semester}</div>
              <div><strong>Status:</strong> <Badge>{inspectPaper.status}</Badge></div>
            </div>

            {/* Questions breakdown */}
            <div>
              <h4 style={{ fontSize: '0.95rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
                Included Examination Questions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)' }}>
                  PART A — Short Answer Questions (5 x 2 = 10 Marks)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  1. List the 3 levels of ANSI/SPARC Database Architecture. (2M - Bloom: Remember)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  2. Define primary key and foreign key with relational schemas. (2M - Bloom: Remember)
                </div>

                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)', marginTop: '0.5rem' }}>
                  PART B — Analytical Questions (4 x 5 = 20 Marks)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  3. What is an Entity-Relationship (ER) model? Differentiate strong vs weak entity sets. (5M - Bloom: Understand)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  4. State and elaborate the ACID properties of database transactions. (5M - Bloom: Understand)
                </div>

                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)', marginTop: '0.5rem' }}>
                  PART C — Comprehensive Essay (2 x 10 = 20 Marks)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  5. Explain the process of database normalization and describe 1NF, 2NF, 3NF, BCNF. (10M - Bloom: Analyze)
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Request Changes Modal */}
      <Modal
        isOpen={!!requestChangePaper}
        onClose={() => setRequestChangePaper(null)}
        title="Request Changes on Question Paper"
        subtitle={requestChangePaper ? `${requestChangePaper.title} • Submitted by ${requestChangePaper.author}` : ''}
        icon={RotateCcw}
      >
        <form onSubmit={handleSendChangeRequest}>
          <div className="form-group">
            <label className="form-label form-label-required">
              Specific Reason for Change / Faculty Instructions
            </label>
            <textarea
              className="form-textarea"
              rows="4"
              placeholder="e.g. Unit 3 questions lack Bloom Level 4 coverage. Please replace Q4 with an analytical normalization question..."
              value={changeReason}
              onChange={(e) => setChangeReason(e.target.value)}
              required
            />
            <span className="form-hint">
              This feedback will be pushed to the faculty's dashboard and notification feed.
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setRequestChangePaper(null)}>
              Cancel
            </Button>
            <Button type="submit" variant="danger" size="sm" icon={Send}>
              Send Change Request to Staff
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

`

## File: src\pages\DashboardWrapper.jsx

`jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { StaffDashboard } from './StaffDashboard';
import { HODDashboard } from './HODDashboard';
import { AdminDashboard } from './AdminDashboard';

export const DashboardWrapper = () => {
  const { role } = useAuth();

  if (role === 'admin') {
    return <AdminDashboard />;
  }
  if (role === 'hod') {
    return <HODDashboard />;
  }
  return <StaffDashboard />;
};

`

## File: src\pages\HODDashboard.jsx

`jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import { Link } from 'react-router-dom';
import {
  Users,
  CheckSquare,
  CalendarDays,
  FileText,
  FileQuestion,
  Database,
  UserCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

export const HODDashboard = () => {
  const { currentUser } = useAuth();
  const {
    questionPapers = [],
    questionBank = [],
    users = [],
    approveQuestionPaper
  } = useAcademic();

  const facultyMembers = users.filter(u => u.role === 'staff' || u.role === 'hod');
  const pendingApprovals = questionPapers.filter(
    p => p.status === 'Submitted' || p.status === 'Under Review'
  );
  const approvedPapersCount = questionPapers.filter(p => p.status === 'Approved').length;

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Official Academic Welcome Bar */}
      <div
        className="card"
        style={{
          borderLeft: '4px solid var(--primary-700)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem 1.25rem'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700 }}>
            Head of Department (HOD) — {currentUser?.name}
          </h1>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
            Department of Computer Science • B.Sc. CS (UG) & M.Sc. CS (PG) Curriculum Governance
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to="/question-paper/approval" className="btn btn-primary btn-sm">
            <CheckSquare size={15} />
            <span>Review Approvals ({pendingApprovals.length})</span>
          </Link>
          <Link to="/timetable" className="btn btn-outline btn-sm">
            <CalendarDays size={15} />
            <span>Master Timetable</span>
          </Link>
        </div>
      </div>

      {/* Practical Stats Grid */}
      <div className="grid-4">
        <StatCard
          title="Papers Awaiting Review"
          value={pendingApprovals.length}
          subtitle="Submitted for CIA / Mid-term"
          icon={CheckSquare}
          variant={pendingApprovals.length > 0 ? 'warning' : 'default'}
        />
        <StatCard
          title="Department Faculty"
          value={facultyMembers.length}
          subtitle="Teaching staff & professors"
          icon={Users}
        />
        <StatCard
          title="Exam Blueprints"
          value={questionPapers.length}
          subtitle={`${approvedPapersCount} approved for examination`}
          icon={FileText}
          variant="primary"
        />
        <StatCard
          title="Active Batches"
          value="5 Batches"
          subtitle="UG: I, II, III • PG: I, II"
          icon={CalendarDays}
          variant="success"
        />
      </div>

      {/* Question Papers Awaiting Action */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              <CheckSquare size={17} style={{ color: 'var(--primary-600)' }} />
              <span>Question Papers Awaiting Verification & Approval</span>
            </div>
            <div className="card-subtitle">
              Submitted by faculty for continuous internal assessments
            </div>
          </div>
          <Link to="/question-paper/approval" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
            View All ({questionPapers.length}) →
          </Link>
        </div>

        {pendingApprovals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>
              ✓ All submitted question papers have been reviewed and approved.
            </p>
          </div>
        ) : (
          <div className="table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Paper Title</th>
                  <th>Course</th>
                  <th>Faculty Author</th>
                  <th>Exam Type & Marks</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingApprovals.map(paper => (
                  <tr key={paper.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {paper.semester} • {paper.programName}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.subjectCode}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {paper.subject}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.82rem' }}>{paper.author || 'Faculty Member'}</td>
                    <td>
                      <Badge variant="neutral">
                        {paper.examType} • {paper.maxMarks}M
                      </Badge>
                    </td>
                    <td>
                      <Badge variant="primary">{paper.status}</Badge>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          onClick={() => approveQuestionPaper(paper.id)}
                          className="btn btn-success btn-sm"
                          style={{ padding: '0.2rem 0.55rem', fontSize: '0.75rem' }}
                        >
                          Approve
                        </button>
                        <Link
                          to={`/question-paper/approval`}
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.2rem 0.55rem', fontSize: '0.75rem' }}
                        >
                          Review
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Grid: Faculty Directory & Department Quick Management */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '1.25rem' }}>
        {/* Department Faculty Directory */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <Users size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Department Faculty Members</span>
              </div>
              <div className="card-subtitle">Teaching staff and academic designations</div>
            </div>
            <Link to="/users" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
              Manage Users →
            </Link>
          </div>

          <div className="table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Faculty Name</th>
                  <th>Designation</th>
                  <th>Department Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {facultyMembers.slice(0, 6).map(member => (
                  <tr key={member.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{member.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {member.email}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {member.designation || 'Faculty'}
                    </td>
                    <td style={{ fontSize: '0.8rem' }}>
                      <Badge variant={member.role === 'hod' ? 'purple' : 'neutral'}>
                        {member.role === 'hod' ? 'Head of Dept' : 'Faculty'}
                      </Badge>
                    </td>
                    <td>
                      <Badge variant={member.status === 'Active' ? 'success' : 'neutral'}>
                        {member.status || 'Active'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Department Management Shortcuts */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <CalendarDays size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Department Administration</span>
              </div>
              <div className="card-subtitle">Governance & operational shortcuts</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              to="/timetable"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <CalendarDays size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Master Timetable Schedule</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Class timetables, periods, and room allocations</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/question-paper/approval"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <CheckSquare size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Question Paper Verification</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Review and approve submitted CIA question papers</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/questions/bank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <Database size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Question Bank Management</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{questionBank.length} questions cataloged across courses</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/users"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <UserCheck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Department User Management</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Faculty accounts, roles, and course assignments</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;

`

## File: src\pages\Login.jsx

`jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import {
  GraduationCap,
  Lock,
  Mail,
  ShieldCheck,
  Briefcase,
  Layers,
  Eye,
  EyeOff,
  AlertCircle
} from 'lucide-react';

export const Login = () => {
  const { login } = useAuth();
  const { showToast } = useAcademic();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('staff');
  const [email, setEmail] = useState('alan.davis@voccollege.edu.in');
  const [password, setPassword] = useState('faculty123');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const roleCredentials = {
    staff: {
      title: 'Teaching Faculty',
      email: 'alan.davis@voccollege.edu.in',
      pass: 'faculty123',
      badge: 'Faculty Login',
      hint: 'Course schedules, question generation & paper authoring.'
    },
    hod: {
      title: 'Head of Department',
      email: 'gomathinayagam@gmail.com',
      pass: 'hod123',
      badge: 'HOD Login',
      hint: 'Department master timetable, question paper approvals & governance.'
    },
    admin: {
      title: 'System Administrator',
      email: 'ananth19012007@gmail.com',
      pass: '19012007',
      badge: 'Admin Login',
      hint: 'Personnel IAM, degree curriculum & system configuration.'
    }
  };

  const handleRoleTabChange = (roleKey) => {
    setSelectedRole(roleKey);
    setEmail(roleCredentials[roleKey].email);
    setPassword(roleCredentials[roleKey].pass);
    setErrorMessage('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your institutional email ID.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }

    const success = login(email.trim(), password.trim(), selectedRole);
    if (success) {
      showToast(`Welcome back, ${selectedRole.toUpperCase()}!`, 'success');
      navigate('/dashboard');
    } else {
      setErrorMessage('Authentication failed. Please verify your credentials or select the correct role.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f2744',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          border: '1px solid #cbd5e1'
        }}
      >
        {/* Institutional Card Header */}
        <div
          style={{
            backgroundColor: '#0f2744',
            color: '#ffffff',
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
            borderBottom: '3px solid #1e40af'
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              margin: '0 auto 0.75rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}
          >
            <GraduationCap size={26} />
          </div>
          <h1 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
            V.O. Chidambaram College
          </h1>
          <p style={{ fontSize: '0.78rem', margin: '0.25rem 0 0 0', color: '#93c5fd', fontWeight: 500 }}>
            Department of Computer Science • Internal Academic Portal
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            backgroundColor: '#f1f5f9',
            borderBottom: '1px solid #e2e8f0',
            padding: '0.25rem'
          }}
        >
          {[
            { key: 'staff', label: 'Faculty', icon: Briefcase },
            { key: 'hod', label: 'HOD', icon: Layers },
            { key: 'admin', label: 'Admin', icon: ShieldCheck }
          ].map(tab => {
            const Icon = tab.icon;
            const isSelected = selectedRole === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleRoleTabChange(tab.key)}
                style={{
                  padding: '0.55rem 0.25rem',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? '#0f2744' : '#64748b',
                  backgroundColor: isSelected ? '#ffffff' : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  boxShadow: isSelected ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={14} style={{ color: isSelected ? '#1e40af' : 'inherit' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
              {roleCredentials[selectedRole].title} Sign In
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
              {roleCredentials[selectedRole].hint}
            </div>
          </div>

          {errorMessage && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 0.85rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #fee2e2',
                borderRadius: 'var(--radius-sm)',
                color: '#b91c1c',
                fontSize: '0.78rem',
                marginBottom: '1rem'
              }}
            >
              <AlertCircle size={15} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required" style={{ color: '#0f172a' }}>
                Institutional Email / ID
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8'
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@voccollege.edu.in"
                  className="form-input"
                  style={{ paddingLeft: '32px', color: '#0f172a' }}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required" style={{ color: '#0f172a' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8'
                  }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingLeft: '32px', paddingRight: '32px', color: '#0f172a' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex'
                  }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.65rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginTop: '0.25rem',
                backgroundColor: '#1e40af'
              }}
            >
              Sign In to Academic Portal
            </button>
          </form>

          {/* Institutional Note */}
          <div
            style={{
              marginTop: '1.25rem',
              paddingTop: '0.85rem',
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center',
              fontSize: '0.72rem',
              color: '#64748b'
            }}
          >
            V.O.C. College Academic Management & Examination Portal • Version 2.4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

`

## File: src\pages\QuestionBank.jsx

`jsx
import React, { useState, useMemo } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Database,
  Search,
  Plus,
  Filter,
  Trash2,
  Edit2,
  Eye,
  FileSpreadsheet,
  BookOpen,
  FileText,
  Check,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Table } from '../components/common/Table';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const QuestionBank = () => {
  const { questionBank, addQuestion, updateQuestion, deleteQuestion, showToast } = useAcademic();
  const location = useLocation();
  const navigate = useNavigate();

  // Search & Filter State
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedUnit, setSelectedUnit] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedMarks, setSelectedMarks] = useState('All');

  // Modal States
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  // New Question Form State
  const [newQText, setNewQText] = useState('');
  const [newQSubject, setNewQSubject] = useState('Database Management Systems');
  const [newQUnit, setNewQUnit] = useState('Unit 1');
  const [newQTopic, setNewQTopic] = useState('');
  const [newQMarks, setNewQMarks] = useState(5);
  const [newQDifficulty, setNewQDifficulty] = useState('Medium');
  const [newQBloom, setNewQBloom] = useState('Understand');
  const [newQHint, setNewQHint] = useState('');

  // Row selection
  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered dataset
  const filteredQuestions = useMemo(() => {
    return questionBank.filter(q => {
      const matchSearch = !searchTerm ||
        q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.topic?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchSubject = selectedSubject === 'All' || q.subject.includes(selectedSubject);
      const matchUnit = selectedUnit === 'All' || q.unit === selectedUnit;
      const matchDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
      const matchMarks = selectedMarks === 'All' || q.marks === parseInt(selectedMarks, 10);

      return matchSearch && matchSubject && matchUnit && matchDifficulty && matchMarks;
    });
  }, [questionBank, searchTerm, selectedSubject, selectedUnit, selectedDifficulty, selectedMarks]);

  const handleCreateQuestion = (e) => {
    e.preventDefault();
    addQuestion({
      questionText: newQText,
      subject: newQSubject,
      subjectCode: newQSubject === 'Database Management Systems' ? 'CS301' : 'CS304',
      unit: newQUnit,
      topic: newQTopic || 'General Concept',
      marks: newQMarks,
      difficulty: newQDifficulty,
      bloomLevel: newQBloom,
      answerHint: newQHint
    });

    setIsAddModalOpen(false);
    setNewQText('');
    setNewQTopic('');
    setNewQHint('');
  };

  const handleExportCSV = () => {
    let csv = 'ID,Subject,Unit,Topic,Marks,Difficulty,Bloom Level,Question Text,Answer Guide\n';
    filteredQuestions.forEach(q => {
      csv += `"${q.id}","${q.subject}","${q.unit}","${q.topic || ''}","${q.marks}","${q.difficulty}","${q.bloomLevel}","${q.questionText.replace(/"/g, '""')}","${(q.answerHint || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Apex_QuestionBank_Export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast('Question Bank exported to CSV!', 'success');
  };

  const columns = [
    {
      header: 'Question Content',
      key: 'questionText',
      render: (val, row) => (
        <div style={{ maxWidth: '420px' }}>
          <span style={{ fontWeight: 500, color: 'var(--text-primary)', display: 'block', lineHeight: 1.4 }}>
            {val}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            <span>{row.subject}</span>
            <span>•</span>
            <span>{row.topic || row.unit}</span>
          </div>
        </div>
      )
    },
    {
      header: 'Unit',
      key: 'unit',
      sortable: true,
      width: '90px',
      render: (val) => <span style={{ fontWeight: 600, fontSize: '0.82rem' }}>{val}</span>
    },
    {
      header: 'Marks',
      key: 'marks',
      sortable: true,
      width: '80px',
      render: (val) => <Badge variant="primary">{val}M</Badge>
    },
    {
      header: 'Difficulty',
      key: 'difficulty',
      sortable: true,
      width: '100px',
      render: (val) => (
        <Badge variant={val === 'Hard' ? 'danger' : val === 'Medium' ? 'warning' : 'success'}>
          {val}
        </Badge>
      )
    },
    {
      header: 'Bloom Level',
      key: 'bloomLevel',
      sortable: true,
      width: '110px',
      render: (val) => <Badge variant="purple">{val}</Badge>
    },
    {
      header: 'Actions',
      key: 'id',
      width: '140px',
      render: (id, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <button
            onClick={() => setPreviewQuestion(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Preview Details"
          >
            <Eye size={15} />
          </button>
          <button
            onClick={() => setEditingQuestion(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Edit Question"
          >
            <Edit2 size={15} />
          </button>
          <button
            onClick={() => {
              navigate('/question-paper/create');
              showToast(`Navigated to Paper Builder to add "${row.id}"`, 'info');
            }}
            className="btn btn-ghost btn-sm btn-icon"
            title="Add to Question Paper"
          >
            <FileText size={15} />
          </button>
          <button
            onClick={() => setDeleteTargetId(id)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Delete"
            style={{ color: 'var(--danger-500)' }}
          >
            <Trash2 size={15} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Page Header */}
      <PageHeader
        title="Institutional Question Bank"
        subtitle="Central verified repository of multi-tier curriculum examination questions"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'Question Bank' }
        ]}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              icon={FileSpreadsheet}
              onClick={handleExportCSV}
            >
              Export CSV
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={Sparkles}
              onClick={() => navigate('/questions/generate')}
            >
              Generate AI Questions
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Plus}
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Question
            </Button>
          </>
        }
      />

      {/* Filter and Search Bar */}
      <div
        className="card"
        style={{
          padding: '1rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
          {/* Search Input */}
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-light)',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '36px' }}
              placeholder="Search by keywords, subject, Bloom taxonomy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Quick Stats Pill */}
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Showing <strong>{filteredQuestions.length}</strong> of <strong>{questionBank.length}</strong> Questions
          </div>
        </div>

        {/* Dropdown Filters Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Subject</label>
            <select
              className="form-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All CS Courses</option>
              <optgroup label="B.Sc. Computer Science (UG 3-Yr)">
                <option value="Database">CS301 - Database Management Systems</option>
                <option value="Java">CS304 - Java Programming</option>
                <option value="Operating">CS302 - Operating Systems</option>
                <option value="Python">CS303 - Python for Data Science</option>
              </optgroup>
              <optgroup label="M.Sc. Computer Science (PG 2-Yr)">
                <option value="Advanced Data Structures">MCS101 - Advanced Data Structures & Algorithms</option>
                <option value="Machine Learning">MCS201 - Machine Learning & Neural Computing</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Curriculum Unit</label>
            <select
              className="form-select"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All Units</option>
              <option value="Unit 1">Unit 1</option>
              <option value="Unit 2">Unit 2</option>
              <option value="Unit 3">Unit 3</option>
              <option value="Unit 4">Unit 4</option>
              <option value="Unit 5">Unit 5</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Difficulty</label>
            <select
              className="form-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Marks</label>
            <select
              className="form-select"
              value={selectedMarks}
              onChange={(e) => setSelectedMarks(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All Marks</option>
              <option value="1">1 Mark (One-Word / Objective)</option>
              <option value="2">2 Marks (Short)</option>
              <option value="5">5 Marks (Analytical / Medium)</option>
              <option value="8">8 Marks (Comprehensive / Essay)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <Table
        columns={columns}
        data={filteredQuestions}
        selectable={true}
        selectedIds={selectedIds}
        onSelectRow={(id) => {
          setSelectedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
        }}
        onSelectAll={(checked, paginatedItems) => {
          if (checked) {
            const idsToAdd = paginatedItems.map(p => p.id);
            setSelectedIds(prev => Array.from(new Set([...prev, ...idsToAdd])));
          } else {
            const idsToRemove = paginatedItems.map(p => p.id);
            setSelectedIds(prev => prev.filter(id => !idsToRemove.includes(id)));
          }
        }}
        pageSize={8}
      />

      {/* Preview Modal */}
      <Modal
        isOpen={!!previewQuestion}
        onClose={() => setPreviewQuestion(null)}
        title="Question Details & Marking Scheme"
        icon={BookOpen}
        footer={
          <Button variant="primary" size="sm" onClick={() => setPreviewQuestion(null)}>
            Close
          </Button>
        }
      >
        {previewQuestion && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Badge variant="primary">{previewQuestion.marks} Marks</Badge>
              <Badge variant="neutral">{previewQuestion.unit}</Badge>
              <Badge variant="purple">Bloom: {previewQuestion.bloomLevel}</Badge>
              <Badge variant={previewQuestion.difficulty === 'Hard' ? 'danger' : 'warning'}>
                {previewQuestion.difficulty}
              </Badge>
            </div>

            <div>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Question Text</h4>
              <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
                {previewQuestion.questionText}
              </p>
            </div>

            {previewQuestion.answerHint && (
              <div style={{ backgroundColor: 'var(--bg-surface-hover)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Marking Guidelines / Solution Key</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {previewQuestion.answerHint}
                </p>
              </div>
            )}

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
              Subject: <strong>{previewQuestion.subject}</strong> ({previewQuestion.subjectCode}) • Created by {previewQuestion.author || 'Prof. Alan Davis'} on {previewQuestion.createdDate}
            </div>
          </div>
        )}
      </Modal>

      {/* Add Question Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Question to Bank"
        icon={Plus}
      >
        <form onSubmit={handleCreateQuestion}>
          <div className="form-group">
            <label className="form-label form-label-required">Question Text</label>
            <textarea
              className="form-textarea"
              rows="3"
              value={newQText}
              onChange={(e) => setNewQText(e.target.value)}
              placeholder="Type the complete examination question prompt..."
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Subject</label>
              <select
                className="form-select"
                value={newQSubject}
                onChange={(e) => setNewQSubject(e.target.value)}
              >
                <optgroup label="B.Sc. Computer Science (UG 3-Yr)">
                  <option value="Database Management Systems">CS301 - Database Management Systems</option>
                  <option value="Java Programming">CS304 - Java Programming</option>
                  <option value="Operating Systems">CS302 - Operating Systems</option>
                  <option value="Python for Data Science">CS303 - Python for Data Science</option>
                </optgroup>
                <optgroup label="M.Sc. Computer Science (PG 2-Yr)">
                  <option value="Advanced Data Structures & Algorithms">MCS101 - Advanced Data Structures</option>
                  <option value="Machine Learning & Neural Computing">MCS201 - Machine Learning</option>
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Unit</label>
              <select
                className="form-select"
                value={newQUnit}
                onChange={(e) => setNewQUnit(e.target.value)}
              >
                <option value="Unit 1">Unit 1</option>
                <option value="Unit 2">Unit 2</option>
                <option value="Unit 3">Unit 3</option>
                <option value="Unit 4">Unit 4</option>
                <option value="Unit 5">Unit 5</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Marks</label>
              <input
                type="number"
                className="form-input"
                value={newQMarks}
                onChange={(e) => setNewQMarks(parseInt(e.target.value, 10))}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label form-label-required">Difficulty</label>
              <select
                className="form-select"
                value={newQDifficulty}
                onChange={(e) => setNewQDifficulty(e.target.value)}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label form-label-required">Bloom's Level</label>
              <select
                className="form-select"
                value={newQBloom}
                onChange={(e) => setNewQBloom(e.target.value)}
              >
                <option value="Remember">Remember</option>
                <option value="Understand">Understand</option>
                <option value="Apply">Apply</option>
                <option value="Analyze">Analyze</option>
                <option value="Evaluate">Evaluate</option>
                <option value="Create">Create</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Marking Breakdown / Key points</label>
            <textarea
              className="form-textarea"
              rows="2"
              value={newQHint}
              onChange={(e) => setNewQHint(e.target.value)}
              placeholder="Outline expected points or partial marks..."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Save to Question Bank
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Question Modal */}
      <Modal
        isOpen={!!editingQuestion}
        onClose={() => setEditingQuestion(null)}
        title="Edit Question"
        icon={Edit2}
      >
        {editingQuestion && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateQuestion(editingQuestion.id, editingQuestion);
              setEditingQuestion(null);
            }}
          >
            <div className="form-group">
              <label className="form-label form-label-required">Question Text</label>
              <textarea
                className="form-textarea"
                rows="3"
                value={editingQuestion.questionText}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, questionText: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Marks</label>
                <input
                  type="number"
                  className="form-input"
                  value={editingQuestion.marks}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, marks: parseInt(e.target.value, 10) })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Difficulty</label>
                <select
                  className="form-select"
                  value={editingQuestion.difficulty}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, difficulty: e.target.value })}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Marking Scheme / Answer Guidelines</label>
              <textarea
                className="form-textarea"
                rows="2"
                value={editingQuestion.answerHint || ''}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, answerHint: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
              <Button variant="outline" size="sm" onClick={() => setEditingQuestion(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" icon={Check}>
                Save Changes
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!deleteTargetId}
        onClose={() => setDeleteTargetId(null)}
        onConfirm={() => {
          if (deleteTargetId) {
            deleteQuestion(deleteTargetId);
            setDeleteTargetId(null);
          }
        }}
        title="Delete Question"
        message="Are you sure you want to permanently delete this question from the Question Bank?"
      />
    </div>
  );
};

`

## File: src\pages\QuestionGenerator.jsx

`jsx
import React, { useState, useRef } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  UploadCloud,
  FileText,
  CheckCircle2,
  Download,
  Printer,
  Copy,
  FileCode,
  KeyRound,
  FileCheck,
  X,
  AlertCircle
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { LoadingAnimation } from '../components/common/LoadingAnimation';

export const QuestionGenerator = () => {
  const { showToast, addQuestion } = useAcademic();
  const navigate = useNavigate();

  // 1. Upload File State - Starts EMPTY (No default book)
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Subject / Course Metadata
  const [subjectName, setSubjectName] = useState('Computer Science Course');
  const [subjectCode, setSubjectCode] = useState('CS301');
  const [assessmentTitle, setAssessmentTitle] = useState('Continuous Internal Assessment (CIA)');

  // Generation & View State
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiStep, setAiStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  // Separate Tab State: 'question_file' vs 'answer_file'
  const [activeFileTab, setActiveFileTab] = useState('question_file'); // 'question_file' | 'answer_file'
  
  // Generated Department Internal Assessment Paper
  const [internalPaper, setInternalPaper] = useState(null);

  const aiSteps = [
    `Reading "${uploadedFile?.name || 'document'}" content and extracting topics...`,
    'Synthesizing Part A: 2 Questions (1 Mark each)...',
    'Synthesizing Part B: 2 Questions (5 Marks each with (a) or (b) choice)...',
    'Synthesizing Part C: 1 Question (8 Marks with (a) or (b) choice)...',
    'Generating comprehensive Model Solutions & Step-by-Step Marking Key...',
    'Formatting high-resolution printable examination PDF...'
  ];

  // Handle Real File Selection
  const processSelectedFile = (file) => {
    if (!file) return;
    const sizeMB = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    const detectedName = file.name.replace(/\.[^/.]+$/, '');
    
    setUploadedFile({
      name: file.name,
      displayName: detectedName,
      size: sizeMB,
      type: file.type || 'Document',
      status: 'Uploaded & Ready'
    });

    // Auto-detect subject if file contains common keywords
    const lower = file.name.toLowerCase();
    if (lower.includes('os') || lower.includes('operating')) {
      setSubjectName('Operating Systems');
      setSubjectCode('CS302');
    } else if (lower.includes('algo') || lower.includes('data structure') || lower.includes('clrs')) {
      setSubjectName('Data Structures & Algorithms');
      setSubjectCode('CS201');
    } else if (lower.includes('network') || lower.includes('tanenbaum')) {
      setSubjectName('Computer Networks');
      setSubjectCode('CS305');
    } else if (lower.includes('dbms') || lower.includes('data') || lower.includes('sql')) {
      setSubjectName('Database Management Systems');
      setSubjectCode('CS301');
    } else if (lower.includes('java')) {
      setSubjectName('Java Programming');
      setSubjectCode('CS304');
    } else if (lower.includes('python')) {
      setSubjectName('Python for Data Science');
      setSubjectCode('CS303');
    } else {
      setSubjectName(detectedName.replace(/_/g, ' '));
    }

    showToast(`File "${file.name}" uploaded successfully!`, 'success');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    processSelectedFile(file);
  };

  // Drag & Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processSelectedFile(file);
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    showToast('File removed', 'info');
  };

  // Sample Presets for 1-Click Load
  const SAMPLE_PRESETS = [
    { name: 'Operating_Systems_Silberschatz_10thEd.pdf', title: 'Operating Systems', code: 'CS302', size: '18.4 MB' },
    { name: 'Introduction_to_Algorithms_CLRS_4thEd.pdf', title: 'Data Structures & Algorithms', code: 'CS201', size: '24.1 MB' },
    { name: 'Database_System_Concepts_Korth_7thEd.pdf', title: 'Database Management Systems', code: 'CS301', size: '15.6 MB' },
    { name: 'Computer_Networks_Tanenbaum_6thEd.pdf', title: 'Computer Networks', code: 'CS305', size: '21.0 MB' },
    { name: 'Java_The_Complete_Reference_Schildt.pdf', title: 'Java Programming', code: 'CS304', size: '19.2 MB' }
  ];

  const handleSelectPreset = (preset) => {
    setUploadedFile({
      name: preset.name,
      displayName: preset.title,
      size: preset.size,
      type: 'PDF Document',
      status: 'Curriculum Textbook Loaded'
    });
    setSubjectName(preset.title);
    setSubjectCode(preset.code);
    showToast(`Loaded "${preset.title}" textbook!`, 'success');
  };

  // Generate Internal Question Paper (2 x 1M, 2 x 5M [a/b], 1 x 8M [a/b])
  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    
    // Auto-fallback if no file was uploaded yet
    let targetFile = uploadedFile;
    if (!targetFile) {
      targetFile = {
        name: 'Introduction_to_Algorithms_CLRS_4thEd.pdf',
        displayName: 'Data Structures & Algorithms',
        size: '24.1 MB',
        type: 'PDF Document',
        status: 'Curriculum Textbook Loaded'
      };
      setUploadedFile(targetFile);
      setSubjectName('Data Structures & Algorithms');
      setSubjectCode('CS201');
    }

    setIsGenerating(true);
    setShowResults(false);
    setAiStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < aiSteps.length) {
        setAiStep(step);
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        setShowResults(true);

        // Exact Department Internal Assessment Pattern:
        // 2 x 1 Mark = 2 Marks
        // 2 x 5 Marks (with a/b option) = 10 Marks
        // 1 x 8 Marks (with a/b option) = 8 Marks
        // Total = 20 Marks
        const paper = {
          institution: 'V.O. CHIDAMBARAM COLLEGE (AUTONOMOUS)',
          affiliate: 'Affiliated to Manonmaniam Sundaranar University, Tirunelveli',
          department: 'DEPARTMENT OF COMPUTER SCIENCE',
          title: assessmentTitle,
          subject: subjectName || 'Data Structures & Algorithms',
          subjectCode: subjectCode || 'CS201',
          duration: '1.5 Hours',
          maxMarks: 20,
          sourceFile: targetFile.name,
          
          // PART A: 2 Questions x 1 Mark = 2 Marks
          partA: [
            {
              qNum: '1',
              questionText: 'Which normal form eliminates all partial functional dependencies on primary keys?',
              marks: 1,
              bloom: 'Remember (K1)',
              answer: 'Second Normal Form (2NF). Reason: 2NF requires every non-prime attribute to be fully functionally dependent on primary keys.',
              marking: '1 Mark for 2NF.'
            },
            {
              qNum: '2',
              questionText: 'State True or False: Every relational database schema in BCNF is also in 3NF.',
              marks: 1,
              bloom: 'Understand (K2)',
              answer: 'True. Reason: BCNF is strictly stronger than 3NF; if every determinant is a superkey, 3NF conditions are satisfied.',
              marking: '1 Mark for True with explanation.'
            }
          ],

          // PART B: 2 Questions x 5 Marks = 10 Marks (with (a) or (b) option)
          partB: [
            {
              qNum: '3',
              optionA: {
                label: '(a)',
                questionText: 'Given relation schema R(A, B, C, D, E) and F = { A -> BC, CD -> E, B -> D, E -> A }. (i) Find the attribute closures (A)+, (B)+, and (CD)+. (ii) Identify all candidate keys of R.',
                marks: 5,
                bloom: 'Apply (K3)',
                answer: '(i) (A)+ = {A,B,C,D,E}. (B)+ = {B,D}. (CD)+ = {C,D,E,A,B}. (ii) Candidate keys are A, E, CD, and BC because their closures derive all attributes and are minimal.',
                marking: '2 Marks for closures + 3 Marks for all candidate keys.'
              },
              optionB: {
                label: '(b)',
                questionText: 'Explain Third Normal Form (3NF) and Boyce-Codd Normal Form (BCNF). Illustrate an anomaly that can occur in 3NF but is eliminated in BCNF.',
                marks: 5,
                bloom: 'Analyze (K4)',
                answer: '3NF allows X -> A if X is superkey OR A is prime. BCNF strictly requires X to be superkey. Example: R(Student, Subject, Teacher) with F = { (Student, Subject)->Teacher, Teacher->Subject }. Teacher is not superkey, violating BCNF and causing update anomalies.',
                marking: '2 Marks for 3NF vs BCNF definitions + 3 Marks for schema example & anomaly proof.'
              }
            },
            {
              qNum: '4',
              optionA: {
                label: '(a)',
                questionText: 'Describe the step-by-step algorithm to compute the Canonical / Minimal Cover of a set of functional dependencies F with a suitable example.',
                marks: 5,
                bloom: 'Apply (K3)',
                answer: 'Algorithm steps: 1. Decompose RHS attributes into singletons. 2. Remove extraneous LHS attributes using closure tests. 3. Remove redundant functional dependencies by testing logical implication.',
                marking: '1 Mark for decomposition + 2 Marks for extraneous removal + 2 Marks for redundancy removal.'
              },
              optionB: {
                label: '(b)',
                questionText: 'State and prove the Pseudo-Transitivity Rule and Decomposition Rule of Functional Dependencies using Armstrong\'s fundamental axioms.',
                marks: 5,
                bloom: 'Evaluate (K5)',
                answer: 'Pseudo-transitivity: If X -> Y and WY -> Z, then WX -> Z. Proof: By augmentation, WX -> WY; by transitivity with WY -> Z, we obtain WX -> Z. Decomposition: If X -> YZ, then X -> Y and X -> Z using reflexivity and transitivity.',
                marking: '2.5 Marks for Pseudo-transitivity proof + 2.5 Marks for Decomposition proof.'
              }
            }
          ],

          // PART C: 1 Question x 8 Marks = 8 Marks (with (a) or (b) option)
          partC: {
            qNum: '5',
            optionA: {
              label: '(a)',
              questionText: 'Consider a relation schema R(A, B, C, D, E, F) with F = { A -> BC, B -> E, CD -> EF, E -> F }. (i) Find all candidate keys of R. (ii) Determine the highest normal form of R with justification. (iii) Decompose R into a set of lossless-join and dependency-preserving 3NF relations.',
              marks: 8,
              bloom: 'Evaluate (K5)',
              answer: '(i) Candidate key is AD. (ii) R is in 1NF because B -> E is a partial dependency violating 2NF. (iii) Canonical cover Fc = { A->B, A->C, B->E, CD->F, E->F }. 3NF Schemas: R1(A,B), R2(A,C), R3(B,E), R4(C,D,F), R5(A,D).',
              marking: '2 Marks for candidate key + 2 Marks for normal form classification + 4 Marks for 3NF synthesis.'
            },
            optionB: {
              label: '(b)',
              questionText: 'Explain the Dependency-Preserving 3NF Synthesis Algorithm in detail. Prove why every relation produced by the algorithm is guaranteed to be in 3NF and lossless.',
              marks: 8,
              bloom: 'Analyze (K4)',
              answer: 'Detailed coverage of 3NF synthesis: 1. Compute canonical cover Fc. 2. For each FD X -> A in Fc, create schema Ri(X, A). 3. If no Ri contains candidate key of R, create schema with candidate key. 4. Eliminate subset schemas. Formal proof of 3NF guarantee.',
              marking: '4 Marks for algorithm steps + 4 Marks for formal proof.'
            }
          }
        };

        setInternalPaper(paper);
        setActiveFileTab('question_file');
        showToast('Generated Department Internal Assessment Paper & Answer Key!', 'success');
      }
    }, 450);
  };

  // Print Current Active File
  const handlePrint = () => {
    window.print();
  };

  // Download Question Paper File (Questions ONLY) as Word Document (.doc)
  const handleDownloadQuestionDoc = () => {
    if (!internalPaper) return;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Question Paper - ${internalPaper.subject}</title>
      <style>
        body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; padding: 25px; }
        .header { text-align: center; border-bottom: 2px solid black; padding-bottom: 10px; margin-bottom: 15px; }
        h2, h3, h4 { margin: 2px 0; text-transform: uppercase; }
        .meta-bar { display: flex; justify-content: space-between; font-weight: bold; border-bottom: 1px solid black; padding-bottom: 6px; margin-bottom: 20px; }
        .section-header { text-align: center; font-weight: bold; margin-top: 18px; margin-bottom: 8px; text-transform: uppercase; }
        .or-divider { text-align: center; font-weight: bold; font-style: italic; margin: 6px 0; }
      </style>
      </head>
      <body>
        <div class="header">
          <h2>${internalPaper.institution}</h2>
          <p style="margin: 0; font-style: italic;">${internalPaper.affiliate}</p>
          <h3>${internalPaper.department}</h3>
          <h4>${internalPaper.title.toUpperCase()}</h4>
          <p style="margin: 2px 0; font-weight: bold;">B.Sc. / M.Sc. Degree Examination</p>
        </div>
        <div class="meta-bar">
          <span>SUBJECT: [${internalPaper.subjectCode}] ${internalPaper.subject.toUpperCase()}</span>
          <span>TIME: ${internalPaper.duration} | MAX MARKS: ${internalPaper.maxMarks}</span>
        </div>

        <div class="section-header">PART – A (2 × 1 = 2 Marks)<br/><small style="font-weight: normal; font-style: italic;">Answer ALL Questions. Each question carries 1 mark.</small></div>
        ${internalPaper.partA.map(q => `
          <p style="margin: 8px 0;"><strong>${q.qNum}.</strong> ${q.questionText} <span style="float: right;">(1)</span></p>
        `).join('')}

        <div class="section-header">PART – B (2 × 5 = 10 Marks)<br/><small style="font-weight: normal; font-style: italic;">Answer ALL Questions choosing either (a) or (b). Each question carries 5 marks.</small></div>
        ${internalPaper.partB.map(b => `
          <div style="margin: 12px 0;">
            <p style="margin: 4px 0;"><strong>${b.qNum}. ${b.optionA.label}</strong> ${b.optionA.questionText} <span style="float: right;">(5)</span></p>
            <div class="or-divider">[ OR ]</div>
            <p style="margin: 4px 0; padding-left: 20px;"><strong>${b.optionB.label}</strong> ${b.optionB.questionText} <span style="float: right;">(5)</span></p>
          </div>
        `).join('')}

        <div class="section-header">PART – C (1 × 8 = 8 Marks)<br/><small style="font-weight: normal; font-style: italic;">Answer Question 5 choosing either (a) or (b). Carries 8 marks.</small></div>
        <div style="margin: 12px 0;">
          <p style="margin: 4px 0;"><strong>${internalPaper.partC.qNum}. ${internalPaper.partC.optionA.label}</strong> ${internalPaper.partC.optionA.questionText} <span style="float: right;">(8)</span></p>
          <div class="or-divider">[ OR ]</div>
          <p style="margin: 4px 0; padding-left: 20px;"><strong>${internalPaper.partC.optionB.label}</strong> ${internalPaper.partC.optionB.questionText} <span style="float: right;">(8)</span></p>
        </div>

        <div style="text-align: center; margin-top: 40px; border-top: 1px solid black; padding-top: 8px; font-style: italic;">
          *** End of Internal Assessment Question Paper ***
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Question_Paper_${internalPaper.subjectCode}_Internal_20Marks.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloaded Question Paper file (.doc)!', 'success');
  };

  // Download Answer Key File (Solutions & Rubrics ONLY) as Word Document (.doc)
  const handleDownloadAnswerDoc = () => {
    if (!internalPaper) return;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Answer Key - ${internalPaper.subject}</title>
      <style>
        body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; padding: 25px; }
        .header { text-align: center; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 15px; }
        h2, h3, h4 { margin: 2px 0; text-transform: uppercase; }
        .meta-bar { display: flex; justify-content: space-between; font-weight: bold; border-bottom: 1px solid #003366; padding-bottom: 6px; margin-bottom: 20px; }
        .ans-box { background-color: #f8fafc; padding: 10px 14px; border-left: 3px solid #0055aa; margin: 8px 0 16px 0; }
      </style>
      </head>
      <body>
        <div class="header">
          <h2>${internalPaper.institution}</h2>
          <p style="margin: 0; font-style: italic;">${internalPaper.affiliate}</p>
          <h3>${internalPaper.department}</h3>
          <h4 style="color: #003366;">CONFIDENTIAL MODEL ANSWER KEY & MARKING SCHEME</h4>
          <p style="margin: 2px 0; font-weight: bold;">${internalPaper.title} (Max Marks: ${internalPaper.maxMarks})</p>
        </div>
        <div class="meta-bar">
          <span>SUBJECT: [${internalPaper.subjectCode}] ${internalPaper.subject.toUpperCase()}</span>
          <span>EVALUATOR REFERENCE SCHEME</span>
        </div>

        <h3 style="color: #003366; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">PART – A ANSWERS (2 × 1 = 2 Marks)</h3>
        ${internalPaper.partA.map(q => `
          <div style="margin-bottom: 12px;">
            <p style="margin: 0;"><strong>Q${q.qNum}.</strong> ${q.questionText} <strong>[1 Mark]</strong></p>
            <div class="ans-box">
              <strong>Answer:</strong> ${q.answer}<br/>
              <strong>Marking:</strong> ${q.marking}
            </div>
          </div>
        `).join('')}

        <h3 style="color: #003366; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px;">PART – B ANSWERS (2 × 5 = 10 Marks)</h3>
        ${internalPaper.partB.map(b => `
          <div style="margin-bottom: 18px;">
            <p style="margin: 0;"><strong>Q${b.qNum}. (a)</strong> ${b.optionA.questionText} <strong>[5 Marks]</strong></p>
            <div class="ans-box">
              <strong>Model Solution:</strong> ${b.optionA.answer}<br/>
              <strong>Marking:</strong> ${b.optionA.marking}
            </div>

            <p style="margin: 0;"><strong>Q${b.qNum}. (b)</strong> ${b.optionB.questionText} <strong>[5 Marks]</strong></p>
            <div class="ans-box">
              <strong>Model Solution:</strong> ${b.optionB.answer}<br/>
              <strong>Marking:</strong> ${b.optionB.marking}
            </div>
          </div>
        `).join('')}

        <h3 style="color: #003366; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px;">PART – C ANSWERS (1 × 8 = 8 Marks)</h3>
        <div style="margin-bottom: 18px;">
          <p style="margin: 0;"><strong>Q${internalPaper.partC.qNum}. (a)</strong> ${internalPaper.partC.optionA.questionText} <strong>[8 Marks]</strong></p>
          <div class="ans-box">
            <strong>Model Solution:</strong> ${internalPaper.partC.optionA.answer}<br/>
            <strong>Marking:</strong> ${internalPaper.partC.optionA.marking}
          </div>

          <p style="margin: 0;"><strong>Q${internalPaper.partC.qNum}. (b)</strong> ${internalPaper.partC.optionB.questionText} <strong>[8 Marks]</strong></p>
          <div class="ans-box">
            <strong>Model Solution:</strong> ${internalPaper.partC.optionB.answer}<br/>
            <strong>Marking:</strong> ${internalPaper.partC.optionB.marking}
          </div>
        </div>

        <div style="text-align: center; margin-top: 40px; border-top: 1px solid #003366; padding-top: 8px; font-style: italic;">
          *** Confidential Evaluation Scheme • Source File: ${internalPaper.sourceFile} ***
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + htmlContent], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Answer_Key_${internalPaper.subjectCode}_Internal_20Marks.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloaded Answer Key file (.doc)!', 'success');
  };

  // Copy Active Text
  const handleCopyActiveText = () => {
    if (!internalPaper) return;

    if (activeFileTab === 'question_file') {
      const text = `
${internalPaper.institution}
${internalPaper.department}
${internalPaper.title}
Subject: [${internalPaper.subjectCode}] ${internalPaper.subject}
Time: ${internalPaper.duration} | Maximum Marks: ${internalPaper.maxMarks}

PART – A (2 × 1 = 2 Marks) - Answer ALL Questions
${internalPaper.partA.map(q => `${q.qNum}. ${q.questionText} (1)`).join('\n')}

PART – B (2 × 5 = 10 Marks) - Answer ALL Questions choosing either (a) or (b)
${internalPaper.partB.map(b => `${b.qNum}. (a) ${b.optionA.questionText} (5)\n   [ OR ]\n   (b) ${b.optionB.questionText} (5)`).join('\n\n')}

PART – C (1 × 8 = 8 Marks) - Answer Question 5 choosing either (a) or (b)
5. (a) ${internalPaper.partC.optionA.questionText} (8)
   [ OR ]
   (b) ${internalPaper.partC.optionB.questionText} (8)

*** End of Internal Assessment Question Paper ***
      `.trim();
      navigator.clipboard.writeText(text);
      showToast('Question Paper text copied to clipboard!', 'success');
    } else {
      const text = `
${internalPaper.institution}
${internalPaper.department}
CONFIDENTIAL MODEL ANSWER KEY & MARKING SCHEME
Subject: [${internalPaper.subjectCode}] ${internalPaper.subject} (Max Marks: ${internalPaper.maxMarks})

PART – A ANSWERS
${internalPaper.partA.map(q => `Q${q.qNum}: ${q.answer} [Marking: ${q.marking}]`).join('\n')}

PART – B ANSWERS
${internalPaper.partB.map(b => `Q${b.qNum}(a): ${b.optionA.answer} [${b.optionA.marking}]\nQ${b.qNum}(b): ${b.optionB.answer} [${b.optionB.marking}]`).join('\n\n')}

PART – C ANSWERS
Q5(a): ${internalPaper.partC.optionA.answer} [${internalPaper.partC.optionA.marking}]
Q5(b): ${internalPaper.partC.optionB.answer} [${internalPaper.partC.optionB.marking}]
      `.trim();
      navigator.clipboard.writeText(text);
      showToast('Answer Key text copied to clipboard!', 'success');
    }
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingBottom: '3rem' }}>
      
      {/* Header */}
      <div className="no-print">
        <PageHeader
          title="Question Generator"
          subtitle="Upload your document file to generate department internal assessment paper (2 × 1M + 2 × 5M [a/b] + 1 × 8M [a/b] = 20 Marks)"
          breadcrumbs={[
            { label: 'Dashboard', to: '/dashboard' },
            { label: 'Question Builder' },
            { label: 'Question Generator' }
          ]}
        />
      </div>

      {/* Clean Upload File & Generator Card (No Default Book) */}
      <div className="no-print card" style={{ padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
          
          {/* File Upload Dropzone */}
          <div>
            <label className="form-label form-label-required" style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <UploadCloud size={18} style={{ color: 'var(--primary-600)' }} />
              <span>Upload Textbook PDF / Course Notes File</span>
            </label>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.epub,.txt,.ppt,.pptx"
              style={{ display: 'none' }}
            />

            {uploadedFile ? (
              /* Active Uploaded File Display */
              <div
                style={{
                  border: '1.5px solid var(--primary-300)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--primary-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--primary-300)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-600)',
                      flexShrink: 0
                    }}
                  >
                    <FileText size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {uploadedFile.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      <span>{uploadedFile.size}</span>
                      <span>•</span>
                      <span style={{ color: 'var(--success-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <CheckCircle2 size={13} /> {uploadedFile.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--primary-300)',
                      color: 'var(--primary-700)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Change File
                  </button>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      color: '#ef4444',
                      padding: '0.4rem 0.65rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Remove File"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>
            ) : (
              /* Empty Dropzone State with Quick Clickable Presets */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: isDragging ? '2px dashed var(--primary-600)' : '2px dashed var(--border-medium)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.25rem 1.5rem',
                    textAlign: 'center',
                    backgroundColor: isDragging ? 'var(--primary-50)' : 'var(--bg-surface-hover)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <UploadCloud size={38} style={{ color: isDragging ? 'var(--primary-600)' : 'var(--primary-500)', marginBottom: '0.6rem' }} />
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Click to select or drag & drop your Course PDF file
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Upload Textbook PDF, Unit Material, or Lecture Notes (Supports PDF, DOCX, EPUB, PPT)
                  </div>
                </div>

                {/* 1-Click Sample Book Presets */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', padding: '0.25rem 0' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    ⚡ 1-Click Load Course Textbooks:
                  </span>
                  {SAMPLE_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      style={{
                        fontSize: '0.74rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--primary-700)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      📘 {preset.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Department Internal Assessment Pattern Summary */}
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-surface-hover)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Department Internal Assessment Blueprint (20 Marks Total)
              </span>
              <Badge variant="primary" size="sm">Internal Scheme</Badge>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '0.25rem' }}>
              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--primary-700)' }}>PART – A</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-primary)' }}>2 Questions × 1 Mark = <strong>2 Marks</strong></div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Short Answer (Q1, Q2)</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--primary-700)' }}>PART – B</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-primary)' }}>2 Questions × 5 Marks = <strong>10 Marks</strong></div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Either (a) or (b) (Q3, Q4)</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--primary-700)' }}>PART – C</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-primary)' }}>1 Question × 8 Marks = <strong>8 Marks</strong></div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Either (a) or (b) (Q5)</div>
              </div>
            </div>
          </div>

          {/* Submit Action Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon={Sparkles}
            disabled={isGenerating}
            style={{
              background: 'linear-gradient(135deg, #2563eb, #6366f1)',
              padding: '0.95rem',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.28)',
              cursor: 'pointer'
            }}
          >
            {isGenerating ? 'Generating 20-Mark Paper & Answers...' : '⚡ Generate Internal Question Paper & Answer Key (20 Marks)'}
          </Button>
        </form>
      </div>

      {/* AI Processing Modal */}
      <Modal
        isOpen={isGenerating}
        onClose={() => {}}
        title="Synthesizing Internal Assessment Paper..."
        subtitle="AI Engine reading uploaded file and formatting 20 Marks Paper"
        maxWidth="500px"
        icon={Sparkles}
      >
        <LoadingAnimation
          steps={aiSteps}
          currentStep={aiStep}
          title="Generating Questions & Solutions..."
          subtitle="Creating Part A (2×1M), Part B (2×5M [a/b]), Part C (1×8M [a/b])"
        />
      </Modal>

      {/* Separate Question File and Answer File Results Section */}
      {showResults && internalPaper && (
        <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Dual File Switcher Toolbar */}
          <div
            className="no-print card"
            style={{
              padding: '1.1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              backgroundColor: 'var(--bg-surface)'
            }}
          >
            {/* File Switcher Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-surface-hover)', padding: '0.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-medium)' }}>
              <button
                type="button"
                onClick={() => setActiveFileTab('question_file')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: activeFileTab === 'question_file' ? 700 : 500,
                  backgroundColor: activeFileTab === 'question_file' ? 'var(--primary-600)' : 'transparent',
                  color: activeFileTab === 'question_file' ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <FileText size={16} />
                <span>File 1: Question Paper (Questions Only)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFileTab('answer_file')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: activeFileTab === 'answer_file' ? 700 : 500,
                  backgroundColor: activeFileTab === 'answer_file' ? '#0284c7' : 'transparent',
                  color: activeFileTab === 'answer_file' ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <KeyRound size={16} />
                <span>File 2: Answer Key (Solutions Only)</span>
              </button>
            </div>

            {/* Separate Download Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {activeFileTab === 'question_file' ? (
                <>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={Download}
                    onClick={handlePrint}
                    style={{
                      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                    }}
                  >
                    Download Question Paper PDF
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={FileCode}
                    onClick={handleDownloadQuestionDoc}
                  >
                    Download Word (.doc)
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={Printer}
                    onClick={handlePrint}
                  >
                    Print
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={Copy}
                    onClick={handleCopyActiveText}
                  >
                    Copy Questions
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={Download}
                    onClick={handlePrint}
                    style={{
                      background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                      boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)'
                    }}
                  >
                    Download Answer Key PDF
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={FileCode}
                    onClick={handleDownloadAnswerDoc}
                  >
                    Download Word (.doc)
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={Printer}
                    onClick={handlePrint}
                  >
                    Print
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={Copy}
                    onClick={handleCopyActiveText}
                  >
                    Copy Answers
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FILE 1: QUESTION PAPER (2 x 1M, 2 x 5M [a/b], 1 x 8M [a/b] — 20 MARKS)     */}
          {/* ========================================================================= */}
          {activeFileTab === 'question_file' && (
            <div
              className="card print-only-wrapper"
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '2.5rem 3.5rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)',
                fontFamily: '"Times New Roman", Times, serif',
                lineHeight: 1.6
              }}
            >
              {/* College Header */}
              <div style={{ textAlign: 'center', borderBottom: '2px solid #000000', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0, color: '#000000' }}>
                  {internalPaper.institution}
                </h2>
                <div style={{ fontSize: '0.85rem', fontStyle: 'italic', margin: '0.2rem 0' }}>
                  {internalPaper.affiliate}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.25rem 0', textTransform: 'uppercase' }}>
                  {internalPaper.department}
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, marginTop: '0.35rem', textTransform: 'uppercase' }}>
                  {internalPaper.title}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                  B.Sc. / M.Sc. Computer Science Degree Examination
                </div>
              </div>

              {/* Meta Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #000000', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 700 }}>
                <div>
                  COURSE: [{internalPaper.subjectCode}] {internalPaper.subject.toUpperCase()}
                </div>
                <div>
                  TIME: {internalPaper.duration} | MAX MARKS: {internalPaper.maxMarks} MARKS
                </div>
              </div>

              {/* PART A: 2 x 1 Mark = 2 Marks */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.95rem', margin: '0.75rem 0 0.35rem', textTransform: 'uppercase' }}>
                  PART – A (2 × 1 = 2 Marks)
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                  Answer ALL questions. Each question carries 1 mark.
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {internalPaper.partA.map(q => (
                    <div key={q.qNum} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.6rem' }}>
                        <span style={{ fontWeight: 700, minWidth: '22px' }}>{q.qNum}.</span>
                        <span style={{ fontSize: '0.98rem', fontWeight: 500 }}>{q.questionText}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0, fontSize: '0.84rem', fontWeight: 700 }}>
                        <span style={{ color: '#475569' }}>[{q.bloom?.split(' ')[0]}]</span>
                        <span>(1)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PART B: 2 x 5 Marks = 10 Marks (Either (a) or (b)) */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.95rem', margin: '0.75rem 0 0.35rem', textTransform: 'uppercase' }}>
                  PART – B (2 × 5 = 10 Marks)
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                  Answer ALL questions choosing either (a) or (b). Each question carries 5 marks.
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {internalPaper.partB.map(b => (
                    <div key={b.qNum} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {/* Option A */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.6rem' }}>
                          <span style={{ fontWeight: 700, minWidth: '22px' }}>{b.qNum}.</span>
                          <span style={{ fontWeight: 700 }}>{b.optionA.label}</span>
                          <span style={{ fontSize: '0.98rem' }}>{b.optionA.questionText}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0, fontSize: '0.84rem', fontWeight: 700 }}>
                          <span style={{ color: '#475569' }}>[{b.optionA.bloom?.split(' ')[0]}]</span>
                          <span>(5)</span>
                        </div>
                      </div>

                      <div style={{ textAlign: 'center', fontWeight: 700, fontStyle: 'italic', fontSize: '0.88rem' }}>
                        [ OR ]
                      </div>

                      {/* Option B */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.6rem', paddingLeft: '1.75rem' }}>
                          <span style={{ fontWeight: 700 }}>{b.optionB.label}</span>
                          <span style={{ fontSize: '0.98rem' }}>{b.optionB.questionText}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0, fontSize: '0.84rem', fontWeight: 700 }}>
                          <span style={{ color: '#475569' }}>[{b.optionB.bloom?.split(' ')[0]}]</span>
                          <span>(5)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PART C: 1 x 8 Marks = 8 Marks (Either (a) or (b)) */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.95rem', margin: '0.75rem 0 0.35rem', textTransform: 'uppercase' }}>
                  PART – C (1 × 8 = 8 Marks)
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                  Answer Question 5 choosing either (a) or (b). Question carries 8 marks.
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {/* Option A */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      <span style={{ fontWeight: 700, minWidth: '22px' }}>{internalPaper.partC.qNum}.</span>
                      <span style={{ fontWeight: 700 }}>{internalPaper.partC.optionA.label}</span>
                      <span style={{ fontSize: '0.98rem' }}>{internalPaper.partC.optionA.questionText}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0, fontSize: '0.84rem', fontWeight: 700 }}>
                      <span style={{ color: '#475569' }}>[{internalPaper.partC.optionA.bloom?.split(' ')[0]}]</span>
                      <span>(8)</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontWeight: 700, fontStyle: 'italic', fontSize: '0.88rem' }}>
                    [ OR ]
                  </div>

                  {/* Option B */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.6rem', paddingLeft: '1.75rem' }}>
                      <span style={{ fontWeight: 700 }}>{internalPaper.partC.optionB.label}</span>
                      <span style={{ fontSize: '0.98rem' }}>{internalPaper.partC.optionB.questionText}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0, fontSize: '0.84rem', fontWeight: 700 }}>
                      <span style={{ color: '#475569' }}>[{internalPaper.partC.optionB.bloom?.split(' ')[0]}]</span>
                      <span>(8)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{ textAlign: 'center', borderTop: '1px solid #000000', paddingTop: '0.65rem', marginTop: '2.5rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
                *** End of Question Paper • Reference Source: {internalPaper.sourceFile} ***
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* FILE 2: ANSWER KEY & MARKING SCHEME (SOLUTIONS ONLY — FOR EVALUATORS)    */}
          {/* ========================================================================= */}
          {activeFileTab === 'answer_file' && (
            <div
              className="card print-only-wrapper"
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '2.5rem 3.5rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid #0284c7',
                boxShadow: 'var(--shadow-md)',
                fontFamily: '"Times New Roman", Times, serif',
                lineHeight: 1.6
              }}
            >
              {/* Evaluator Header */}
              <div style={{ textAlign: 'center', borderBottom: '2px solid #0284c7', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0, color: '#000000' }}>
                  {internalPaper.institution}
                </h2>
                <div style={{ fontSize: '0.85rem', fontStyle: 'italic', margin: '0.2rem 0' }}>
                  {internalPaper.affiliate}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.25rem 0', textTransform: 'uppercase' }}>
                  {internalPaper.department}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, marginTop: '0.35rem', color: '#0369a1', textTransform: 'uppercase' }}>
                  CONFIDENTIAL MODEL ANSWER KEY & MARKING SCHEME (20 MARKS)
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#64748b' }}>
                  Faculty Evaluation & Grading Scheme
                </div>
              </div>

              {/* Meta Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #0284c7', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 700 }}>
                <div>
                  SUBJECT: [{internalPaper.subjectCode}] {internalPaper.subject.toUpperCase()}
                </div>
                <div>
                  MAX MARKS: {internalPaper.maxMarks} MARKS
                </div>
              </div>

              {/* PART A ANSWERS */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ color: '#0369a1', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', fontSize: '1rem', textTransform: 'uppercase' }}>
                  PART – A MODEL ANSWERS (2 × 1 = 2 Marks)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.75rem' }}>
                  {internalPaper.partA.map(q => (
                    <div key={q.qNum} style={{ backgroundColor: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '6px', borderLeft: '3px solid #0284c7' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                        Q{q.qNum}. {q.questionText} [1 Mark]
                      </div>
                      <div style={{ color: '#1e293b', fontSize: '0.9rem' }}>
                        <strong>Answer:</strong> {q.answer}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.3rem', fontStyle: 'italic' }}>
                        Marking: {q.marking}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PART B ANSWERS */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ color: '#0369a1', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', fontSize: '1rem', textTransform: 'uppercase' }}>
                  PART – B MODEL ANSWERS (2 × 5 = 10 Marks — Either/Or Choice)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.75rem' }}>
                  {internalPaper.partB.map(b => (
                    <div key={b.qNum} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc' }}>
                      <div style={{ fontWeight: 800, color: '#0369a1', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                        QUESTION #{b.qNum} EVALUATION SCHEME
                      </div>

                      {/* Option A Answer */}
                      <div style={{ backgroundColor: '#ffffff', padding: '0.85rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.75rem' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                          Option (a): {b.optionA.questionText} [5 Marks]
                        </div>
                        <div style={{ color: '#1e293b', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          <strong>Model Solution:</strong> {b.optionA.answer}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.35rem', fontStyle: 'italic' }}>
                          <strong>Marking Rubric:</strong> {b.optionA.marking}
                        </div>
                      </div>

                      {/* Option B Answer */}
                      <div style={{ backgroundColor: '#ffffff', padding: '0.85rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                          Option (b): {b.optionB.questionText} [5 Marks]
                        </div>
                        <div style={{ color: '#1e293b', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          <strong>Model Solution:</strong> {b.optionB.answer}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.35rem', fontStyle: 'italic' }}>
                          <strong>Marking Rubric:</strong> {b.optionB.marking}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PART C ANSWERS */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ color: '#0369a1', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', fontSize: '1rem', textTransform: 'uppercase' }}>
                  PART – C MODEL ANSWERS (1 × 8 = 8 Marks — Either/Or Choice)
                </h3>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc', marginTop: '0.75rem' }}>
                  <div style={{ fontWeight: 800, color: '#0369a1', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    QUESTION #5 EVALUATION SCHEME
                  </div>

                  {/* Option A Answer */}
                  <div style={{ backgroundColor: '#ffffff', padding: '0.85rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.75rem' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      Option (a): {internalPaper.partC.optionA.questionText} [8 Marks]
                    </div>
                    <div style={{ color: '#1e293b', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <strong>Model Solution:</strong> {internalPaper.partC.optionA.answer}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.35rem', fontStyle: 'italic' }}>
                      <strong>Marking Rubric:</strong> {internalPaper.partC.optionA.marking}
                    </div>
                  </div>

                  {/* Option B Answer */}
                  <div style={{ backgroundColor: '#ffffff', padding: '0.85rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      Option (b): {internalPaper.partC.optionB.questionText} [8 Marks]
                    </div>
                    <div style={{ color: '#1e293b', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <strong>Model Solution:</strong> {internalPaper.partC.optionB.answer}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.35rem', fontStyle: 'italic' }}>
                      <strong>Marking Rubric:</strong> {internalPaper.partC.optionB.marking}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{ textAlign: 'center', borderTop: '1px solid #0284c7', paddingTop: '0.65rem', marginTop: '2.5rem', fontSize: '0.8rem', fontStyle: 'italic', color: '#64748b' }}>
                *** Confidential Faculty Evaluation Scheme • Source: {internalPaper.sourceFile} ***
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionGenerator;

`

## File: src\pages\QuestionPaperBuilder.jsx

`jsx
import React, { useState, useMemo } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import {
  FileText,
  Save,
  Send,
  Printer,
  Eye,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Clock,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { CS_PROGRAMS, SUBJECTS } from '../data/mockData';

export const QuestionPaperBuilder = () => {
  const { questionBank, saveQuestionPaper, submitPaperToHOD, showToast, subjects = [] } = useAcademic();
  const { currentUser } = useAuth();

  // Paper Form Metadata
  const [selectedProgram, setSelectedProgram] = useState('UG_BSCCS');
  const [selectedPaperId] = useState('');
  const [title, setTitle] = useState('Continuous Internal Assessment Blueprint');
  const [subject, setSubject] = useState('Programming in C & Data Structures');
  const [subjectCode, setSubjectCode] = useState('CS101');
  const [semester, setSemester] = useState('Semester I');
  const [year, setYear] = useState('I');
  const [examType, setExamType] = useState('Internal Exam');
  const [duration, setDuration] = useState('60 Minutes');
  const [maxMarks, setMaxMarks] = useState(20);

  const currentProgram = CS_PROGRAMS.find(p => p.id === selectedProgram) || CS_PROGRAMS[0];
  const availableProgramSubjects = (subjects.length > 0 ? subjects : SUBJECTS).filter(s => s.program === selectedProgram);

  const handleProgramChange = (progId) => {
    setSelectedProgram(progId);
    const subjs = (subjects.length > 0 ? subjects : SUBJECTS).filter(s => s.program === progId);
    if (subjs.length > 0) {
      setSubject(subjs[0].name);
      setSubjectCode(subjs[0].code);
      setSemester(subjs[0].semester);
      setYear(subjs[0].year);
    }
  };

  const handleExamTypeChange = (type) => {
    setExamType(type);
    if (type === 'Internal Exam') {
      setMaxMarks(20);
      setDuration('60 Minutes');
    } else if (type === 'Semester Exam') {
      setMaxMarks(70);
      setDuration('180 Minutes');
    }
  };

  const handleMaxMarksChange = (marks) => {
    const num = parseInt(marks, 10);
    setMaxMarks(num);
    if (num === 20) {
      setExamType('Internal Exam');
      setDuration('60 Minutes');
    } else if (num === 70) {
      setExamType('Semester Exam');
      setDuration('180 Minutes');
    }
  };

  // Blueprint Structure (Clean Empty Baseline)
  const [partAQuestions, setPartAQuestions] = useState([]);
  const [partBQuestions, setPartBQuestions] = useState([]);
  const [partCQuestions, setPartCQuestions] = useState([]);

  // Apply Full Exam Format Blueprint Preset (20M Internal vs 70M Semester)
  const applyExamFormatBlueprint = (format) => {
    const targetType = format || examType;
    const isInternal = targetType === 'Internal Exam';
    setExamType(targetType);
    setMaxMarks(isInternal ? 20 : 70);
    setDuration(isInternal ? '60 Minutes' : '180 Minutes');

    const subQuestions = (questionBank || []).filter(q =>
      (q.subject && subject && q.subject.toLowerCase().includes(subject.toLowerCase().split(' ')[0])) || true
    );

    const partAQ = [];
    const partBQ = [];
    const partCQ = [];

    if (isInternal) {
      // 1. Internal Exam Part A: 2 questions × 1 Mark = 2 Marks
      for (let i = 0; i < 2; i++) {
        const candidate = subQuestions.find(q => (q.marks === 1 || q.marks === 2) && !partAQ.some(x => x.text === q.questionText));
        if (candidate) {
          partAQ.push({
            id: `preset_ia_a_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 1,
            unit: candidate.unit || `Unit ${i + 1}`,
            bloomLevel: candidate.bloomLevel || 'Remember',
            topic: candidate.topic || `Unit ${i + 1} Fundamentals`
          });
        } else {
          partAQ.push({
            id: `preset_ia_a_${i}_${Date.now()}`,
            text: `Define the core technical term and objective of Unit ${i + 1} in ${subject}.`,
            marks: 1,
            unit: `Unit ${i + 1}`,
            bloomLevel: 'Remember',
            topic: `Unit ${i + 1} Definitions`
          });
        }
      }

      // 2. Internal Exam Part B: 2 questions × 5 Marks = 10 Marks
      for (let i = 0; i < 2; i++) {
        const candidate = subQuestions.find(q => q.marks === 5 && !partBQ.some(x => x.text === q.questionText));
        if (candidate) {
          partBQ.push({
            id: `preset_ia_b_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 5,
            unit: candidate.unit || `Unit ${i + 1}`,
            bloomLevel: candidate.bloomLevel || 'Understand',
            topic: candidate.topic || `Unit ${i + 1} Principles`
          });
        } else {
          partBQ.push({
            id: `preset_ia_b_${i}_${Date.now()}`,
            text: `Explain in detail the operational mechanism and system architecture of Unit ${i + 1} in ${subject}.`,
            marks: 5,
            unit: `Unit ${i + 1}`,
            bloomLevel: 'Understand',
            topic: `Unit ${i + 1} Architecture`
          });
        }
      }

      // 3. Internal Exam Part C: 1 question × 8 Marks = 8 Marks
      const candidateC = subQuestions.find(q => (q.marks === 8 || q.marks === 10) && !partCQ.some(x => x.text === q.questionText));
      if (candidateC) {
        partCQ.push({
          id: `preset_ia_c_0_${Date.now()}`,
          text: candidateC.questionText,
          marks: 8,
          unit: candidateC.unit || 'Unit 2',
          bloomLevel: candidateC.bloomLevel || 'Analyze',
          topic: candidateC.topic || 'System Design & Case Analysis'
        });
      } else {
        partCQ.push({
          id: `preset_ia_c_0_${Date.now()}`,
          text: `Elaborate comprehensively with complete architectural diagrams and implementation examples the framework in ${subject}.`,
          marks: 8,
          unit: 'Unit 2',
          bloomLevel: 'Analyze',
          topic: 'Comprehensive Implementation'
        });
      }

      setPartAQuestions(partAQ);
      setPartBQuestions(partBQ);
      setPartCQuestions(partCQ);
      showToast('Loaded 20 Marks Internal Exam Blueprint (2×1M + 2×5M + 1×8M = 20 Marks)!', 'success');
    } else {
      // 1. Semester Exam Part A: 15 questions × 1 Mark (One-Word / Objective) = 15 Marks
      for (let i = 0; i < 15; i++) {
        const unitNum = (i % 5) + 1;
        const candidate = subQuestions.find(q => (q.marks === 1 || q.marks <= 2) && !partAQ.some(x => x.text === q.questionText));
        if (candidate) {
          partAQ.push({
            id: `preset_sem_a_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 1,
            unit: candidate.unit || `Unit ${unitNum}`,
            bloomLevel: candidate.bloomLevel || 'Remember',
            topic: candidate.topic || `Unit ${unitNum} Key Term`
          });
        } else {
          partAQ.push({
            id: `preset_sem_a_${i}_${Date.now()}`,
            text: `State the primary definition / function of key concept #${(i % 3) + 1} in Unit ${unitNum} of ${subject}.`,
            marks: 1,
            unit: `Unit ${unitNum}`,
            bloomLevel: 'Remember',
            topic: `Unit ${unitNum} Key Term`
          });
        }
      }

      // 2. Semester Exam Part B: 5 questions × 5 Marks = 25 Marks
      for (let i = 0; i < 5; i++) {
        const unitNum = i + 1;
        const candidate = subQuestions.find(q => q.marks === 5 && !partBQ.some(x => x.text === q.questionText));
        if (candidate) {
          partBQ.push({
            id: `preset_sem_b_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 5,
            unit: candidate.unit || `Unit ${unitNum}`,
            bloomLevel: candidate.bloomLevel || 'Understand',
            topic: candidate.topic || `Unit ${unitNum} Theory`
          });
        } else {
          partBQ.push({
            id: `preset_sem_b_${i}_${Date.now()}`,
            text: `Explain with illustrative diagrams the procedural workflow and theoretical design of Unit ${unitNum} in ${subject}.`,
            marks: 5,
            unit: `Unit ${unitNum}`,
            bloomLevel: 'Understand',
            topic: `Unit ${unitNum} Theory`
          });
        }
      }

      // 3. Semester Exam Part C: 5 questions × 8 Marks = 40 Marks
      for (let i = 0; i < 5; i++) {
        const unitNum = i + 1;
        const candidate = subQuestions.find(q => (q.marks === 8 || q.marks === 10) && !partCQ.some(x => x.text === q.questionText));
        if (candidate) {
          partCQ.push({
            id: `preset_sem_c_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 8,
            unit: candidate.unit || `Unit ${unitNum}`,
            bloomLevel: candidate.bloomLevel || 'Analyze',
            topic: candidate.topic || `Unit ${unitNum} Case Study`
          });
        } else {
          partCQ.push({
            id: `preset_sem_c_${i}_${Date.now()}`,
            text: `Critically analyze, evaluate, and formulate a comprehensive technical design for ${subject} Unit ${unitNum} problem scenarios.`,
            marks: 8,
            unit: `Unit ${unitNum}`,
            bloomLevel: 'Evaluate',
            topic: `Unit ${unitNum} Advanced Application`
          });
        }
      }

      setPartAQuestions(partAQ);
      setPartBQuestions(partBQ);
      setPartCQuestions(partCQ);
      showToast('Loaded 70 Marks Semester Exam Blueprint (15×1M + 5×5M + 5×8M = 70 Marks)!', 'success');
    }
  };

  // Modals
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showAddFromBankModal, setShowAddFromBankModal] = useState(false);
  const [bankModalFilter, setBankModalFilter] = useState('all'); // 'all' | 'unused' | 'used'
  const [targetSection, setTargetSection] = useState('A'); // 'A' | 'B' | 'C'

  // Subject change helper
  const handleSubjectChange = (newSubjectName) => {
    setSubject(newSubjectName);
    const foundSub = SUBJECTS.find(s => s.name === newSubjectName);
    if (foundSub) {
      setSubjectCode(foundSub.code);
      setSemester(foundSub.semester);
      setYear(foundSub.year);
    }
  };

  // All questions currently in the active paper blueprint
  const allCurrentPaperQuestions = useMemo(() => {
    return [...partAQuestions, ...partBQuestions, ...partCQuestions];
  }, [partAQuestions, partBQuestions, partCQuestions]);

  // Unit coverage analysis for question paper
  const unitCoverageAnalysis = useMemo(() => {
    const units = [1, 2, 3, 4, 5];
    const unitBreakdown = units.map(unitNum => {
      const unitKey = `Unit ${unitNum}`;
      const questionsInPaperCount = allCurrentPaperQuestions.filter(
        q => q.unit === unitKey || q.unit === `Unit ${unitNum}`
      ).length;
      return {
        unitNumber: unitNum,
        unitKey,
        questionsInPaperCount
      };
    });
    return { unitBreakdown };
  }, [allCurrentPaperQuestions]);

  // Calculate live marks
  const totalPartA = partAQuestions.reduce((acc, q) => acc + (q.marks !== undefined ? q.marks : 1), 0);
  const totalPartB = partBQuestions.reduce((acc, q) => acc + (q.marks !== undefined ? q.marks : 5), 0);
  const totalPartC = partCQuestions.reduce((acc, q) => acc + (q.marks !== undefined ? q.marks : 8), 0);
  const currentTotalMarks = totalPartA + totalPartB + totalPartC;
  const isMarksBalanced = currentTotalMarks === parseInt(maxMarks, 10);

  const handleSaveDraft = () => {
    saveQuestionPaper({
      id: selectedPaperId || 'qp_' + Date.now(),
      title,
      subject,
      subjectCode,
      semester,
      year,
      examType,
      duration,
      maxMarks: parseInt(maxMarks, 10),
      totalMarks: currentTotalMarks,
      author: currentUser?.name || 'Prof. Alan Davis',
      department: currentUser?.deptCode || 'CSE',
      status: 'Draft',
      blueprint: {
        partA: { title: 'PART A', count: partAQuestions.length, total: totalPartA, questions: partAQuestions },
        partB: { title: 'PART B', count: partBQuestions.length, total: totalPartB, questions: partBQuestions },
        partC: { title: 'PART C', count: partCQuestions.length, total: totalPartC, questions: partCQuestions }
      }
    });
    showToast('Question paper blueprint draft saved successfully!', 'success');
  };

  const handleSubmitToHOD = () => {
    if (!isMarksBalanced) {
      showToast(`Total marks (${currentTotalMarks}M) must match Maximum Marks (${maxMarks}M) before submitting.`, 'warning');
      return;
    }
    handleSaveDraft();
    submitPaperToHOD(selectedPaperId || 'qp_101');
  };

  const handleAddQuestionToSection = (q) => {
    const formatted = {
      id: 'custom_' + Date.now(),
      text: q.questionText,
      marks: q.marks,
      unit: q.unit,
      bloomLevel: q.bloomLevel,
      topic: q.topic || ''
    };

    if (targetSection === 'A') setPartAQuestions(prev => [...prev, formatted]);
    if (targetSection === 'B') setPartBQuestions(prev => [...prev, formatted]);
    if (targetSection === 'C') setPartCQuestions(prev => [...prev, formatted]);

    setShowAddFromBankModal(false);
    showToast(`Added question to PART ${targetSection}`, 'success');
  };

  const handleRemoveQuestion = (section, qId) => {
    if (section === 'A') setPartAQuestions(prev => prev.filter(q => q.id !== qId));
    if (section === 'B') setPartBQuestions(prev => prev.filter(q => q.id !== qId));
    if (section === 'C') setPartCQuestions(prev => prev.filter(q => q.id !== qId));
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Exam Paper Builder"
        subtitle="Visual blueprint architect with real-time unit coverage, exact section marks balancing & HOD submission"
        breadcrumbs={[
          { label: 'Smart Timetable', to: '/timetable' },
          { label: 'Exam Paper Builder' }
        ]}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              icon={Eye}
              onClick={() => setShowPreviewModal(true)}
            >
              Print Preview
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={Save}
              onClick={handleSaveDraft}
            >
              Save Draft
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Send}
              onClick={handleSubmitToHOD}
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
            >
              Submit to HOD
            </Button>
          </>
        }
      />

      {/* Blueprint Header Settings Bar */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Degree / Course</label>
            <select
              className="form-select"
              value={selectedProgram}
              onChange={(e) => handleProgramChange(e.target.value)}
              style={{ fontWeight: 600 }}
            >
              {CS_PROGRAMS.map(prog => (
                <option key={prog.id} value={prog.id}>
                  {prog.name} ({prog.durationYears}-Yr {prog.degree === 'B.Sc.' ? 'UG' : 'PG'})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Subject</label>
            <select
              className="form-select"
              value={subject}
              onChange={(e) => handleSubjectChange(e.target.value)}
            >
              {availableProgramSubjects.map(sub => (
                <option key={sub.code} value={sub.name}>
                  {sub.code} - {sub.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Semester & Year</label>
            <select className="form-select" value={semester} onChange={(e) => setSemester(e.target.value)}>
              {selectedProgram === 'UG_BSCCS' ? (
                <>
                  <option value="Semester I">Sem I (Year I)</option>
                  <option value="Semester II">Sem II (Year I)</option>
                  <option value="Semester III">Sem III (Year II)</option>
                  <option value="Semester IV">Sem IV (Year II)</option>
                  <option value="Semester V">Sem V (Year III)</option>
                  <option value="Semester VI">Sem VI (Year III)</option>
                </>
              ) : (
                <>
                  <option value="Semester I">Sem I (Year I PG)</option>
                  <option value="Semester II">Sem II (Year I PG)</option>
                  <option value="Semester III">Sem III (Year II PG)</option>
                  <option value="Semester IV">Sem IV (Year II PG)</option>
                </>
              )}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Assessment Type</label>
            <select className="form-select" value={examType} onChange={(e) => handleExamTypeChange(e.target.value)}>
              <option value="Internal Exam">Internal Exam (20 Marks)</option>
              <option value="Semester Exam">Semester Exam (70 Marks)</option>
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Duration</label>
            <select className="form-select" value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="60 Minutes">60 Minutes (1 Hour)</option>
              <option value="90 Minutes">90 Minutes (1.5 Hours)</option>
              <option value="120 Minutes">120 Minutes (2 Hours)</option>
              <option value="180 Minutes">180 Minutes (3 Hours)</option>
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Max Marks</label>
            <select className="form-select" value={maxMarks} onChange={(e) => handleMaxMarksChange(e.target.value)}>
              <option value="20">20 Marks (Internal Exam)</option>
              <option value="70">70 Marks (Semester Exam)</option>
            </select>
          </div>
        </div>

        {/* Quick Format Blueprint Preset Badges/Buttons */}
        <div style={{ marginTop: '1.15rem', paddingTop: '0.95rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              <Sparkles size={16} style={{ color: 'var(--primary-600)' }} />
              <span>Blueprint Presets:</span>
            </div>
            <button
              type="button"
              onClick={() => applyExamFormatBlueprint('Internal Exam')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: examType === 'Internal Exam' ? '1.5px solid var(--primary-600)' : '1px solid var(--border-medium)',
                background: examType === 'Internal Exam' ? 'var(--primary-50)' : 'var(--bg-app)',
                color: examType === 'Internal Exam' ? 'var(--primary-700)' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              📝 20M Internal Exam (2 × 1M + 2 × 5M + 1 × 8M)
            </button>
            <button
              type="button"
              onClick={() => applyExamFormatBlueprint('Semester Exam')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: examType === 'Semester Exam' ? '1.5px solid var(--primary-600)' : '1px solid var(--border-medium)',
                background: examType === 'Semester Exam' ? 'var(--primary-50)' : 'var(--bg-app)',
                color: examType === 'Semester Exam' ? 'var(--primary-700)' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              🎓 70M Semester Exam (15 × 1M + 5 × 5M + 5 × 8M)
            </button>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Active Format: <strong style={{ color: 'var(--primary-600)', fontWeight: 700 }}>{examType} • {maxMarks} Marks • {duration}</strong>
          </div>
        </div>
      </div>

      {/* Real-time Marks & Blueprint Meter Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: isMarksBalanced ? 'var(--success-50)' : 'var(--warning-50)',
          border: `1px solid ${isMarksBalanced ? 'var(--success-100)' : 'var(--warning-100)'}`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Target Maximum Marks</span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{maxMarks} Marks</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Current Total Marks</span>
            <strong style={{ fontSize: '1.25rem', color: isMarksBalanced ? 'var(--success-600)' : 'var(--warning-600)' }}>
              {currentTotalMarks} Marks
            </strong>
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Questions Count</span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              {partAQuestions.length + partBQuestions.length + partCQuestions.length} Questions
            </strong>
          </div>
        </div>

        <div>
          {isMarksBalanced ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--success-600)', fontWeight: 600, fontSize: '0.88rem' }}>
              <CheckCircle2 size={18} /> Blueprint Marks Balanced
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--warning-600)', fontWeight: 600, fontSize: '0.88rem' }}>
              <AlertCircle size={18} /> Point Difference: {Math.abs(currentTotalMarks - maxMarks)} Marks
            </div>
          )}
        </div>
      </div>

      {/* Section Builders: PART A, PART B, PART C */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* PART A */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>A</span>
              <div>
                <span>PART A - One-Word / Objective Questions</span>
                <div className="card-subtitle">
                  {partAQuestions.length} Questions • 1 Mark Each • Section Total: {totalPartA} Marks • (Target: {examType === 'Internal Exam' ? '2 Questions (2M)' : '15 Questions (15M)'})
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => {
                setTargetSection('A');
                setShowAddFromBankModal(true);
              }}
            >
              Add Question
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {partAQuestions.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No questions added to PART A yet. Click <strong>+ Add Question</strong> or use <strong>✨ AI Auto-Balance & Fill</strong> above.
              </div>
            ) : (
              partAQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-surface-hover)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary-600)', minWidth: '24px' }}>
                      Q{idx + 1}.
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{q.text}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="neutral">{q.unit}</Badge>
                    <Badge variant="purple">{q.bloomLevel}</Badge>
                    <Badge variant="primary">{q.marks !== undefined ? q.marks : 1}M</Badge>
                    <button
                      onClick={() => handleRemoveQuestion('A', q.id)}
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: 'var(--danger-500)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PART B */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-indigo-light)', color: 'var(--accent-indigo)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>B</span>
              <div>
                <span>PART B - Descriptive / Analytical Questions</span>
                <div className="card-subtitle">
                  {partBQuestions.length} Questions • 5 Marks Each • Section Total: {totalPartB} Marks • (Target: {examType === 'Internal Exam' ? '2 Questions (10M)' : '5 Questions (25M)'})
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => {
                setTargetSection('B');
                setShowAddFromBankModal(true);
              }}
            >
              Add Question
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {partBQuestions.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No questions added to PART B yet. Click <strong>+ Add Question</strong> or select from unused unit topics.
              </div>
            ) : (
              partBQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-surface-hover)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-indigo)', minWidth: '24px' }}>
                      Q{partAQuestions.length + idx + 1}.
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{q.text}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="neutral">{q.unit}</Badge>
                    <Badge variant="purple">{q.bloomLevel}</Badge>
                    <Badge variant="primary">{q.marks !== undefined ? q.marks : 5}M</Badge>
                    <button
                      onClick={() => handleRemoveQuestion('B', q.id)}
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: 'var(--danger-500)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PART C */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-purple-light)', color: 'var(--accent-purple)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>C</span>
              <div>
                <span>PART C - Comprehensive / 8-Mark Essay Questions</span>
                <div className="card-subtitle">
                  {partCQuestions.length} Questions • 8 Marks Each • Section Total: {totalPartC} Marks • (Target: {examType === 'Internal Exam' ? '1 Question (8M)' : '5 Questions (40M)'})
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => {
                setTargetSection('C');
                setShowAddFromBankModal(true);
              }}
            >
              Add Question
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {partCQuestions.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No questions added to PART C yet. Click <strong>+ Add Question</strong> or design custom long-form questions.
              </div>
            ) : (
              partCQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-surface-hover)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-purple)', minWidth: '24px' }}>
                      Q{partAQuestions.length + partBQuestions.length + idx + 1}.
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{q.text}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="neutral">{q.unit}</Badge>
                    <Badge variant="purple">{q.bloomLevel}</Badge>
                    <Badge variant="primary">{q.marks}M</Badge>
                    <button
                      onClick={() => handleRemoveQuestion('C', q.id)}
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: 'var(--danger-500)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add From Question Bank Modal */}
      <Modal
        isOpen={showAddFromBankModal}
        onClose={() => setShowAddFromBankModal(false)}
        title={`Add Question to PART ${targetSection}`}
        subtitle={`Select questions from repository for ${subject}`}
        maxWidth="680px"
        icon={Plus}
      >
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setBankModalFilter('all')}
            style={{
              padding: '0.3rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: bankModalFilter === 'all' ? 'var(--primary-100)' : 'transparent',
              color: bankModalFilter === 'all' ? 'var(--primary-700)' : 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            All Questions ({questionBank.length})
          </button>
          <button
            type="button"
            onClick={() => setBankModalFilter('unused')}
            style={{
              padding: '0.3rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: bankModalFilter === 'unused' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
              color: bankModalFilter === 'unused' ? '#b45309' : 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            ⭐ Unused Course Units (Recommended)
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '420px', overflowY: 'auto' }}>
          {questionBank
            .filter(q => {
              if (bankModalFilter === 'unused') {
                const isUnitUnused = unitCoverageAnalysis.unitBreakdown.some(u => u.unitKey === q.unit && u.questionsInPaperCount === 0);
                return isUnitUnused;
              }
              return true;
            })
            .map((q) => {
              const isAlreadyInBlueprint = allCurrentPaperQuestions.some(pq => pq.text === q.questionText);
              const isUnusedUnit = unitCoverageAnalysis.unitBreakdown.some(u => u.unitKey === q.unit && u.questionsInPaperCount === 0);

              return (
                <div
                  key={q.id}
                  style={{
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${isUnusedUnit ? 'rgba(245, 158, 11, 0.4)' : 'var(--border-light)'}`,
                    backgroundColor: isUnusedUnit ? 'rgba(245, 158, 11, 0.04)' : 'var(--bg-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {q.questionText}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <Badge variant="primary">{q.marks}M</Badge>
                      <Badge variant="neutral">{q.unit}</Badge>
                      <Badge variant="purple">{q.bloomLevel}</Badge>
                      {isUnusedUnit && (
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#b45309', backgroundColor: 'rgba(245, 158, 11, 0.15)', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-xs)' }}>
                          ⭐ Fills Unit Gap
                        </span>
                      )}
                      {isAlreadyInBlueprint && (
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-xs)' }}>
                          ✓ In Blueprint
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant={isAlreadyInBlueprint ? 'outline' : 'primary'}
                    size="sm"
                    disabled={isAlreadyInBlueprint}
                    onClick={() => handleAddQuestionToSection(q)}
                  >
                    {isAlreadyInBlueprint ? 'Added' : '+ Add'}
                  </Button>
                </div>
              );
            })}
        </div>
      </Modal>

      {/* Live Print-Ready Preview Modal */}
      <Modal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        title="Official Examination Question Paper Preview"
        maxWidth="750px"
        icon={GraduationCap}
        footer={
          <>
            <Button variant="outline" size="sm" onClick={() => setShowPreviewModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Printer}
              onClick={() => window.print()}
            >
              Print Question Paper
            </Button>
          </>
        }
      >
        {/* Authentic College Examination Paper Template */}
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #cbd5e1',
            fontFamily: 'serif'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #000000', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
              V.O. CHIDAMBARAM COLLEGE, THOOTHUKUDI
            </h2>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0.2rem 0' }}>
              REACCREDITED WITH 'A' GRADE BY NAAC • AFFILIATED TO MANONMANIAM SUNDARANAR UNIVERSITY
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.35rem' }}>
              DEPARTMENT OF COMPUTER SCIENCE
            </div>
            <div style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
              {examType} • Academic Year 2025-2026 (Even Semester)
            </div>
          </div>

          {/* Paper Meta Table */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            <div>
              <div><strong>Course Code & Name:</strong> {subjectCode} - {subject}</div>
              <div><strong>Degree & Programme:</strong> {currentProgram?.name} ({currentProgram?.level})</div>
              <div><strong>Semester / Academic Year:</strong> {semester} / Year {year}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div><strong>Maximum Marks:</strong> {maxMarks}</div>
              <div><strong>Duration:</strong> {duration}</div>
              <div><strong>Faculty:</strong> {currentUser?.name || 'Prof. Alan Davis'}</div>
            </div>
          </div>

          {/* PART A */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', borderBottom: '1px solid #000000', paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>PART A — ({partAQuestions.length} x 1 = {totalPartA} Marks)</span>
              <span>{examType === 'Internal Exam' ? 'Answer ALL Questions (2 x 1 = 2 Marks)' : 'Answer ALL One-Word Questions (15 x 1 = 15 Marks)'}</span>
            </div>
            <ol style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.86rem', lineHeight: 1.6 }}>
              {partAQuestions.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{q.text}</span>
                    <span style={{ fontWeight: 600, paddingLeft: '0.5rem' }}>({q.marks !== undefined ? q.marks : 1})</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* PART B */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', borderBottom: '1px solid #000000', paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>PART B — ({partBQuestions.length} x 5 = {totalPartB} Marks)</span>
              <span>{examType === 'Internal Exam' ? 'Answer ALL Questions (2 x 5 = 10 Marks)' : 'Answer ALL Questions (Either / Or Pattern: 5 x 5 = 25 Marks)'}</span>
            </div>
            <ol start={partAQuestions.length + 1} style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.86rem', lineHeight: 1.6 }}>
              {partBQuestions.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '0.45rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{q.text}</span>
                    <span style={{ fontWeight: 600, paddingLeft: '0.5rem' }}>({q.marks !== undefined ? q.marks : 5})</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* PART C (Included for 70M Semester Exam or whenever Part C questions exist) */}
          {(partCQuestions.length > 0 || examType === 'Semester Exam') && (
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', borderBottom: '1px solid #000000', paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>PART C — ({partCQuestions.length} x 8 = {totalPartC} Marks)</span>
                <span>{examType === 'Internal Exam' ? 'Answer the Question (1 x 8 = 8 Marks)' : 'Answer ALL Questions (Either / Or Pattern: 5 x 8 = 40 Marks)'}</span>
              </div>
              <ol start={partAQuestions.length + partBQuestions.length + 1} style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.86rem', lineHeight: 1.6 }}>
                {partCQuestions.map((q, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{q.text}</span>
                      <span style={{ fontWeight: 600, paddingLeft: '0.5rem' }}>({q.marks !== undefined ? q.marks : 8})</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default QuestionPaperBuilder;

`

## File: src\pages\Settings.jsx

`jsx
import React, { useState } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useAuth } from '../context/AuthContext';
import {
  Settings as SettingsIcon,
  Moon,
  Sun,
  User,
  Building,
  Save,
  ShieldCheck,
  Sparkles,
  Bell
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const Settings = () => {
  const { theme, toggleTheme, showToast } = useAcademic();
  const { currentUser } = useAuth();

  const [institutionName, setInstitutionName] = useState('V.O. Chidambaram College, Tuticorin (Manonmaniam Sundaranar University)');
  const [academicYear, setAcademicYear] = useState('2025-2026');
  const [currentSemester, setCurrentSemester] = useState('Even Semester (IV / VI / VIII)');
  const [aiStrictness, setAiStrictness] = useState('High');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserAlerts, setBrowserAlerts] = useState(true);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    showToast('System configuration & institutional preferences saved!', 'success');
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Institution Settings & Preferences"
        subtitle="Manage college metadata, examination headers, AI synthesis strictness, and theme appearances"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'Settings' }
        ]}
      />

      <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Appearance & Theme Configuration */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Sun size={18} style={{ color: 'var(--primary-600)' }} />
              <span>Appearance & Display Theme</span>
            </div>
            <Badge variant="primary">Active: {theme.toUpperCase()}</Badge>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '540px' }}>
            <div
              onClick={() => theme !== 'light' && toggleTheme()}
              style={{
                border: `2px solid ${theme === 'light' ? 'var(--primary-600)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                cursor: 'pointer',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: theme === 'light' ? 'var(--shadow-md)' : 'none'
              }}
            >
              <Sun size={24} style={{ color: '#f59e0b' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Academic Light Theme</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Clean crisp daylight contrast</div>
              </div>
            </div>

            <div
              onClick={() => theme !== 'dark' && toggleTheme()}
              style={{
                border: `2px solid ${theme === 'dark' ? 'var(--primary-600)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                cursor: 'pointer',
                backgroundColor: '#0f172a',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: theme === 'dark' ? 'var(--shadow-md)' : 'none'
              }}
            >
              <Moon size={24} style={{ color: '#38bdf8' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Deep Midnight Dark</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>High contrast low-light mode</div>
              </div>
            </div>
          </div>
        </div>

        {/* Institution & Examination Header Settings */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Building size={18} style={{ color: 'var(--primary-600)' }} />
              <span>Institution Examination Header Template</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">University / College Legal Name</label>
              <input
                type="text"
                className="form-input"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Current Academic Year</label>
              <select className="form-select" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
                <option value="2025-2026">AY 2025-2026</option>
                <option value="2026-2027">AY 2026-2027</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Active Academic Semester Cycle</label>
            <select className="form-select" value={currentSemester} onChange={(e) => setCurrentSemester(e.target.value)}>
              <option value="Even Semester (IV / VI / VIII)">Even Semester (Semester IV / VI / VIII)</option>
              <option value="Odd Semester (I / III / V / VII)">Odd Semester (Semester I / III / V / VII)</option>
            </select>
          </div>
        </div>

        {/* AI Neural Engine & Bloom's Taxonomy Parameters */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Sparkles size={18} style={{ color: 'var(--accent-purple)' }} />
              <span>AI Question & Timetable Engine Settings</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Bloom's Taxonomy Strictness Level</label>
              <select className="form-select" value={aiStrictness} onChange={(e) => setAiStrictness(e.target.value)}>
                <option value="High">High Strictness (Strict Verb Verification)</option>
                <option value="Medium">Medium (Balanced)</option>
                <option value="Creative">Creative / Open-Ended</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Timetable Solver Optimization Goal</label>
              <select className="form-select">
                <option value="balanced">Maximum Faculty Balance (16-18h)</option>
                <option value="lab_priority">Lab Equipment Utilization Priority</option>
                <option value="compact">Compact Daily Schedule (Minimal Gaps)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Bell size={18} style={{ color: 'var(--warning-500)' }} />
              <span>Notification & Alert Triggers</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
              <div>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Email alerts for Question Paper HOD reviews & approvals
                </span>
                <p style={{ margin: 0, fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  Sends dispatch notice immediately when a reviewer requests changes or signs off.
                </p>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={browserAlerts}
                onChange={(e) => setBrowserAlerts(e.target.checked)}
              />
              <div>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Timetable conflict alerts & real-time room occupancy warnings
                </span>
                <p style={{ margin: 0, fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  Notifies when two faculty members are assigned to identical periods or labs.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Submit Action */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button type="submit" variant="primary" size="lg" icon={Save}>
            Save All Preferences
          </Button>
        </div>
      </form>
    </div>
  );
};

`

## File: src\pages\StaffDashboard.jsx

`jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  BookOpen,
  FileText,
  FileQuestion,
  CheckCircle2,
  Database,
  Sparkles,
  ArrowRight,
  Plus
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

export const StaffDashboard = () => {
  const { currentUser } = useAuth();
  const {
    questionPapers = [],
    questionBank = [],
    subjects = [],
    classTimetables,
    CS_MORNING_SLOTS
  } = useAcademic();

  const facultyLastName = currentUser?.name?.split(' ').slice(-1)[0]?.toLowerCase() || '';

  // Filter papers created by current staff
  const staffPapers = questionPapers.filter(
    p =>
      p.author?.toLowerCase().includes(facultyLastName) ||
      p.author?.toLowerCase().includes(currentUser?.name?.toLowerCase() || '')
  );

  const pendingPapersCount = staffPapers.filter(
    p => p.status === 'Draft' || p.status === 'Changes Required'
  ).length;

  const approvedPapersCount = staffPapers.filter(p => p.status === 'Approved').length;

  // Extract today's classes for this faculty
  const todayClasses = [];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const todayKey = dayIndex >= 1 && dayIndex <= 6 ? days[dayIndex - 1] : 'MON';

  if (classTimetables) {
    Object.entries(classTimetables).forEach(([clsKey, tbl]) => {
      if (todayKey === 'SAT' && tbl?.saturdayMode === 'OFF') return;

      const isSaturdayMorning = todayKey === 'SAT' && tbl?.saturdayMode === 'MORNING';
      const daySlots = tbl?.grid?.[todayKey] || [];
      daySlots.forEach((slot, pIdx) => {
        if (!slot.isBreak && !slot.isFree && slot.code) {
          const isMyClass =
            slot.faculty?.toLowerCase().includes(facultyLastName) ||
            currentUser?.assignedSubjects?.some(as => as.includes(slot.code));
          if (isMyClass) {
            const timeDisplay =
              isSaturdayMorning && CS_MORNING_SLOTS
                ? CS_MORNING_SLOTS[pIdx]?.time || `Period ${pIdx + 1}`
                : tbl.slots?.[pIdx]?.time || `Period ${pIdx + 1}`;

            todayClasses.push({
              period: timeDisplay,
              periodNumber: pIdx + 1,
              code: slot.code,
              subject: slot.subject || slot.name,
              section: `${tbl.year || ''} Year ${
                tbl.programId === 'UG_BSCCS' ? 'B.Sc. CS' : 'M.Sc. CS'
              } (${tbl.section || ''})`,
              room: slot.room || 'LH-101',
              isLab: slot.isLab || false
            });
          }
        }
      });
    });
  }

  const assignedCount = currentUser?.assignedSubjects?.length || (subjects.length > 0 ? Math.min(subjects.length, 3) : 2);

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Official Academic Welcome Bar */}
      <div
        className="card"
        style={{
          borderLeft: '4px solid var(--primary-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem 1.25rem'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700 }}>
            Faculty Academic Portal — {currentUser?.name}
          </h1>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
            {currentUser?.designation || 'Faculty'} • Department of Computer Science • Emp ID: {currentUser?.empId || 'FAC-CS'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to="/questions/generate" className="btn btn-primary btn-sm">
            <FileQuestion size={15} />
            <span>Generate Questions</span>
          </Link>
          <Link to="/timetable" className="btn btn-outline btn-sm">
            <CalendarDays size={15} />
            <span>View Full Timetable</span>
          </Link>
        </div>
      </div>

      {/* Practical Stats Grid */}
      <div className="grid-4">
        <StatCard
          title="Today's Teaching Schedule"
          value={todayClasses.length}
          subtitle={`Periods assigned for ${todayKey}`}
          icon={CalendarDays}
          variant="primary"
        />
        <StatCard
          title="Assigned Courses"
          value={assignedCount}
          subtitle="Active curriculum subjects"
          icon={BookOpen}
        />
        <StatCard
          title="Question Papers"
          value={staffPapers.length}
          subtitle={`${approvedPapersCount} approved • ${pendingPapersCount} in draft/review`}
          icon={FileText}
          variant={pendingPapersCount > 0 ? 'warning' : 'default'}
        />
        <StatCard
          title="Question Bank Repository"
          value={questionBank.length}
          subtitle="Total verified questions"
          icon={Database}
          variant="success"
        />
      </div>

      {/* Main Content: Today's Classes & Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.25rem' }}>
        {/* Today's Classes */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <CalendarDays size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Today's Class Schedule ({todayKey})</span>
              </div>
              <div className="card-subtitle">Official lecture & laboratory assignments</div>
            </div>
            <Link to="/timetable" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
              Class Schedule →
            </Link>
          </div>

          {todayClasses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>No classes scheduled for today.</p>
            </div>
          ) : (
            <div className="table-container">
              <table className="academic-table">
                <thead>
                  <tr>
                    <th>Timing</th>
                    <th>Course Code & Title</th>
                    <th>Class Batch</th>
                    <th>Room / Lab</th>
                  </tr>
                </thead>
                <tbody>
                  {todayClasses.map((cls, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                        {cls.period}
                      </td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{cls.code}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                          {cls.subject}
                        </div>
                      </td>
                      <td style={{ fontSize: '0.8rem' }}>{cls.section}</td>
                      <td>
                        <Badge variant={cls.isLab ? 'warning' : 'neutral'}>
                          {cls.room} {cls.isLab && '• Lab'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Academic Quick Actions & Tools */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <Sparkles size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Academic Quick Actions</span>
              </div>
              <div className="card-subtitle">Assessment and curriculum tools</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              to="/questions/generate"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Generate Questions with AI</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Create Bloom's taxonomy mapped questions</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/question-paper/create"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <FileText size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Build Question Paper</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Assemble and balance CIA examination papers</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/questions/bank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <Database size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Question Bank Repository</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Browse, filter and manage question bank items</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Question Papers Status Table */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              <FileText size={17} style={{ color: 'var(--primary-600)' }} />
              <span>Assessment & Question Papers</span>
            </div>
            <div className="card-subtitle">Internal examination blueprints and submission statuses</div>
          </div>
          <Link to="/question-paper/create" className="btn btn-primary btn-sm">
            <Plus size={14} />
            <span>Create New Question Paper</span>
          </Link>
        </div>

        {staffPapers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>No question papers created yet. Click above to create one.</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Paper Title & Exam</th>
                  <th>Course</th>
                  <th>Max Marks</th>
                  <th>Status</th>
                  <th>HOD Verification Remarks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {staffPapers.map(paper => (
                  <tr key={paper.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {paper.examType} • {paper.semester}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.subjectCode}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {paper.subject}
                      </div>
                    </td>
                    <td style={{ fontWeight: 600 }}>{paper.maxMarks} Marks</td>
                    <td>
                      <Badge
                        variant={
                          paper.status === 'Approved'
                            ? 'success'
                            : paper.status === 'Submitted'
                            ? 'primary'
                            : paper.status === 'Changes Required'
                            ? 'danger'
                            : 'neutral'
                        }
                      >
                        {paper.status}
                      </Badge>
                    </td>
                    <td style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '240px' }}>
                      {paper.hodRemarks || '—'}
                    </td>
                    <td>
                      <Link
                        to={`/question-paper/create?edit=${paper.id}`}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                      >
                        Edit / View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;

`

## File: src\pages\Timetable.jsx

`jsx
import React, { useState, useMemo } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useAuth } from '../context/AuthContext';
import {
  CalendarDays,
  Save,
  FileSpreadsheet,
  Edit2,
  Clock,
  Printer,
  BookOpen,
  Plus,
  Trash2,
  Check,
  Copy,
  LayoutGrid,
  Users,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { LoadingAnimation } from '../components/common/LoadingAnimation';
import { CS_PROGRAMS, MOCK_USERS, generateClassTimetable } from '../data/mockData';

export const Timetable = () => {
  const {
    programs = CS_PROGRAMS,
    addSection,
    deleteSection,
    subjects = [],
    addSubject,
    updateSubject,
    deleteSubject,
    classTimetables,
    getClassTimetable,
    createClassTimetable,
    generateAllDepartmentTimetables,
    clearClassTimetable,
    updateClassTimetableCell,
    swapClassTimetableCells,
    setSaturdayMode,
    SATURDAY_MODES,
    CS_TIMETABLE_SLOTS,
    CS_MORNING_SLOTS,
    showToast,
    users = []
  } = useAcademic();

  const { role, currentUser } = useAuth();
  const canEdit = role === 'admin' || role === 'hod';
  const facultyList = (users && users.length > 0 ? users : MOCK_USERS).filter(u => u.role === 'staff' || u.role === 'hod');

  // Active Class Selection
  const [selectedProgram, setSelectedProgram] = useState('UG_BSCCS');
  const [selectedYear, setSelectedYear] = useState('II');
  const [selectedSection, setSelectedSection] = useState('Section A');
  const [activeDegreeTab, setActiveDegreeTab] = useState('ALL'); // 'ALL' | 'UG' | 'PG'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'master'

  // Master Department View selected day
  const [masterDay, setMasterDay] = useState('MON');

  // Current Active Program & Timetable
  const currentProgram = programs.find(p => p.id === selectedProgram) || programs[0] || CS_PROGRAMS[0];
  const timetable = getClassTimetable(selectedProgram, selectedYear, selectedSection);
  const timetableSlots = timetable?.slots || CS_TIMETABLE_SLOTS;
  const timetableGrid = timetable?.grid || {};

  // Flat List of All Classes in Department
  const allDepartmentClasses = useMemo(() => {
    const list = [];
    programs.forEach(prog => {
      prog.years.forEach(yrObj => {
        prog.sections.forEach(sec => {
          const key = `${prog.id}_${yrObj.year}_${sec}`;
          const isUG = prog.id === 'UG_BSCCS';
          const tt = classTimetables?.[key];
          
          // Count assigned non-free periods
          let assignedCount = 0;
          if (tt && tt.grid) {
            Object.values(tt.grid).forEach(dayList => {
              dayList?.forEach(cell => {
                if (!cell.isBreak && !cell.isFree && cell.code) assignedCount++;
              });
            });
          }

          list.push({
            key,
            programId: prog.id,
            programName: prog.name,
            degree: prog.degree,
            isUG,
            year: yrObj.year,
            yearLabel: yrObj.label,
            section: sec,
            semester: yrObj.semesters?.[0] || 'Semester I',
            assignedCount,
            hasSchedule: assignedCount > 0
          });
        });
      });
    });
    return list;
  }, [programs, classTimetables]);

  const filteredClasses = useMemo(() => {
    if (activeDegreeTab === 'UG') return allDepartmentClasses.filter(c => c.isUG);
    if (activeDegreeTab === 'PG') return allDepartmentClasses.filter(c => !c.isUG);
    return allDepartmentClasses;
  }, [allDepartmentClasses, activeDegreeTab]);

  // Handle Class Switch
  const handleSelectClass = (cls) => {
    setSelectedProgram(cls.programId);
    setSelectedYear(cls.year);
    setSelectedSection(cls.section);
  };

  // Cell Edit Modal State
  const [editingCell, setEditingCell] = useState(null); // { day, periodIndex, data }
  const [editSubjectCode, setEditSubjectCode] = useState('');
  const [editSubjectName, setEditSubjectName] = useState('');
  const [editFaculty, setEditFaculty] = useState('');
  const [editRoom, setEditRoom] = useState('');
  const [editIsLab, setEditIsLab] = useState(false);
  const [editIsFree, setEditIsFree] = useState(false);

  // Subject Master Manager Modal State
  const [isSubjectManagerOpen, setIsSubjectManagerOpen] = useState(false);
  const [subjectManagerTab, setSubjectManagerTab] = useState('UG_BSCCS');
  const [editingSubjectObj, setEditingSubjectObj] = useState(null);
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newProgram, setNewProgram] = useState('UG_BSCCS');
  const [newSemester, setNewSemester] = useState('Semester IV');
  const [newYear, setNewYear] = useState('II');
  const [newCredits, setNewCredits] = useState(4);
  const [newType, setNewType] = useState('Theory');
  const [newFaculty, setNewFaculty] = useState(facultyList[0]?.name || 'Dr. Sarah Jenkins');

  // Timetable Creation Wizard Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createProgram, setCreateProgram] = useState('UG_BSCCS');
  const [createYear, setCreateYear] = useState('I');
  const [createSection, setCreateSection] = useState('Section A');
  const [createSemester, setCreateSemester] = useState('Semester I');
  const [createShift, setCreateShift] = useState('AFTERNOON');
  const [createSaturdayMode, setCreateSaturdayMode] = useState('AFTERNOON');
  const [createMethod, setCreateMethod] = useState('ai'); // 'ai' | 'copy' | 'template' | 'blank'
  const [copySourceKey, setCopySourceKey] = useState('');

  // Section Management Modal State
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [addSectionProgram, setAddSectionProgram] = useState('UG_BSCCS');
  const [newSectionName, setNewSectionName] = useState('');
  const [manageSectionTab, setManageSectionTab] = useState('ALL'); // 'ALL' | 'UG_BSCCS' | 'PG_MSCCS'
  const [deleteConfirmSection, setDeleteConfirmSection] = useState(null); // { programId, programName, sectionName }

  const totalSectionsCount = useMemo(() => {
    return programs.reduce((acc, p) => acc + (p.sections?.length || 0), 0);
  }, [programs]);

  // Batch Department Generation Progress Modal State
  const [isBatchGenerating, setIsBatchGenerating] = useState(false);
  const [batchStep, setBatchStep] = useState(0);
  const [batchComplete, setBatchComplete] = useState(false);

  // Drag and Drop
  const [dragSource, setDragSource] = useState(null);

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayNames = {
    MON: 'Monday',
    TUE: 'Tuesday',
    WED: 'Wednesday',
    THU: 'Thursday',
    FRI: 'Friday',
    SAT: 'Saturday'
  };

  const currentSaturdayMode = timetable?.saturdayMode || 'AFTERNOON';

  const getSlotTime = (day, pIdx) => {
    if (day === 'SAT' && currentSaturdayMode === 'MORNING' && CS_MORNING_SLOTS) {
      return CS_MORNING_SLOTS[pIdx]?.time || timetableSlots[pIdx]?.time || '';
    }
    return timetableSlots[pIdx]?.time || '';
  };

  // Open Cell Edit Modal
  const handleOpenEditModal = (day, periodIndex, cellData) => {
    if (cellData.isBreak) return;
    setEditingCell({ day, periodIndex, data: cellData });

    const matchedSub = subjects.find(s => s.code === cellData.code || s.name === cellData.subject) || subjects[0];
    setEditSubjectCode(matchedSub ? matchedSub.code : cellData.code || 'CS301');
    setEditSubjectName(matchedSub ? matchedSub.name : cellData.subject || 'DBMS');
    setEditFaculty(cellData.faculty || facultyList[0]?.name || 'Prof. Alan Davis');
    setEditRoom(cellData.room || (selectedProgram === 'UG_BSCCS' ? 'LH-201' : 'PG-Lab-1'));
    setEditIsLab(!!cellData.isLab);
    setEditIsFree(!!cellData.isFree);
  };

  const handleSubjectDropdownChange = (code) => {
    setEditSubjectCode(code);
    const found = subjects.find(s => s.code === code);
    if (found) {
      setEditSubjectName(found.name);
      setEditFaculty(found.faculty || editFaculty);
      setEditIsLab(found.type?.toLowerCase().includes('lab'));
    }
  };

  const handleSaveCell = (e) => {
    e.preventDefault();
    if (!editingCell) return;

    const colorMap = {
      CS101: '#3b82f6', CS102: '#06b6d4', CS201: '#8b5cf6',
      CS301: '#3b82f6', CS302: '#10b981', CS303: '#06b6d4',
      CS304: '#8b5cf6', CS305: '#f59e0b', CS306: '#ec4899',
      CS401: '#6366f1', CS402: '#0ea5e9',
      MCS101: '#8b5cf6', MCS102: '#3b82f6', MCS201: '#10b981',
      MCS202: '#f59e0b', MCS301: '#ec4899', MCS302: '#ef4444',
      MCS401: '#06b6d4'
    };

    const color = colorMap[editSubjectCode] || '#3b82f6';

    const updated = editIsFree
      ? { isFree: true, label: 'Free Period', subject: '', code: '', faculty: '', room: '', isLab: false }
      : {
          isFree: false,
          subject: editSubjectName,
          code: editSubjectCode,
          faculty: editFaculty,
          room: editRoom,
          isLab: editIsLab,
          color
        };

    updateClassTimetableCell(selectedProgram, selectedYear, selectedSection, editingCell.day, editingCell.periodIndex, updated);
    setEditingCell(null);
  };

  const handleCreateSubject = (e) => {
    e.preventDefault();
    if (!newCode.trim() || !newName.trim()) return;

    if (subjects.some(s => s.code.toLowerCase() === newCode.trim().toLowerCase())) {
      showToast(`Subject ${newCode} already exists!`, 'error');
      return;
    }

    addSubject({
      code: newCode.trim().toUpperCase(),
      name: newName.trim(),
      program: subjectManagerTab,
      programName: subjectManagerTab === 'UG_BSCCS' ? 'B.Sc. CS' : 'M.Sc. CS',
      semester: newSemester,
      year: newYear,
      credits: parseInt(newCredits, 10),
      type: newType,
      faculty: newFaculty
    });

    setNewCode('');
    setNewName('');
  };

  // Drag and drop handlers
  const handleDragStart = (e, day, index) => {
    if (!canEdit) return;
    setDragSource({ day, index });
    e.dataTransfer.setData('text/plain', JSON.stringify({ day, index }));
  };

  const handleDragOver = (e) => {
    if (canEdit) e.preventDefault();
  };

  const handleDrop = (e, targetDay, targetIndex) => {
    e.preventDefault();
    if (!canEdit || !dragSource) return;

    const { day: sourceDay, index: sourceIndex } = dragSource;
    if (sourceDay === targetDay && sourceIndex === targetIndex) return;

    const sourceCell = timetableGrid[sourceDay]?.[sourceIndex] || {};
    const targetCell = timetableGrid[targetDay]?.[targetIndex] || {};

    if (sourceCell.isBreak || targetCell.isBreak) {
      showToast('Cannot swap break interval!', 'warning');
      return;
    }

    swapClassTimetableCells(selectedProgram, selectedYear, selectedSection, sourceDay, sourceIndex, targetDay, targetIndex);
    setDragSource(null);
  };

  // Create Timetable Form Submission
  const handleCreateTimetableSubmit = (e) => {
    e.preventDefault();
    createClassTimetable({
      programId: createProgram,
      year: createYear,
      section: createSection,
      semester: createSemester,
      shift: createShift,
      saturdayMode: createSaturdayMode,
      creationMethod: createMethod,
      copyFromKey: copySourceKey
    });

    setSelectedProgram(createProgram);
    setSelectedYear(createYear);
    setSelectedSection(createSection);
    setIsCreateModalOpen(false);
  };

  // Batch Department Generation Process
  const batchSteps = [
    'Analyzing curriculum requirements across all 8 classes...',
    'Assigning lecture halls & laboratory facilities...',
    'Resolving faculty timetable clashes & room overlaps...',
    'Distributing balanced theory and lab credit hours...',
    'Finalizing master conflict-free schedules for all classes...'
  ];

  const handleStartBatchGeneration = () => {
    setIsBatchGenerating(true);
    setBatchComplete(false);
    setBatchStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < batchSteps.length) {
        setBatchStep(step);
      } else {
        clearInterval(interval);
        setBatchComplete(true);
      }
    }, 600);
  };

  const handleApplyBatchGeneration = () => {
    generateAllDepartmentTimetables();
    setIsBatchGenerating(false);
    setBatchComplete(false);
  };

  // Add Section Submission
  const handleAddSectionSubmit = (e) => {
    e.preventDefault();
    if (!newSectionName.trim()) return;
    const trimmed = newSectionName.trim();
    addSection(addSectionProgram, trimmed);
    setNewSectionName('');
    
    // Auto-select the program to view the newly added section
    setSelectedProgram(addSectionProgram);
    setSelectedSection(trimmed);
  };

  // Delete Section Action (Admin)
  const handleDeleteSection = (programId, sectionName) => {
    const prog = programs.find(p => p.id === programId) || CS_PROGRAMS.find(p => p.id === programId);
    if (!prog) return;

    if (prog.sections.length <= 1) {
      showToast(`Cannot delete section. ${prog.name} must have at least one section.`, 'error');
      setDeleteConfirmSection(null);
      return;
    }

    deleteSection(programId, sectionName);
    
    // If currently selected section is deleted, switch to the remaining section
    if (selectedProgram === programId && selectedSection === sectionName) {
      const remaining = prog.sections.filter(s => s !== sectionName);
      if (remaining.length > 0) {
        setSelectedSection(remaining[0]);
      }
    }
    setDeleteConfirmSection(null);
  };

  // Export CSV
  const handleExportCSV = () => {
    let csv = `Timetable: ${currentProgram.name} - ${selectedYear} Year (${selectedSection})\n`;
    csv += 'Day,' + timetableSlots.map(s => s.isBreak ? 'Interval' : `Period ${s.period} (${s.time})`).join(',') + '\n';

    days.forEach(day => {
      const row = timetableGrid[day] || [];
      const cells = row.map(c => {
        if (c.isBreak) return 'Interval (15m)';
        if (c.isFree) return 'Free Period';
        return `"${c.code || ''}: ${c.subject || ''} (${c.faculty || ''} - ${c.room || ''})"`;
      });
      csv += `${dayNames[day]},${cells.join(',')}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Timetable_${selectedProgram}_${selectedYear}_${selectedSection}.csv`;
    a.click();
    showToast('Timetable exported as CSV', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const activeProgramSubjects = subjects.filter(s => s.program === selectedProgram);

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Clean Page Header */}
      <PageHeader
        title="Class Timetables"
        subtitle="Department of Computer Science • Manage, view and create weekly schedules for every class"
        breadcrumbs={[
          { label: 'Portal', to: '/timetable' },
          { label: 'Timetables' }
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {canEdit && (
              <>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Plus}
                  onClick={() => {
                    setCreateProgram(selectedProgram);
                    setCreateYear(selectedYear);
                    setCreateSection(selectedSection);
                    setIsCreateModalOpen(true);
                  }}
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
                >
                  Create Timetable
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  icon={Sparkles}
                  onClick={handleStartBatchGeneration}
                  style={{ color: '#7c3aed', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)' }}
                >
                  Auto-Generate All Classes
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  icon={BookOpen}
                  onClick={() => setIsSubjectManagerOpen(true)}
                >
                  Subjects ({subjects.length})
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  icon={Users}
                  onClick={() => setIsAddSectionOpen(true)}
                  title="Add or Delete Sections"
                  style={{ color: '#2563eb', borderColor: 'rgba(37, 99, 235, 0.3)', backgroundColor: 'rgba(37, 99, 235, 0.04)' }}
                >
                  Manage Sections ({totalSectionsCount})
                </Button>
              </>
            )}

            <Button
              variant="outline"
              size="sm"
              icon={FileSpreadsheet}
              onClick={handleExportCSV}
            >
              Export
            </Button>

            <Button
              variant="outline"
              size="sm"
              icon={Printer}
              onClick={handlePrint}
            >
              Print
            </Button>
          </div>
        }
      />

      {/* Class Switcher Ribbon - Selector for EVERY Class in Department */}
      <div
        className="card"
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Top Filter Tabs: All, UG, PG */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.35rem' }}>
              Filter Degree:
            </span>
            <button
              onClick={() => setActiveDegreeTab('ALL')}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: activeDegreeTab === 'ALL' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: activeDegreeTab === 'ALL' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              All Classes ({allDepartmentClasses.length})
            </button>
            <button
              onClick={() => setActiveDegreeTab('UG')}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: activeDegreeTab === 'UG' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: activeDegreeTab === 'UG' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              B.Sc. Computer Science (UG)
            </button>
            <button
              onClick={() => setActiveDegreeTab('PG')}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: activeDegreeTab === 'PG' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: activeDegreeTab === 'PG' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              M.Sc. Computer Science (PG)
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'master' : 'grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-surface-hover)',
                color: 'var(--text-primary)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <LayoutGrid size={14} />
              <span>{viewMode === 'grid' ? 'Master Overview Matrix' : 'Single Class View'}</span>
            </button>

            {canEdit && (
              <button
                onClick={() => setIsAddSectionOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--primary-400)',
                  backgroundColor: 'rgba(37, 99, 235, 0.06)',
                  color: 'var(--primary-600)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                title="Add or Delete sections in timetable"
              >
                <Users size={13} />
                <span>Manage Sections (+ / -)</span>
              </button>
            )}
          </div>
        </div>

        {/* Clean Class Pills / Badges Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
            gap: '0.5rem'
          }}
        >
          {filteredClasses.map(cls => {
            const isSelected = selectedProgram === cls.programId && selectedYear === cls.year && selectedSection === cls.section;
            return (
              <div
                key={cls.key}
                onClick={() => handleSelectClass(cls)}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
                className="hover-lift"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isSelected ? '#2563eb' : 'var(--text-secondary)' }}>
                    {cls.degree} • Year {cls.year}
                  </span>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: cls.hasSchedule ? '#10b981' : '#94a3b8'
                    }}
                    title={cls.hasSchedule ? 'Schedule Active' : 'Draft / Empty'}
                  />
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {cls.section}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {cls.hasSchedule ? `${cls.assignedCount} periods scheduled` : 'No periods'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Master Overview Matrix View */}
      {viewMode === 'master' ? (
        <div className="card" style={{ padding: '1.25rem', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                Department Master Timetable Matrix
              </h3>
              <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Comparing all class schedules simultaneously to verify zero faculty collisions
              </p>
            </div>

            {/* Day Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {days.map(d => (
                <button
                  key={d}
                  onClick={() => setMasterDay(d)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    backgroundColor: masterDay === d ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                    color: masterDay === d ? '#ffffff' : 'var(--text-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'center' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface-hover)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', minWidth: '150px' }}>Class / Section</th>
                  {CS_TIMETABLE_SLOTS.map((slot, idx) => (
                    <th key={idx} style={{ padding: '0.75rem 0.5rem', minWidth: slot.isBreak ? '70px' : '130px' }}>
                      <div>{slot.isBreak ? 'Interval' : `Period ${slot.period}`}</div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 400, color: 'var(--text-muted)' }}>{slot.time}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allDepartmentClasses.map(cls => {
                  const tt = classTimetables?.[cls.key] || generateClassTimetable(cls.programId, cls.year, cls.section, true);
                  const row = tt?.grid?.[masterDay] || [];
                  return (
                    <tr key={cls.key} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, backgroundColor: 'var(--bg-surface)' }}>
                        <div>{cls.programName}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--primary-600)' }}>Year {cls.year} • {cls.section}</div>
                      </td>
                      {row.map((cell, pIdx) => {
                        if (cell.isBreak) {
                          return (
                            <td key={pIdx} style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-light)', fontSize: '0.72rem' }}>
                              Break
                            </td>
                          );
                        }
                        if (cell.isFree) {
                          return (
                            <td key={pIdx} style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-light)', fontStyle: 'italic' }}>
                              Free
                            </td>
                          );
                        }
                        return (
                          <td key={pIdx} style={{ padding: '0.5rem', backgroundColor: `${cell.color || '#3b82f6'}10` }}>
                            <div style={{ fontWeight: 700, color: cell.color || '#2563eb' }}>{cell.code}</div>
                            <div style={{ fontSize: '0.74rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }}>
                              {cell.subject}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{cell.faculty?.split(' ')[1] || cell.faculty}</div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Single Active Class Timetable View */
        <>
          {/* Active Class Strip with Controls */}
          <div
            className="card"
            style={{
              padding: '0.85rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.85rem',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {currentProgram.name} — Year {selectedYear} ({selectedSection})
              </div>
              <Badge variant="primary">{timetable.semester}</Badge>
              <Badge variant="success">0 Clashes</Badge>
            </div>

            {/* Saturday Shift & Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Saturday:
              </span>
              {canEdit ? (
                <div
                  style={{
                    display: 'inline-flex',
                    backgroundColor: 'var(--bg-app)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.15rem',
                    border: '1px solid var(--border-light)',
                    gap: '0.15rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSaturdayMode(selectedProgram, selectedYear, selectedSection, 'AFTERNOON')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentSaturdayMode === 'AFTERNOON' ? '#16a34a' : 'transparent',
                      color: currentSaturdayMode === 'AFTERNOON' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Afternoon
                  </button>

                  <button
                    type="button"
                    onClick={() => setSaturdayMode(selectedProgram, selectedYear, selectedSection, 'MORNING')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentSaturdayMode === 'MORNING' ? '#d97706' : 'transparent',
                      color: currentSaturdayMode === 'MORNING' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Morning Special
                  </button>

                  <button
                    type="button"
                    onClick={() => setSaturdayMode(selectedProgram, selectedYear, selectedSection, 'OFF')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentSaturdayMode === 'OFF' ? '#64748b' : 'transparent',
                      color: currentSaturdayMode === 'OFF' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Off / Holiday
                  </button>
                </div>
              ) : (
                <Badge variant={currentSaturdayMode === 'AFTERNOON' ? 'success' : currentSaturdayMode === 'MORNING' ? 'warning' : 'neutral'}>
                  {currentSaturdayMode === 'AFTERNOON' ? 'Afternoon' : currentSaturdayMode === 'MORNING' ? 'Morning' : 'Off'}
                </Badge>
              )}

              {canEdit && (
                <button
                  onClick={() => clearClassTimetable(selectedProgram, selectedYear, selectedSection)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-surface-hover)',
                    color: '#ef4444',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  title="Clear periods for this class"
                >
                  <Trash2 size={13} />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Interactive Timetable Grid */}
          <div
            className="card"
            style={{
              padding: '0',
              overflowX: 'auto',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <table
              style={{
                width: '100%',
                minWidth: '920px',
                borderCollapse: 'collapse',
                textAlign: 'center'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-900)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem', width: '110px', fontSize: '0.84rem', fontWeight: 700, borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                    DAY
                  </th>
                  {timetableSlots.map((slot, idx) => (
                    <th
                      key={idx}
                      style={{
                        padding: '0.8rem 0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        borderRight: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: slot.isBreak ? 'rgba(0,0,0,0.25)' : 'transparent',
                        width: slot.isBreak ? '80px' : 'auto'
                      }}
                    >
                      <div>{slot.isBreak ? 'INTERVAL' : `PERIOD ${slot.period}`}</div>
                      <div style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 400, marginTop: '0.1rem' }}>
                        {slot.time}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <tr key={day} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    {/* Day Column */}
                    <td
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        backgroundColor: 'var(--bg-surface)',
                        borderRight: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                        minWidth: '100px'
                      }}
                    >
                      <div>{day}</div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                        {dayNames[day]}
                      </div>
                    </td>

                    {/* Periods */}
                    {day === 'SAT' && currentSaturdayMode === 'OFF' ? (
                      <td
                        colSpan={timetableSlots.length}
                        style={{
                          padding: '1.25rem',
                          backgroundColor: 'var(--bg-app)',
                          color: 'var(--text-muted)',
                          fontSize: '0.84rem',
                          fontStyle: 'italic',
                          borderRight: '1px solid var(--border-light)'
                        }}
                      >
                        🏖️ Weekend Off / No classes scheduled
                      </td>
                    ) : (
                      (timetableGrid[day] || []).map((cell, periodIdx) => {
                        if (cell.isBreak) {
                          return (
                            <td
                              key={periodIdx}
                              style={{
                                backgroundColor: 'var(--bg-surface-hover)',
                                borderRight: '1px solid var(--border-light)',
                                color: 'var(--text-muted)',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                letterSpacing: '0.1em',
                                padding: '0.5rem 0'
                              }}
                            >
                              INTERVAL (15m)
                            </td>
                          );
                        }

                        if (cell.isFree) {
                          return (
                            <td
                              key={periodIdx}
                              onClick={() => canEdit && handleOpenEditModal(day, periodIdx, cell)}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleDrop(e, day, periodIdx)}
                              style={{
                                padding: '0.45rem',
                                borderRight: '1px solid var(--border-light)',
                                backgroundColor: 'var(--bg-surface)',
                                cursor: canEdit ? 'pointer' : 'default',
                                verticalAlign: 'middle'
                              }}
                            >
                              <div
                                style={{
                                  border: '1px dashed var(--border-medium)',
                                  borderRadius: 'var(--radius-md)',
                                  padding: '0.65rem 0.45rem',
                                  color: 'var(--text-light)',
                                  fontSize: '0.76rem',
                                  fontWeight: 500,
                                  minHeight: '76px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '0.2rem'
                                }}
                              >
                                <Clock size={15} style={{ opacity: 0.5 }} />
                                <span>{cell.label || 'Free'}</span>
                                {canEdit && (
                                  <span style={{ fontSize: '0.66rem', color: 'var(--primary-600)', fontWeight: 600 }}>
                                    + Assign
                                  </span>
                                )}
                              </div>
                            </td>
                          );
                        }

                        return (
                          <td
                            key={periodIdx}
                            draggable={canEdit}
                            onDragStart={(e) => handleDragStart(e, day, periodIdx)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, day, periodIdx)}
                            onClick={() => handleOpenEditModal(day, periodIdx, cell)}
                            style={{
                              padding: '0.4rem',
                              borderRight: '1px solid var(--border-light)',
                              backgroundColor: 'var(--bg-surface)',
                              cursor: canEdit ? 'grab' : 'pointer',
                              verticalAlign: 'top'
                            }}
                            className="hover-lift"
                          >
                            <div
                              style={{
                                borderRadius: 'var(--radius-md)',
                                padding: '0.6rem 0.5rem',
                                border: `1px solid ${cell.color || 'var(--primary-300)'}`,
                                backgroundColor: `${cell.color || '#3b82f6'}12`,
                                minHeight: '78px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                textAlign: 'left'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.2rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: cell.color || 'var(--primary-600)' }}>
                                  {cell.code}
                                </span>
                                {cell.isLab && (
                                  <span
                                    style={{
                                      fontSize: '0.62rem',
                                      fontWeight: 700,
                                      backgroundColor: 'var(--accent-purple)',
                                      color: '#ffffff',
                                      padding: '0.08rem 0.3rem',
                                      borderRadius: 'var(--radius-xs)',
                                      textTransform: 'uppercase'
                                    }}
                                  >
                                    LAB
                                  </span>
                                )}
                              </div>

                              <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)', margin: '0.15rem 0' }}>
                                {cell.subject}
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85px' }}>
                                  {cell.faculty?.split(' ')[1] || cell.faculty}
                                </span>
                                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                                  {cell.room}
                                </span>
                              </div>
                            </div>
                          </td>
                        );
                      })
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* CREATE CLASS TIMETABLE WIZARD MODAL */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Class Timetable"
        subtitle="Configure weekly schedule for any class in the department"
        icon={CalendarDays}
        size="md"
      >
        <form onSubmit={handleCreateTimetableSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Target Class Selection */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Degree Program</label>
              <select
                className="form-select"
                value={createProgram}
                onChange={(e) => {
                  const newProgId = e.target.value;
                  setCreateProgram(newProgId);
                  const progObj = programs.find(p => p.id === newProgId);
                  const availableSecs = progObj?.sections || ['Section A'];
                  if (!availableSecs.includes(createSection)) {
                    setCreateSection(availableSecs[0]);
                  }
                }}
              >
                {programs.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Academic Year</label>
              <select
                className="form-select"
                value={createYear}
                onChange={(e) => setCreateYear(e.target.value)}
              >
                <option value="I">Year I</option>
                <option value="II">Year II</option>
                {createProgram === 'UG_BSCCS' && <option value="III">Year III</option>}
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Section</label>
              <select
                className="form-select"
                value={createSection}
                onChange={(e) => setCreateSection(e.target.value)}
              >
                {(programs.find(p => p.id === createProgram)?.sections || ['Section A']).map(sec => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Shift & Saturday Mode */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Shift Timings</label>
              <select
                className="form-select"
                value={createShift}
                onChange={(e) => setCreateShift(e.target.value)}
              >
                <option value="AFTERNOON">Afternoon Shift (01:45 PM – 06:20 PM)</option>
                <option value="MORNING">Morning Shift (08:45 AM – 01:20 PM)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Saturday Policy</label>
              <select
                className="form-select"
                value={createSaturdayMode}
                onChange={(e) => setCreateSaturdayMode(e.target.value)}
              >
                <option value="AFTERNOON">Afternoon (Attendance Counted)</option>
                <option value="MORNING">Morning Special (Remedial)</option>
                <option value="OFF">Weekend Off</option>
              </select>
            </div>
          </div>

          {/* Creation Method Selection */}
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label form-label-required">Creation Method</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              <div
                onClick={() => setCreateMethod('ai')}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: createMethod === 'ai' ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: createMethod === 'ai' ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <Sparkles size={18} style={{ color: '#2563eb', marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>AI Generate</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Conflict-free schedule</div>
              </div>

              <div
                onClick={() => setCreateMethod('copy')}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: createMethod === 'copy' ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: createMethod === 'copy' ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <Copy size={18} style={{ color: '#7c3aed', marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Copy Class</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Clone another section</div>
              </div>

              <div
                onClick={() => setCreateMethod('blank')}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: createMethod === 'blank' ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: createMethod === 'blank' ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <Plus size={18} style={{ color: '#10b981', marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Blank Grid</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Assign manually</div>
              </div>
            </div>
          </div>

          {/* If Copy selected, show source class picker */}
          {createMethod === 'copy' && (
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Select Source Class to Copy From</label>
              <select
                className="form-select"
                value={copySourceKey}
                onChange={(e) => setCopySourceKey(e.target.value)}
                required
              >
                <option value="">-- Choose Class --</option>
                {allDepartmentClasses.map(c => (
                  <option key={c.key} value={c.key}>
                    {c.programName} - Year {c.year} ({c.section})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
            <Button variant="outline" size="sm" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Create & Apply Schedule
            </Button>
          </div>
        </form>
      </Modal>

      {/* BATCH GENERATE ALL DEPARTMENT TIMETABLES MODAL */}
      <Modal
        isOpen={isBatchGenerating}
        onClose={() => !isBatchGenerating && setIsBatchGenerating(false)}
        title="Department AI Timetable Synthesizer"
        subtitle="Multi-class constraint solver across all classes in Department of Computer Science"
        icon={Sparkles}
      >
        <div style={{ padding: '1rem 0', textAlign: 'center' }}>
          {!batchComplete ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <LoadingAnimation size="lg" text="Optimizing Department Schedules..." />
              <div style={{ width: '100%', maxWidth: '380px', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-full)', height: '8px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((batchStep + 1) / batchSteps.length) * 100}%`,
                    backgroundColor: 'var(--primary-600)',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {batchSteps[batchStep]}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--success-50)', color: 'var(--success-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={30} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                Master Timetables Ready!
              </h3>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', maxWidth: '380px' }}>
                Synthesized 0-conflict schedules for all 8 classes in B.Sc. CS & M.Sc. CS. No faculty collisions found.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Button variant="outline" size="sm" onClick={() => setIsBatchGenerating(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" icon={Check} onClick={handleApplyBatchGeneration}>
                  Apply to All Department Classes
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* MANAGE & DELETE SECTIONS MODAL */}
      <Modal
        isOpen={isAddSectionOpen}
        onClose={() => {
          setIsAddSectionOpen(false);
          setDeleteConfirmSection(null);
        }}
        title="Manage Department Class Sections"
        subtitle={`Add new sections or delete existing class sections • ${totalSectionsCount} Active Sections in CS Dept`}
        icon={Users}
        maxWidth="720px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Degree Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.65rem' }}>
            <button
              type="button"
              onClick={() => setManageSectionTab('ALL')}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: manageSectionTab === 'ALL' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: manageSectionTab === 'ALL' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              All Degree Programs ({programs.length})
            </button>
            {programs.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setManageSectionTab(p.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  backgroundColor: manageSectionTab === p.id ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                  color: manageSectionTab === p.id ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {p.name} ({p.sections.length} Sec)
              </button>
            ))}
          </div>

          {/* 1. Add New Section Card */}
          {canEdit && (
            <form onSubmit={handleAddSectionSubmit} style={{ padding: '1.1rem', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Plus size={16} style={{ color: 'var(--primary-600)' }} />
                  <span>Add New Class Section</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Auto-generates weekly timetable slots for all years
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr auto', gap: '0.75rem', alignItems: 'flex-end' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.76rem', fontWeight: 600 }}>Degree Program</label>
                  <select
                    className="form-select"
                    value={addSectionProgram}
                    onChange={(e) => setAddSectionProgram(e.target.value)}
                    style={{ fontSize: '0.82rem', padding: '0.5rem 0.65rem' }}
                  >
                    {programs.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.level})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.76rem', fontWeight: 600 }}>New Section Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newSectionName}
                    onChange={(e) => setNewSectionName(e.target.value)}
                    placeholder="e.g. Section C or Shift II - Section A"
                    style={{ fontSize: '0.82rem', padding: '0.5rem 0.65rem' }}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" size="sm" icon={Plus} style={{ height: '38px', minWidth: '100px' }}>
                  Add Section
                </Button>
              </div>

              {/* Quick Suggestions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Presets:</span>
                {['Section C', 'Section D', 'Shift II - Section A', 'Shift II - Section B', 'Honors Section'].map((sug, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setNewSectionName(sug)}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px dashed var(--border-medium)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--primary-700)',
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    + {sug}
                  </button>
                ))}
              </div>
            </form>
          )}

          {/* 2. Existing Sections List with Delete Button */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Registered Class Sections & Schedules:
              </div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Admin can add or delete sections. Min 1 section required per program.
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '340px', overflowY: 'auto', paddingRight: '0.25rem' }}>
              {programs
                .filter(prog => manageSectionTab === 'ALL' || prog.id === manageSectionTab)
                .map(prog => (
                  <div
                    key={prog.id}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1rem',
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-700)' }}>
                          {prog.name}
                        </span>
                        <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                          • {prog.years.length} Academic Years ({prog.years.map(y => `Yr ${y.year}`).join(', ')})
                        </span>
                      </div>
                      <Badge variant="primary" size="sm">
                        {prog.sections.length} {prog.sections.length === 1 ? 'Section' : 'Sections'} Active
                      </Badge>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {prog.sections.map(sec => {
                        // Count scheduled periods for this section across all years in this program
                        let totalScheduledInSec = 0;
                        prog.years.forEach(y => {
                          const k = `${prog.id}_${y.year}_${sec}`;
                          const tt = classTimetables?.[k];
                          if (tt && tt.grid) {
                            Object.values(tt.grid).forEach(dayList => {
                              dayList?.forEach(c => {
                                if (!c.isBreak && !c.isFree && c.code) totalScheduledInSec++;
                              });
                            });
                          }
                        });

                        const isConfirmingThis = deleteConfirmSection?.programId === prog.id && deleteConfirmSection?.sectionName === sec;

                        return (
                          <div
                            key={sec}
                            style={{
                              padding: '0.65rem 0.85rem',
                              backgroundColor: 'var(--bg-surface-hover)',
                              borderRadius: 'var(--radius-md)',
                              border: isConfirmingThis ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.5rem',
                              transition: 'all 0.15s'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                <div style={{
                                  width: '28px',
                                  height: '28px',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                  color: 'var(--primary-600)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.8rem',
                                  fontWeight: 700
                                }}>
                                  {sec.includes('Section') ? sec.replace('Section', '').trim() || 'S' : sec.charAt(0)}
                                </div>
                                <div>
                                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                    {sec}
                                  </span>
                                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                                    Applies to: {prog.years.map(y => `Year ${y.year}`).join(', ')} • {totalScheduledInSec} periods scheduled
                                  </div>
                                </div>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedProgram(prog.id);
                                    setSelectedSection(sec);
                                    setIsAddSectionOpen(false);
                                  }}
                                  style={{
                                    border: '1px solid var(--border-medium)',
                                    backgroundColor: 'var(--bg-surface)',
                                    color: 'var(--text-primary)',
                                    padding: '0.3rem 0.65rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.74rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                  }}
                                  title="View timetable for this section"
                                >
                                  View Timetable
                                </button>

                                {canEdit && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (prog.sections.length <= 1) {
                                        showToast(`Cannot delete section. ${prog.name} must have at least one section.`, 'error');
                                        return;
                                      }
                                      setDeleteConfirmSection({
                                        programId: prog.id,
                                        programName: prog.name,
                                        sectionName: sec
                                      });
                                    }}
                                    disabled={prog.sections.length <= 1}
                                    style={{
                                      border: '1px solid rgba(239, 68, 68, 0.25)',
                                      backgroundColor: 'rgba(239, 68, 68, 0.04)',
                                      color: prog.sections.length <= 1 ? 'var(--text-muted)' : '#ef4444',
                                      cursor: prog.sections.length <= 1 ? 'not-allowed' : 'pointer',
                                      padding: '0.3rem 0.65rem',
                                      borderRadius: 'var(--radius-sm)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.3rem',
                                      fontSize: '0.74rem',
                                      fontWeight: 600,
                                      opacity: prog.sections.length <= 1 ? 0.4 : 1
                                    }}
                                    title={prog.sections.length <= 1 ? 'Cannot delete the only remaining section' : `Delete ${sec}`}
                                  >
                                    <Trash2 size={13} />
                                    <span>Delete Section</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Inline Deletion Confirmation Box */}
                            {isConfirmingThis && (
                              <div
                                style={{
                                  marginTop: '0.35rem',
                                  padding: '0.75rem',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                                  border: '1px solid rgba(239, 68, 68, 0.3)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  flexWrap: 'wrap',
                                  gap: '0.5rem'
                                }}
                              >
                                <div style={{ fontSize: '0.78rem', color: '#b91c1c', fontWeight: 600 }}>
                                  ⚠️ Permanently delete "{sec}" from {prog.name}? All weekly timetables for this section will be removed.
                                </div>
                                <div style={{ display: 'flex', gap: '0.4rem' }}>
                                  <button
                                    type="button"
                                    onClick={() => setDeleteConfirmSection(null)}
                                    style={{
                                      padding: '0.25rem 0.6rem',
                                      borderRadius: 'var(--radius-xs)',
                                      border: '1px solid var(--border-medium)',
                                      backgroundColor: 'var(--bg-surface)',
                                      fontSize: '0.74rem',
                                      fontWeight: 600,
                                      cursor: 'pointer'
                                    }}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSection(prog.id, sec)}
                                    style={{
                                      padding: '0.25rem 0.65rem',
                                      borderRadius: 'var(--radius-xs)',
                                      border: 'none',
                                      backgroundColor: '#dc2626',
                                      color: '#ffffff',
                                      fontSize: '0.74rem',
                                      fontWeight: 700,
                                      cursor: 'pointer'
                                    }}
                                  >
                                    Confirm Delete
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setIsAddSectionOpen(false);
                setDeleteConfirmSection(null);
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </Modal>

      {/* EDIT PERIOD CELL MODAL */}
      <Modal
        isOpen={!!editingCell}
        onClose={() => setEditingCell(null)}
        title={canEdit ? `Edit Period — ${selectedYear} Year (${selectedSection})` : `Lecture Session Details`}
        subtitle={editingCell ? `${editingCell.day} • ${timetableSlots[editingCell.periodIndex]?.isBreak ? 'Interval (15m)' : `Period ${timetableSlots[editingCell.periodIndex]?.period || editingCell.periodIndex + 1}`} (${getSlotTime(editingCell.day, editingCell.periodIndex)})` : ''}
        icon={canEdit ? Edit2 : BookOpen}
      >
        {canEdit ? (
          <form onSubmit={handleSaveCell}>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={editIsFree}
                  onChange={(e) => setEditIsFree(e.target.checked)}
                />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Mark as Free / Mentoring Period</span>
              </label>
            </div>

            {!editIsFree && (
              <>
                <div className="form-group">
                  <label className="form-label form-label-required">Curriculum Subject Course</label>
                  <select
                    className="form-select"
                    value={editSubjectCode}
                    onChange={(e) => handleSubjectDropdownChange(e.target.value)}
                    required
                  >
                    <optgroup label={`${currentProgram.name} Courses`}>
                      {activeProgramSubjects.map(sub => (
                        <option key={sub.code} value={sub.code}>
                          {sub.code} - {sub.name} ({sub.semester})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Other CS Courses">
                      {subjects.filter(s => s.program !== selectedProgram).map(sub => (
                        <option key={sub.code} value={sub.code}>
                          {sub.code} - {sub.name} ({sub.programName || sub.program})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required">Assigned Professor</label>
                  <select
                    className="form-select"
                    value={editFaculty}
                    onChange={(e) => setEditFaculty(e.target.value)}
                    required
                  >
                    {facultyList.map(user => (
                      <option key={user.id} value={user.name}>
                        {user.name} ({user.designation})
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div className="form-group">
                    <label className="form-label form-label-required">Venue / Room</label>
                    <input
                      type="text"
                      className="form-input"
                      value={editRoom}
                      onChange={(e) => setEditRoom(e.target.value)}
                      placeholder="e.g. LH-201 or Lab-3"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Period Type</label>
                    <select
                      className="form-select"
                      value={editIsLab ? 'lab' : 'theory'}
                      onChange={(e) => setEditIsLab(e.target.value === 'lab')}
                    >
                      <option value="theory">Theory Lecture</option>
                      <option value="lab">Practical Laboratory</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
              <Button variant="outline" size="sm" onClick={() => setEditingCell(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" icon={Save}>
                Save Allocation
              </Button>
            </div>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                {editingCell?.data?.subject} ({editingCell?.data?.code})
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
                <div><strong>Class:</strong> {selectedYear} Year ({selectedSection})</div>
                <div><strong>Faculty:</strong> {editingCell?.data?.faculty}</div>
                <div><strong>Venue:</strong> {editingCell?.data?.room}</div>
                <div><strong>Type:</strong> {editingCell?.data?.isLab ? 'Lab Practical' : 'Theory'}</div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* CURRICULUM SUBJECT MANAGER MODAL */}
      <Modal
        isOpen={isSubjectManagerOpen}
        onClose={() => {
          setIsSubjectManagerOpen(false);
          setEditingSubjectObj(null);
        }}
        title="Curriculum Subjects Master"
        subtitle="Manage department courses and faculty mappings"
        icon={BookOpen}
        size="lg"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Program Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
            <button
              onClick={() => setSubjectManagerTab('UG_BSCCS')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: subjectManagerTab === 'UG_BSCCS' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: subjectManagerTab === 'UG_BSCCS' ? '#ffffff' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              B.Sc. Computer Science (UG)
            </button>
            <button
              onClick={() => setSubjectManagerTab('PG_MSCCS')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: subjectManagerTab === 'PG_MSCCS' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: subjectManagerTab === 'PG_MSCCS' ? '#ffffff' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              M.Sc. Computer Science (PG)
            </button>
          </div>

          {/* Add Subject Form */}
          <form onSubmit={handleCreateSubject} style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.65rem' }}>
              + Add New Subject to {subjectManagerTab === 'UG_BSCCS' ? 'B.Sc. CS' : 'M.Sc. CS'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.65rem' }}>
              <input
                type="text"
                placeholder="Code (e.g. CS307)"
                value={newCode}
                onChange={(e) => setNewCode(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
                required
              />
              <input
                type="text"
                placeholder="Course Title"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem', gridColumn: 'span 2' }}
                required
              />
              <select
                value={newSemester}
                onChange={(e) => setNewSemester(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
              >
                <option value="Semester I">Semester I</option>
                <option value="Semester II">Semester II</option>
                <option value="Semester III">Semester III</option>
                <option value="Semester IV">Semester IV</option>
                <option value="Semester V">Semester V</option>
                <option value="Semester VI">Semester VI</option>
              </select>
              <select
                value={newCredits}
                onChange={(e) => setNewCredits(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
              >
                <option value="3">3 Credits</option>
                <option value="4">4 Credits</option>
                <option value="5">5 Credits</option>
              </select>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
              >
                <option value="Theory">Theory</option>
                <option value="Theory + Lab">Theory + Lab</option>
                <option value="Lab">Practical Lab</option>
              </select>
              <select
                value={newFaculty}
                onChange={(e) => setNewFaculty(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem', gridColumn: 'span 2' }}
              >
                {facultyList.map(u => (
                  <option key={u.id} value={u.name}>{u.name}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.65rem' }}>
              <Button type="submit" variant="primary" size="sm" icon={Plus}>
                Add to Curriculum
              </Button>
            </div>
          </form>

          {/* Subjects Table */}
          <div style={{ maxHeight: '240px', overflowY: 'auto', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface-hover)', textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Code</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Course Name</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Semester</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Credits</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Faculty</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subjects
                  .filter(s => s.program === subjectManagerTab || (!s.program && subjectManagerTab === 'UG_BSCCS'))
                  .map((sub) => (
                    <tr key={sub.code} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                        {sub.code}
                      </td>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 600 }}>
                        {sub.name}
                        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>
                          {sub.type}
                        </span>
                      </td>
                      <td style={{ padding: '0.5rem 0.75rem' }}>{sub.semester}</td>
                      <td style={{ padding: '0.5rem 0.75rem' }}><Badge variant="primary">{sub.credits}C</Badge></td>
                      <td style={{ padding: '0.5rem 0.75rem' }}>{sub.faculty}</td>
                      <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right' }}>
                        <button
                          onClick={() => deleteSubject(sub.code)}
                          className="btn btn-ghost btn-sm btn-icon"
                          style={{ color: '#ef4444' }}
                          title="Delete Subject"
                        >
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Timetable;

`

## File: src\pages\UserManagement.jsx

`jsx
import React, { useState } from 'react';
import { useAcademic } from '../context/AcademicContext';
import {
  Users,
  Plus,
  Search,
  Edit2,
  Lock,
  Power,
  Eye,
  ShieldCheck,
  Mail,
  Phone,
  Briefcase
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Table } from '../components/common/Table';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const UserManagement = () => {
  const { users, addUser, updateUser, toggleUserStatus, showToast } = useAcademic();

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Modals
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [viewUser, setViewUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [resetPassUser, setResetPassUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  // New User Form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('staff');
  const [department, setDepartment] = useState('Department of Computer Science');
  const [deptCode, setDeptCode] = useState('CS');
  const [designation, setDesignation] = useState('Assistant Professor');
  const [empId, setEmpId] = useState('');
  const [phone, setPhone] = useState('');

  const filteredUsers = users.filter(u => {
    const matchSearch = !searchTerm ||
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.empId?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchRole = roleFilter === 'All' || u.role === roleFilter;

    return matchSearch && matchRole;
  });

  const existingHOD = users.find(u => u.role === 'hod');

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (role === 'hod' && existingHOD) {
      showToast(`The department already has a designated Head of Department (${existingHOD.name}). Only 1 HOD is permitted.`, 'error');
      return;
    }

    addUser({
      name,
      email,
      role,
      department: 'Department of Computer Science',
      deptCode: 'CS',
      designation,
      empId: empId || `FAC-CS-${Math.floor(100 + Math.random() * 900)}`,
      phone: phone || '+1 (555) 000-1234',
      assignedSubjects: []
    });

    setIsAddUserOpen(false);
    setName('');
    setEmail('');
    setEmpId('');
    setPhone('');
    showToast(`Faculty account created successfully for ${name}!`, 'success');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (resetPassUser) {
      showToast(`Temporary password generated and emailed to ${resetPassUser.email}`, 'success');
      setResetPassUser(null);
      setNewPassword('');
    }
  };

  const columns = [
    {
      header: 'Faculty / User',
      key: 'name',
      render: (val, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.avatar}
            alt={val}
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
              {val}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {row.email}
            </span>
          </div>
        </div>
      )
    },
    {
      header: 'Role',
      key: 'role',
      sortable: true,
      width: '100px',
      render: (val) => (
        <Badge variant={val === 'admin' ? 'danger' : val === 'hod' ? 'purple' : 'primary'}>
          {val.toUpperCase()}
        </Badge>
      )
    },
    {
      header: 'Department',
      key: 'deptCode',
      sortable: true,
      width: '90px',
      render: (val, row) => (
        <span style={{ fontWeight: 600, fontSize: '0.82rem' }} title={row.department}>
          {val}
        </span>
      )
    },
    {
      header: 'Employee ID',
      key: 'empId',
      sortable: true,
      width: '130px',
      render: (val) => <span style={{ fontSize: '0.82rem', fontFamily: 'monospace' }}>{val}</span>
    },
    {
      header: 'Status',
      key: 'status',
      sortable: true,
      width: '100px',
      render: (val) => (
        <Badge variant={val === 'Active' ? 'success' : 'danger'}>
          {val}
        </Badge>
      )
    },
    {
      header: 'Actions',
      key: 'id',
      width: '160px',
      render: (id, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <button
            onClick={() => setViewUser(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="View Details"
          >
            <Eye size={15} />
          </button>
          <button
            onClick={() => setEditUser(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Edit User"
          >
            <Edit2 size={15} />
          </button>
          <button
            onClick={() => setResetPassUser(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Reset Password"
          >
            <Lock size={15} />
          </button>
          <button
            onClick={() => toggleUserStatus(id)}
            className="btn btn-ghost btn-sm btn-icon"
            title={row.status === 'Active' ? 'Deactivate User' : 'Activate User'}
            style={{ color: row.status === 'Active' ? 'var(--warning-600)' : 'var(--success-600)' }}
          >
            <Power size={15} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Institutional User & Identity Management"
        subtitle="Provision faculty credentials, manage department affiliations, and enforce role-based permissions"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'User Management' }
        ]}
        actions={
          <Button
            variant="primary"
            size="sm"
            icon={Plus}
            onClick={() => setIsAddUserOpen(true)}
          >
            Add New User
          </Button>
        }
      />

      {/* Filter Bar */}
      <div className="card" style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search
              size={16}
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', pointerEvents: 'none' }}
            />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '36px' }}
              placeholder="Search faculty by name, email, employee ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Role:</span>
            <select
              className="form-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              style={{ width: 'auto', padding: '0.45rem 0.75rem' }}
            >
              <option value="All">All Roles</option>
              <option value="staff">Staff (Faculty)</option>
              <option value="hod">HOD (Head of Dept)</option>
              <option value="admin">System Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <Table columns={columns} data={filteredUsers} pageSize={6} />

      {/* Add User Modal */}
      <Modal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        title="Provision New Faculty Account"
        icon={Plus}
      >
        <form onSubmit={handleCreateUser}>
          <div className="form-group">
            <label className="form-label form-label-required">Full Name</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Prof. David Chang"
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Institutional Email</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@apexcollege.edu"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">System Role</label>
              <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="staff">Staff (Teaching Faculty)</option>
                <option value="hod" disabled={!!existingHOD}>
                  HOD (Head of Department) {existingHOD ? '— [Position Filled]' : ''}
                </option>
                <option value="admin">Central Administrator</option>
              </select>
              {role === 'hod' && existingHOD && (
                <div style={{ fontSize: '0.75rem', color: 'var(--warning-600)', marginTop: '0.25rem' }}>
                  ℹ️ Active HOD: {existingHOD.name}. Only one HOD is permitted for the Department of Computer Science.
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Department</label>
              <select
                className="form-select"
                value={deptCode}
                onChange={(e) => {
                  setDeptCode(e.target.value);
                  setDepartment('Department of Computer Science');
                }}
              >
                <option value="CS">Department of Computer Science (UG & PG)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Designation</label>
              <input
                type="text"
                className="form-input"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Assistant Professor"
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setIsAddUserOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Create User Account
            </Button>
          </div>
        </form>
      </Modal>

      {/* View User Modal */}
      <Modal
        isOpen={!!viewUser}
        onClose={() => setViewUser(null)}
        title="Faculty Profile & Credentials"
        icon={Users}
      >
        {viewUser && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={viewUser.avatar} alt={viewUser.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{viewUser.name}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{viewUser.designation} • {viewUser.department}</div>
                <Badge variant="primary" size="sm" style={{ marginTop: '0.35rem' }}>ID: {viewUser.empId}</Badge>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', backgroundColor: 'var(--bg-surface-hover)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
              <div><strong>Email:</strong> {viewUser.email}</div>
              <div><strong>Phone:</strong> {viewUser.phone || '+1 (555) 234-8901'}</div>
              <div><strong>Role:</strong> {viewUser.role.toUpperCase()}</div>
              <div><strong>Status:</strong> <Badge>{viewUser.status}</Badge></div>
            </div>
          </div>
        )}
      </Modal>

      {/* Reset Password Modal */}
      <Modal
        isOpen={!!resetPassUser}
        onClose={() => setResetPassUser(null)}
        title="Reset User Credentials"
        subtitle={resetPassUser ? `Generating security token for ${resetPassUser.name}` : ''}
        icon={Lock}
      >
        <form onSubmit={handlePasswordReset}>
          <div className="form-group">
            <label className="form-label form-label-required">Set Temporary Password</label>
            <input
              type="text"
              className="form-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="e.g. ApexSecure2026!#"
              required
            />
            <span className="form-hint">A verification email will be dispatched to {resetPassUser?.email}.</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setResetPassUser(null)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Dispatch Password Reset
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

`

## File: src\styles\animations.css

`css
/* Subtle, Academic Transitions and Utility Animations */

.page-enter {
  animation: fadeIn 0.18s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.spin-fast {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Print Styles */
@media print {
  .no-print, .sidebar-container, .header-container {
    display: none !important;
  }
  body {
    background: #ffffff !important;
    color: #000000 !important;
  }
  .main-wrapper {
    margin: 0 !important;
    padding: 0 !important;
    height: auto !important;
    overflow: visible !important;
  }
  .main-content {
    padding: 0 !important;
    max-width: 100% !important;
  }
}

`

## File: src\styles\global.css

`css
@import './variables.css';
@import './animations.css';

/* CSS Reset & Academic Base */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 14.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-app);
  color: var(--text-primary);
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Institutional Headings */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.25;
}

h1 { font-size: 1.55rem; font-weight: 700; letter-spacing: -0.01em; }
h2 { font-size: 1.25rem; font-weight: 600; }
h3 { font-size: 1.05rem; font-weight: 600; }
h4 { font-size: 0.95rem; font-weight: 600; }

p {
  color: var(--text-secondary);
}

a {
  color: var(--primary-600);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Scrollbars */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-app);
}

::-webkit-scrollbar-thumb {
  background: var(--border-medium);
  border-radius: var(--radius-xs);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--border-strong);
}

/* App Layout Shell */
.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--bg-app);
}

.sidebar-container {
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 95;
  transition: width var(--transition-base), transform var(--transition-base);
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  padding: 1.25rem 1.5rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

/* Responsive Breakpoints */
@media (max-width: 992px) {
  .sidebar-container {
    position: fixed !important;
    top: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
  }

  .sidebar-container.open {
    transform: translateX(0) !important;
  }

  .mobile-backdrop {
    display: block !important;
  }

  .mobile-close-btn {
    display: block !important;
  }

  .hide-on-mobile {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 0.85rem;
  }
}

/* Institutional Card */
.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  box-shadow: var(--shadow-xs);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--border-light);
}

.card-title {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.1rem;
}

/* Clean Forms */
.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.form-label-required::after {
  content: ' *';
  color: var(--danger-600);
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 0.55rem 0.75rem;
  font-size: 0.88rem;
  font-family: inherit;
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--primary-600);
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.15);
}

.form-input::placeholder, .form-textarea::placeholder {
  color: var(--text-light);
}

.form-input:disabled, .form-select:disabled {
  background-color: var(--bg-surface-hover);
  cursor: not-allowed;
  opacity: 0.75;
}

.form-error {
  font-size: 0.75rem;
  color: var(--danger-600);
  margin-top: 0.2rem;
}

.form-hint {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.5rem 0.95rem;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: inherit;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  pointer-events: none;
}

.btn-primary {
  background-color: var(--primary-600);
  color: #ffffff;
  border-color: var(--primary-600);
}

.btn-primary:hover {
  background-color: var(--primary-700);
  border-color: var(--primary-700);
}

.btn-secondary {
  background-color: var(--primary-50);
  color: var(--primary-700);
  border-color: var(--primary-200);
}

.btn-secondary:hover {
  background-color: var(--primary-100);
}

.btn-outline {
  background-color: transparent;
  color: var(--text-primary);
  border-color: var(--border-medium);
}

.btn-outline:hover {
  background-color: var(--bg-surface-hover);
  border-color: var(--border-strong);
}

.btn-danger {
  background-color: var(--danger-600);
  color: #ffffff;
  border-color: var(--danger-600);
}

.btn-danger:hover {
  background-color: var(--danger-700);
}

.btn-success {
  background-color: var(--success-600);
  color: #ffffff;
  border-color: var(--success-600);
}

.btn-success:hover {
  background-color: var(--success-700);
}

.btn-ghost {
  background-color: transparent;
  color: var(--text-secondary);
}

.btn-ghost:hover {
  background-color: var(--bg-surface-hover);
  color: var(--text-primary);
}

.btn-sm {
  padding: 0.35rem 0.65rem;
  font-size: 0.78rem;
  border-radius: var(--radius-sm);
}

.btn-lg {
  padding: 0.65rem 1.25rem;
  font-size: 0.95rem;
}

/* Institutional Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.55rem;
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: var(--radius-xs);
  line-height: 1.3;
}

.badge-primary {
  background-color: var(--primary-50);
  color: var(--primary-700);
  border: 1px solid var(--primary-200);
}

.badge-success {
  background-color: var(--success-50);
  color: var(--success-700);
  border: 1px solid var(--success-100);
}

.badge-warning {
  background-color: var(--warning-50);
  color: var(--warning-700);
  border: 1px solid var(--warning-100);
}

.badge-danger {
  background-color: var(--danger-50);
  color: var(--danger-700);
  border: 1px solid var(--danger-100);
}

.badge-info {
  background-color: var(--info-50);
  color: var(--info-700);
  border: 1px solid var(--info-100);
}

.badge-neutral {
  background-color: var(--bg-surface-hover);
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
}

/* Official Academic Tables */
.table-container {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  background-color: var(--bg-surface);
}

.academic-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.85rem;
}

.academic-table th {
  background-color: var(--bg-app);
  color: var(--text-secondary);
  font-weight: 600;
  padding: 0.65rem 0.85rem;
  border-bottom: 1px solid var(--border-medium);
  white-space: nowrap;
}

.academic-table td {
  padding: 0.65rem 0.85rem;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-primary);
}

.academic-table tbody tr:hover {
  background-color: var(--bg-surface-hover);
}

.academic-table tbody tr:last-child td {
  border-bottom: none;
}

/* Utility Grid */
.grid-1 { display: grid; grid-template-columns: 1fr; gap: 1rem; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }

@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
}

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }

.text-sm { font-size: 0.82rem; }
.text-xs { font-size: 0.72rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }

`

## File: src\styles\variables.css

`css
:root {
  /* Institutional Academic Palette - Navy, Slate, Clean White */
  --primary-950: #0a192f;
  --primary-900: #0f2744;
  --primary-800: #16365c;
  --primary-700: #1b4b7d;
  --primary-600: #1e40af; /* Classic Academic Navy */
  --primary-500: #2563eb;
  --primary-400: #3b82f6;
  --primary-300: #93c5fd;
  --primary-200: #bfdbfe;
  --primary-100: #e0e7ff;
  --primary-50: #f0f4ff;

  /* Institutional Secondary / Neutral Accents */
  --accent-slate: #475569;
  --accent-blue: #0284c7;

  /* Official Status Colors */
  --success-700: #047857;
  --success-600: #059669;
  --success-500: #10b981;
  --success-100: #d1fae5;
  --success-50: #ecfdf5;

  --warning-700: #b45309;
  --warning-600: #d97706;
  --warning-500: #f59e0b;
  --warning-100: #fef3c7;
  --warning-50: #fffbeb;

  --danger-700: #b91c1c;
  --danger-600: #dc2626;
  --danger-500: #ef4444;
  --danger-100: #fee2e2;
  --danger-50: #fef2f2;

  --info-700: #0369a1;
  --info-600: #0284c7;
  --info-500: #0ea5e9;
  --info-100: #e0f2fe;
  --info-50: #f0f9ff;

  /* Neutrals (Official College Light Mode) */
  --bg-app: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-hover: #f1f5f9;
  --bg-surface-active: #e2e8f0;
  --bg-sidebar: #0f2744;
  --bg-sidebar-hover: rgba(255, 255, 255, 0.08);
  --bg-sidebar-active: #1e3a8a;

  --border-subtle: #f1f5f9;
  --border-light: #e2e8f0;
  --border-medium: #cbd5e1;
  --border-strong: #94a3b8;
  --border-focus: #1e40af;

  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #64748b;
  --text-light: #94a3b8;
  --text-inverse: #ffffff;
  --text-sidebar: #cbd5e1;
  --text-sidebar-bright: #ffffff;

  /* Subtle Official Shadows */
  --shadow-xs: 0 1px 2px 0 rgba(15, 23, 42, 0.04);
  --shadow-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
  --shadow-dropdown: 0 10px 25px -5px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05);

  /* Precise Standard Radii */
  --radius-xs: 3px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Spacing */
  --header-height: 64px;
  --sidebar-width: 250px;
  --sidebar-collapsed-width: 68px;

  /* Transitions */
  --transition-fast: 120ms ease-out;
  --transition-base: 180ms ease-out;
}

/* Institutional Dark Mode */
[data-theme='dark'] {
  --bg-app: #0b1120;
  --bg-surface: #111827;
  --bg-surface-hover: #1f2937;
  --bg-surface-active: #374151;
  --bg-sidebar: #0a0f1d;
  --bg-sidebar-hover: rgba(255, 255, 255, 0.06);
  --bg-sidebar-active: #1e3a8a;

  --border-subtle: #1f2937;
  --border-light: #2d3748;
  --border-medium: #4b5563;
  --border-strong: #6b7280;

  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --text-light: #64748b;

  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.35);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.45);
  --shadow-dropdown: 0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1);

  --primary-50: #172554;
  --primary-100: #1e3a8a;
  --success-50: #064e3b;
  --warning-50: #451a03;
  --danger-50: #450a0a;
  --info-50: #082f49;
}

`

## File: vite.config.js

`js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

`

