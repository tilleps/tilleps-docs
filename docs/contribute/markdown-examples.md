# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Tasklists

**Input**

```markdown
- [ ] item one
- [x] item two
- [ ] item three
```

- [ ] item one
- [x] item two
- [ ] item three

## Mermaid Diagrams

**Input**

````markdown
```mmd
flowchart LR
  Start --> Stop
```
````

**Output**

```mmd
flowchart LR
  Start --> Stop
```

**Input**

````markdown
```mermaid
flowchart LR
  Start --> Stop
```
````

**Output**

```mermaid
flowchart LR
  Start --> Stop
```

## Displaying ``` within a code block

`````md
````
```
Use 4 backticks as delimiters
```
````
`````

Result

````md
```
Use 4 backticks as delimiters
```
````

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
