'use strict';

var koans = function() {
  var someIOCall = function() {

    var url = 'http://api.duckduckgo.com/?q=DuckDuckGo&format=json';
    var searchResults = {};
    $.getJSON(url + '?callback=?', null, function(results) {
      console.log('2');
      searchResults = results;
    });

    return searchResults;
  };

  var makeIOCall = function() {
    console.log('1');
    var readText = someIOCall();
    console.log('3');
    return readText;
  };

  return {
    makeIOCall: makeIOCall
  };

};


