# Backbone.Immutable

> Creating Backbone models with immutable attributes

Backbone.Immutable is a Backbone plugin that helps you create models with immutable attributes. I find it very useful to use this for settings and in general, data that I don't want anybody to get their hands on.

## How to use BackboneImmutable

In order to use Backbone.Immutable, you need to have Backbone and Underscore included in your project.

```
bower install backbone.immutable
```

or download it manually from [here](https://raw2.github.com/tsironis/backbone.immutable/master/backbone.immutable.js) and hook it in your HTML.

```html
<script src="/path/to/backbone.immutable.js" type="text/javascript"></script>
```

Then you can instantiate the model, as following:

```js
var model = new Backbone.Immutable(
  username: 'Coyote';
});
```

## API reference

```set``` - arguments: *[ key, value ]* {String, Number, Array or whatever you want, really}

> Set a key to any value you want. You won't be able to change it, unless you refresh the page.

*Example*

```js
model.set('username', 'Coyote');
model.set('username', 'Road Runner'); // logged "You're not supposed to change the values."
```

---

```get``` - arguments: *[ key ]* {String}

> Returns the saved value for given key

*Example*
```js
model.get('username');
> "Coyote"
```

---

```toJSON``` - arguments: ** no arguments **

> Returns all attributes in a JSON dictionary

*Example*
```js
model.toJSON()
> {name: "Coyote"}
model.set('email', 'example@example.com');
model.toJSON();
> {name: "Coyote", email: "example@example.com"}
```
