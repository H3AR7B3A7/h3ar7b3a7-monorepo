# H3Ar7B3A7

## Generate new monorepo and angular project

> npx create-nx-workspace@latest --preset=angular h3ar7b3a7

Type: monorepo
Bundler: esbuild
Project name: profile-page
Styling: sass
SSR: true

## Add scripts to package.json

```
"scripts": {
  "serve": "npx nx serve profile-page",
  "build": "npx nx build profile-page --configuration production"
}
```

## Edit project.json

```
"development": {
  "ssr": false,
  "prerender": false
}
```

## Generate component

> npx nx g @nx/angular:component home --project profile-page


---

&copy; H3AR7B3A7, December 2023
