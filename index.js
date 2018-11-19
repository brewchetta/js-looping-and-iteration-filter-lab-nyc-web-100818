// Code your solution in this file
function findMatching(a, name){
  return a.filter(function(n){
    return n.toLowerCase() == name.toLowerCase();
    });
};

function fuzzyMatch(a, s){
  return a.filter(function(n){
    return n.toLowerCase().startsWith(s.toLowerCase())
  });
};

function matchName(a, s){
  return a.filter(function(n){
    return n.name == s
  });
};
