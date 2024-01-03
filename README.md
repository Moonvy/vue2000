## 🥑 Vue2000

Vue 2 has reached End of Life, However, legacy projects using Vue2 will continue to exist. In many cases, the cost of upgrading projects to Vue3 is not proportional to the benefits.

So this is a fork of Vue v2.7.16, and we will try to continue some necessary maintenance and improvements.

## Usage

add `overrides` to your `package.json` file, and run `npm install`
**package.json**

#### npm

```diff
+    "overrides": {
+        "vue": "npm:vue2000@^2.7.16"
+    }
```

#### pnpm

```diff
+ "pnpm": {
+        "overrides": {
+            "vue@^2.7.14": "npm:vue2000@^2"
+        }
+    }
```

## Changelog

### Allow component names to use SVG tag reserved words by differing in case

In Vue2, if the component name is an SVG tag (such as `image`, `font`, `animate`, `desc`...), it will be created using SVG namespace, which is not visible on the Page.

Vue2 is case-insensitive when determining whether a component name is an SVG tag. This prevents you from using component names like `Image`, `Desc`, and `Animate`. In fact, this is not a necessary strategy, because SVG is case-sensitive, and Vue3 is also case-sensitive when determining whether the component name is an SVG tag.

**Related**:

- [Do not use built-in or reserved HTML elements as component id: input #7608](https://github.com/vuejs/vue/issues/7608])
- [Font Tags Stripped by Vue #4348](https://github.com/vuejs/vue/issues/4348)

### Fine-grained manual control over the Vue reactive system

```js
import { setUnobservable } from 'vue'

let MyData = {
    name     : "Name",
    playload : setUnobservable(HugeObject1)
    images   : setUnobservable(HugeObject2, { keys:["rawList", "__test__"] })
    info     : setUnobservable(HugeObject3, { whitelist:["ctime", "state"] })
}
export default {
    data(){
        reutrn { MyData }
    }
}

```

The Vue 2.x reactive system converts all data placed in the component's data to observable objects. If the object is complex, such as those from an external system, there can be significant performance overhead.

In vue2000, a method is provided to mark objects as non-observable. Moreover, you can individually specify whether some keys of the object are observable or unobservable.

```
import { setUnobservable, isUnobservable, clearUnobservable } from "vue"
```

- `setUnobservable<T>(value: T, options?: { whitelist: string[] } | { keys: string[]}): T ` : Mark the object as Unobservable, individual key values can be specified through options.
- `isUnobservable(value: any): boolean` : Determine whether the object is marked as non-observable.
- `clearUnobservable<T>(value: T): T` : Remove the non-observable mark from the object.

- [[feature] Ability to disable Vue observation](https://github.com/vuejs/vue/issues/2637)
- [vue-nonreactive.js] (https://github.com/rpkilby/vue-nonreactive/blob/master/vue-nonreactive.js)
