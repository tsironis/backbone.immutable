Backbone.Immutable = (function (Backbone, _) {

  var attrs = {};

  var Immutable = Backbone.Model.extend({
    constructor: function (attributes, options) {
      Backbone.Model.prototype.constructor.call(this, arguments);
      attrs = attributes;
    },
    get: function(key) {
      return attrs[key];
    },
    parse: function (data) {
      _.extend(attrs, data);
      return false
    },
    set: function (key, value) {
      if (_.isUndefined(attrs[key])) {
        attrs[key] = value;
      } else {
        var msg = "You're not supposed to change the values.";
        if ('warn' in console) {
          console.warn(msg);
        } else {
          console.log(msg);
        }
        return false;
      }
    },
    toJSON: function() {
      return _.clone(attrs);
    }
  });

  return Immutable;
})(Backbone, _);

