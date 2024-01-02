## Vue2000

Vue 2 has reached End of Life, However, legacy projects using Vue2 will continue to exist. In many cases, the cost of upgrading projects to Vue3 is not proportional to the benefits.

So this is a fork of Vue2, and we will try to continue some necessary maintenance and improvements.

## Usage

add `overrides` to your `package.json` file, and run `npm install`
**package.json**

```diff
+    "overrides": {
+        "vue": "npm:vue2000@^2.7.16"
+    }
```

## Changelog

### Allow component names to use SVG tag reserved words by differing in case

In Vue2, if the component name is an SVG tag (such as `image`, `font`, `animate`, `desc`...), it will be created using SVG namespace, which is not visible on the Page.

Vue2 is case-insensitive when determining whether a component name is an SVG tag. This prevents you from using component names like `Image`, `Desc`, and `Animate`. In fact, this is not a necessary strategy, because SVG is case-sensitive, and Vue3 is also case-sensitive when determining whether the component name is an SVG tag.

**Related**:

- [Do not use built-in or reserved HTML elements as component id: input #7608](https://github.com/vuejs/vue/issues/7608])
- [Font Tags Stripped by Vue #4348](https://github.com/vuejs/vue/issues/4348)
