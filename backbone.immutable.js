Backbone.Immutable = (function (Backbone, _) {

  var Immutable = Backbone.Immutable = function(attributes, options) {
    var attrs = attributes || {};

    this.get = function(key) {
      return attrs[key];
    };

    this.set = function (key, value) {
      if (_.isUndefined(attrs[key])) {
        attrs[key] = value;
      } else {
        throw new Error("You're not supposed to change the values.");
        return false;
      }
    };

    this.toJSON = function() {
      return _.clone(attrs);
    };
  }

  return Immutable;
})(Backbone, _);

