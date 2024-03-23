(function(window, undefined) {
  var dictionary = {
    "45adb92f-eafd-4896-83a7-3b5a57c96a87": "plantlog corn",
    "2fde0b3f-df3f-4cbf-af37-24495d2076d1": "sign up",
    "ab5db48e-39df-47ac-b985-eaaf4b7e4aea": "plantlog",
    "6eec37b2-847d-4c05-9903-3360dd92b9a3": "community_1",
    "15c30d11-699f-4c7e-b7cf-3877379aa7eb": "welcome page",
    "b4f66d3c-9914-4060-bf7d-58b08ed2b955": "camera",
    "81d4c828-0ee2-4ee4-8938-bc9e9508eff5": "Login",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "homepage",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);