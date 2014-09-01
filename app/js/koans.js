'use strict';

var koans = function() {
  var someIOCall = function() {
    var result = {};
    var readData = function(data){
      result = data;
    };
    $.ajax({
      url: 'http://api.duckduckgo.com/?q=DuckDuckGo&format=json&pretty=1&no_redirect=1&skip_disambig=1',
      dataType: 'jsonp'
    }).then(readData);
    return result;

  };

  var makeIOCall = function() {
    var readText = someIOCall();
    console.log(readText);
    return readText;
  };

  return {
    makeIOCall: makeIOCall
  };

};


