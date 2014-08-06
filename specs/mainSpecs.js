window.console = {};console.log = function () {};

describe('Backbone Immutable::Create a new collection', function  () {
  beforeEach(function () {
    immutable = new Backbone.Immutable({
      name: 'Dimitris',
      age: 22,
      plan: 'Free'
    });
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
  });
});
