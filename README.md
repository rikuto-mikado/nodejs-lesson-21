# Node.js Lesson 21 - Pug Template Engine

## What I Learned

### Pug Setup
```javascript
// app.js
app.set('view engine', 'pug');
app.set('views', 'views');
```

### Rendering Templates
| HTML | Pug |
|------|-----|
| `res.sendFile()` | `res.render('shop')` |
| Manual path setup | Auto-finds in views folder |

### Pug Syntax
```pug
//- HTML
<header class="main-header">
  <nav class="main-header__nav">

//- Pug
header.main-header
    nav.main-header__nav
```

## Challenges

- **Class name typo**: `main_header` vs `main-header` - CSS didn't apply because of underscore instead of hyphen
- **Indentation matters**: Pug uses indentation for nesting, easy to mess up

---

## Q&A: Why Use Pug?

**Q: Why not just use HTML?**
A: Pug reduces boilerplate. No closing tags, cleaner syntax, less code to write and maintain.

**Q: What's the main benefit?**
A: Dynamic content. You can pass data from routes to templates:
```javascript
res.render('shop', { products: products, pageTitle: 'Shop' });
```
```pug
each product in products
    .product-item
        h1= product.title
```

**Q: When should I use Pug?**

A: When you need server-side rendering with dynamic data, layouts, or partials. For static pages, plain HTML is fine.

**Q: What about other template engines?**

A: EJS looks more like HTML (uses `<%= %>`), Handlebars uses `{{ }}`. Pug is most concise but has a learning curve.
