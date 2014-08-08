window.console = {};console.log = function () {};

describe('Backbone Immutable::Create a new collection', function  () {
  beforeEach(function () {
    Settings = Backbone.Immutable.extend({
      url: "http://example.com/api/v1/settings"
    });
    immutable = new Settings({
      name: 'Dimitris',
      age: 22,
      plan: 'Free'
    });
    jasmine.Ajax.install();
  });
  afterEach(function () {
    jasmine.Ajax.uninstall();
  });
  describe('should create a new model', function() {
    it('which has correct functions and definitions', function() {
      // set function exists and it is a function
      expect(immutable.set).toBeDefined();
      expect(_.isFunction(immutable.set)).toBe(true);
      // get function exists and it is a function
      expect(immutable.get).toBeDefined();
      expect(_.isFunction(immutable.get)).toBe(true);
      // toJSON function exists and it is a function
      expect(immutable.toJSON).toBeDefined();
      expect(_.isFunction(immutable.toJSON)).toBe(true);
    });
    it('and it should have the correct attributes saved', function() {
      expect(immutable.get('name')).toBe('Dimitris');
      expect(immutable.get('age')).toEqual(22);
      expect(immutable.get('plan')).toBe('Free');
    });
  });
  describe('This model should', function() {
    it('add new arguments using set function', function() {
      immutable.set('email', 'example@example.com');
      expect(immutable.get('email')).toBe('example@example.com');
    });
    it('return false when an attribute already exists ', function() {
      var response = immutable.set('name', 'John');
      expect(response).toBe(false);
    });
    it('export all attributes into a dictionary', function() {
      expect(immutable.toJSON()).toEqual({
        name: 'Dimitris',
        age: 22,
        plan: 'Free'
      });
    });
    it('fetch settings via a API call', function() {
      immutable.fetch();
      expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://example.com/api/v1/settings');
      jasmine.Ajax.requests.mostRecent().response({
        "status": 200,
        "contentType": 'text/plain',
        "responseText": JSON.stringify({
          hasFeature1: true,
          hasFeature2: false,
          hasFeature3: 'Premium'
        })
      });
      expect(immutable.get('name')).toBe('Dimitris');
      expect(immutable.get('age')).toEqual(22);
      expect(immutable.get('plan')).toEqual('Free');
      expect(immutable.get('hasFeature1')).toBe(true);
      expect(immutable.get('hasFeature2')).toBe(false);
      expect(immutable.get('hasFeature3')).toBe('Premium');
    });
  });
});
