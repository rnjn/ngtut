'use strict';

var koans = function() {
  var someIOCall = function(reader) {
    var result = {};
    var readData = function(data){
      reader(data);
      result = data;
    };
    $.ajax({
      url: 'http://api.duckduckgo.com/?q=DuckDuckGo&format=json&pretty=1&no_redirect=1&skip_disambig=1',
      dataType: 'jsonp'
    }).then(readData);
    return result;
  };

  var makeIOCall = function(reader) {
    return someIOCall(reader);
  };

  return {
    makeIOCall: makeIOCall
  };

};
