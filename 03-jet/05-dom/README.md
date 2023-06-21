# DOM (Document Object Model)

## What is DOM?

DOM is a tree structure representation of the HTML document. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

For more information, see **[Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)**.

## Table of Contents

- [Accessing elements with querySelector](#accessing-elements-with-queryselector)
- [Accessing elements with querySelector and its attributes](#accessing-elements-with-queryselector-and-its-attributes)
  - [`.hasAttribute()`](#hasattribute)
  - [`.getAttribute()`](#getattribute)
  - [`.setAttribute()`](#setattribute)
  - [`.removeAttribute()`](#removeattribute)
- [Accessing elements with querySelector and its classes](#accessing-elements-with-queryselector-and-its-classes)
  - [`.classList`](#classlist)
  - [`.classList.add()`](#classlistadd)
  - [`.classList.remove()`](#classlistremove)
  - [`.classList.toggle()`](#classlisttoggle)
  - [`.classList.contains()`](#classlistcontains)
- [Accessing elements with querySelector and its styles](#accessing-elements-with-queryselector-and-its-styles)
  - [`.style`](#style)
  - [`.style.setProperty()`](#stylesetproperty)
  - [`.style.getPropertyValue()`](#stylegetpropertyvalue)
  - [`.style.removeProperty()`](#styleremoveproperty)
  - [`.style.cssText`](#stylecsstext)
  - [`.style.length`](#stylelength)
  - [`.style.parentRule`](#styleparentrule)
  - [`.style.getPropertyPriority()`](#stylegetpropertypriority)
  - [`.style.item()`](#styleitem)
  - [`.style.getPropertyCSSValue()`](#stylegetpropertycssvalue)
  - [`.style.getPropertyShorthand()`](#stylegetpropertyshorthand)
  - [`.style.isPropertyImplicit()`](#styleispropertyimplicit)
  - [`.style.setPropertyPriority()`](#stylesetpropertypriority)
  - [`.style.removeProperty()`](#styleremoveproperty)
- [Accessing elements with querySelector and its events](#accessing-elements-with-queryselector-and-its-events)
  - [`.onclick`](#onclick)
  - [`.ondblclick`](#ondblclick)
  - [`.onmousedown`](#onmousedown)
  - [`.onmouseenter`](#onmouseenter)
  - [`.onmouseleave`](#onmouseleave)
  - [`.onmousemove`](#onmousemove)
  - [`.onmouseover`](#onmouseover)
  - [`.onmouseout`](#onmouseout)
  - [`.onmouseup`](#onmouseup)
  - [`.onkeydown`](#onkeydown)
  - [`.onkeypress`](#onkeypress)
  - [`.onkeyup`](#onkeyup)
  - [`.onabort`](#onabort)
  - [`.onbeforeunload`](#onbeforeunload)
  - [`.onerror`](#onerror)
  - [`.onhashchange`](#onhashchange)
  - [`.onload`](#onload)
  - [`.onpageshow`](#onpageshow)
  - [`.onpagehide`](#onpagehide)
  - [`.onresize`](#onresize)
  - [`.onscroll`](#onscroll)
  - [`.onunload`](#onunload)
  - [`.onblur`](#onblur)
  - [`.onchange`](#onchange)
  - [`.onfocus`](#onfocus)
  - [`.onfocusin`](#onfocusin)
  - [`.onfocusout`](#onfocusout)
  - [`.oninput`](#oninput)
  - [`.oninvalid`](#oninvalid)
  - [`.onreset`](#onreset)
  - [`.onsearch`](#onsearch)
  - [`.onselect`](#onselect)
  - [`.onsubmit`](#onsubmit)
  - [`.ondrag`](#ondrag)
  - [`.ondragend`](#ondragend)
  - [`.ondragenter`](#ondragenter)
  - [`.ondragleave`](#ondragleave)
  - [`.ondragover`](#ondragover)
  - [`.ondragstart`](#ondragstart)
  - [`.ondrop`](#ondrop)
  - [`.oncopy`](#oncopy)
  - [`.oncut`](#oncut)
  - [`.onpaste`](#onpaste)
  - [`.onafterprint`](#onafterprint)
  - [`.onbeforeprint`](#onbeforeprint)
  - [`.onabort`](#onabort)
  - [`.oncanplay`](#oncanplay)
  - [`.oncanplaythrough`](#oncanplaythrough)
  - [`.ondurationchange`](#ondurationchange)
  - [`.onemptied`](#onemptied)
  - [`.onended`](#onended)
  - [`.onerror`](#onerror)
  - [`.onloadeddata`](#onloadeddata)
  - [`.onloadedmetadata`](#onloadedmetadata)
  - [`.onloadstart`](#onloadstart)
  - [`.onpause`](#onpause)
  - [`.onplay`](#onplay)
  - [`.onplaying`](#onplaying)
  - [`.onprogress`](#onprogress)
  - [`.onratechange`](#onratechange)
  - [`.onreadystatechange`](#onreadystatechange)
  - and more coming soon...

### Accessing elements with querySelector

The `querySelector()` method returns the first element that matches a specified CSS selector(s) in the document.

```js
const element = document.querySelector(selector);
```

### Accessing elements with querySelector and its attributes

#### `.hasAttribute()`

The `hasAttribute()` method returns a Boolean value indicating whether the specified element has the specified attribute or not.

```js
const element = document.querySelector(selector);
const hasAttribute = element.hasAttribute(attribute);
```

#### `.getAttribute()`

The `getAttribute()` method returns the value of the attribute with the specified name, of an element.

```js
const element = document.querySelector(selector);
const attributeValue = element.getAttribute(attribute);
```

#### `.setAttribute()`

The `setAttribute()` method adds the specified attribute to an element, and gives it the specified value.

```js
const element = document.querySelector(selector);
element.setAttribute(attribute, value);
```

#### `.removeAttribute()`

The `removeAttribute()` method removes the specified attribute from an element.

```js
const element = document.querySelector(selector);
element.removeAttribute(attribute);
```

### Accessing elements with querySelector and its classes

#### `.classList`

The `classList` property returns the class name(s) of an element, as a DOMTokenList object.

```js
const element = document.querySelector(selector);
const classList = element.classList;
```

#### `.classList.add()`

The `add()` method adds one or more class names to the specified element.

```js
const element = document.querySelector(selector);
element.classList.add(class);
```

#### `.classList.remove()`

The `remove()` method removes one or more class names from the specified element.

```js
const element = document.querySelector(selector);
element.classList.remove(class);
```

#### `.classList.toggle()`

The `toggle()` method toggles between a class name for an element.

```js
const element = document.querySelector(selector);
element.classList.toggle(class);
```

#### `.classList.contains()`

The `contains()` method returns a Boolean value indicating whether an element has the specified class name or not.

```js
const element = document.querySelector(selector);
const containsClass = element.classList.contains(class);
```

### Accessing elements with querySelector and its styles

#### `.style`

The `style` property is used to get as well as set the inline style of an element.

```js
const element = document.querySelector(selector);

// Get the inline style
const style = element.style;

// Set the inline style
element.style = style;
```

#### `.style.setProperty()`

The `setProperty()` method sets a new value for a property on a CSS style declaration object.

```js
const element = document.querySelector(selector);
element.style.setProperty(property, value);
```

#### `.style.getPropertyValue()`

The `getPropertyValue()` method returns the value of a specified CSS property.

```js
const element = document.querySelector(selector);
const propertyValue = element.style.getPropertyValue(property);
```

#### `.style.removeProperty()`

The `removeProperty()` method removes a specified property from a CSS declaration block.

```js
const element = document.querySelector(selector);
element.style.removeProperty(property);
```

#### `.style.cssText`

The `cssText` property sets or returns the contents of a style declaration as a string.

```js
const element = document.querySelector(selector);

// Get the inline style
const cssText = element.style.cssText;

// Set the inline style
element.style.cssText = cssText;
```

#### `.style.length`

The `length` property returns the number of items in a CSS declaration block.

```js
const element = document.querySelector(selector);
const length = element.style.length;
```

#### `.style.parentRule`

The `parentRule` property returns the stylesheet that contains the current style information for the selected element.

```js
const element = document.querySelector(selector);
const parentRule = element.style.parentRule;
```

#### `.style.getPropertyPriority()`

The `getPropertyPriority()` method returns the priority of a specified CSS property.

```js
const element = document.querySelector(selector);
const propertyPriority = element.style.getPropertyPriority(property);
```

### Accessing elements with querySelectorAll

The `querySelectorAll()` method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

```js
const elements = document.querySelectorAll(selector);
```

### Accessing elements with getElementById

The `getElementById()` method returns the element that has the ID attribute with the specified value.

```js
const element = document.getElementById(id);
```

### Accessing elements with getElementsByClassName

The `getElementsByClassName()` method returns a collection of all elements in the document with the specified class name, as a NodeList object.

```js
const elements = document.getElementsByClassName(names);
```

### Accessing elements with getElementsByTagName

The `getElementsByTagName()` method returns a collection of all elements in the document with the specified tag name, as a NodeList object.

```js
const elements = document.getElementsByTagName(name);
```

### Accessing elements with getElementsByName

The `getElementsByName()` method returns a collection of all elements in the document with the specified name (the value of the name attribute), as a NodeList object.

```js
const elements = document.getElementsByName(name);
```

### Accessing elements with getElements

The `getElements()` method returns a collection of all elements in the document with the specified name (the value of the name attribute), as a NodeList object.

```js
const elements = document.getElementsByName(name);
```

