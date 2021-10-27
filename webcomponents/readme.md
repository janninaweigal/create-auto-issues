> https://developer.mozilla.org/zh-CN/docs/Web/Web_Components

- **Custom elements（自定义元素）：**一组JavaScript API，允许您定义custom elements及其行为，然后可以在您的用户界面中按照需要使用它们。
- **Shadow DOM（影子DOM）**：一组JavaScript API，用于将封装的“影子”DOM树附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **HTML templates（HTML模板）：** [` 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

实现web component的基本方法通常如下所示：

> 1. 创建一个类或函数来指定web组件的功能，如果使用类，请使用 ECMAScript 2015 的类语法(参阅[类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)获取更多信息)。
> 2. 使用 [`CustomElementRegistry.define()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法注册您的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。
> 3. 如果需要的话，使用[`Element.attachShadow()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow) 方法将一个shadow DOM附加到自定义元素上。使用通常的DOM方法向shadow DOM中添加子元素、事件监听器等等。
> 4. 如果需要的话，使用```<template> 和 <slot>```定义一个HTML模板。再次使用常规DOM方法克隆模板并将其附加到您的shadow DOM中。
> 5. 在页面任何您喜欢的位置使用自定义元素，就像使用常规HTML元素那样。



# Custom elements

> https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define



# Shadow DOM

可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。

用法：

> let shadow = elementRef.attachShadow({mode: 'open'});
> let shadow = elementRef.attachShadow({mode: 'closed'});

> https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM

如果你将一个 Shadow root 附加到一个 Custom element 上，并且将 `mode` 设置为 `closed`，那么就不可以从外部获取 Shadow DOM 了——`myCustomElem.shadowRoot` 将会返回 `null`。



# Templates 和 slots

当您必须在网页上重复使用相同的标记结构时，使用某种模板而不是一遍又一遍地重复相同的结构是有意义的。以前这是可行的，但HTML [` 元素使它更容易实现(这在现代浏览器中得到了很好的支持)。 此元素及其内容不会在DOM中呈现，但仍可使用JavaScript去引用它。

> template 还是会在dom结构上，但是不会展示在页面上，需要javascript获取它的引用，然后添加到DOM中。

## 示例

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <template id="common">
      <style>
        .title{
          color:red;
        }
      </style>
      <div class="title">标题</div>
      <div class="content">内容</div>
    </template>
    template使用
    <my-paragraph></my-paragraph>
    <script>
      // const template = document.getElementById("common");
      // document.body.appendChild(template.content);

      customElements.define('my-paragraph',
        class extends HTMLElement {
          constructor() {
            super();
            let template = document.getElementById('common');
            let content = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'});
            // shadowRoot.appendChild(content.cloneNode(true));

            // 样式
            const style = document.createElement('style');
            style.textContent = `
            .content{
              font-weight: bolder;
              font-size: 30px;
            }
            `
            // shadowRoot.appendChild(content.cloneNode(true));
            // content.textContent = '123'
            // shadowRoot.appendChild(content.cloneNode(true));
        }
      })
    </script>
  </body>
</html>
```



# 相关代码

## 创建style

```
// 为 shadow DOM 添加一些 CSS 样式
var style = document.createElement('style');

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;
```

## 创建link标签

```
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'style.css');
```

## 创建节点

```
var wrapper = document.createElement('span');
// 设置属性
wrapper.setAttribute('class','wrapper');
```

## 获取组件的属性

```
this.getAttribute('text');
```

## 创建shadow

```
let shadow = this.attachShadow({mode: 'open'});

// 创建节点
var para = document.createElement('p');
// 添加到shadow
shadow.appendChild(para);
```

# 获取shadow元素

```
// 获取到shadow的节点
// ,test 是 shadow的父节点
document.querySelector('.test').shadowRoot;
```

