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

## Generate component in project

> npx nx g @nx/angular:component home --project profile-page

_We shouldn't generate components directly in the project app folder, we should rather create them in feature libraries._

## Generate feature library

> npx nx generate @nx/angular:library --name=home --directory=libs/profile-page/feature-home

---

&copy; H3AR7B3A7, December 2023
