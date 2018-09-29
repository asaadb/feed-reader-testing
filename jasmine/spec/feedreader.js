/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('All feeds URLs are defined', function() {
      for (feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('All feeds names are defined', function() {
      for (feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  /* This test suite is about the menu */
  describe('The menu', function() {
    /* This test ensures the menu element is
     * hidden by default.
     */
    it('The menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* This test ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('The menu changes visibility when clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* This test suite is about Initial Entries */
  describe('Initial Entries', function() {
    /* This test ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('at least 1 entry within the .feed container', function(done) {
      expect($('.feed').children().length).toBeGreaterThan(0);
      done();
    });
  });

  /* This test suite is about New Feed Selection */
  describe('New Feed Selection', function() {
    /* This test ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    let feeder;
    let feeder2;
    //this is the initial entry
    beforeEach(function(done) {
      loadFeed(0, function() {
        feeder = $('.feed').html();
        done();

      });
    });
    //this is the new entry
    beforeEach(function(done) {
      loadFeed(1, function() {
        feeder2 = $('.feed').html();
        done();
      });
    });

    it('when a new feed is loaded, the content changes', function(done) {
      //expect that the initial entry contect does not equal the new one.
      expect(feeder).not.toEqual(feeder2);
      done();
    });
  });
}());
