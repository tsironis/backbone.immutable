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
    set: function (key, val) {
      var data;

      if (key == null) return this;
      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        data = key;
      } else {
        (data = {})[key] = val;
      }

      _.each(data, function(value, key) {
        if (_.isUndefined(attrs[key])) {
          attrs[key] = value;
        } else {
          var msg = "You're not supposed to change this value.";
          if ('warn' in console) {
            console.warn(msg);
          } else {
            console.log(msg);
          }
        }
      });
    },
    toJSON: function() {
      return _.clone(attrs);
    }
  });

  return Immutable;
})(Backbone, _);

