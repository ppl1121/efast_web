// $(function () { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });

//   // In Firefox and Safari, the click event doesn't retain the focus
//   // on the clicked button. Therefore, the blur event will not fire on
//   // user clicking somewhere else in the page and the blur event handler
//   // which is set up above will not be called.
//   // Refer to issue #28 in the repo.
//   // Solution: force focus on the element that the click event fired on
//   $("#navbarToggle").click(function (event) {
//     $(event.target).focus();
//   });
// });

(function (global) {

var dc = {};

var jsHtml = "snippets/js.html";
var js_library_min = "snippets/js_library_min.html";
var homeHtml = "snippets/home-snippet.html";
var aboutHtml = "snippets/about-snippet.html";
var contactHtml = "snippets/contact-snippet.html";
var jobsHtml = "snippets/jobs-snippet.html";
var servicesHtml = "snippets/services-snippet.html";


// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


// Remove the class 'active' from home
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content").innerHTML = responseText;
    $ajaxUtils.sendGetRequest(
      js_library_min,
      function(responsejsText){     
          $('#js').html(responsejsText);
        },
      false);      
  },
  false);
});



dc.loadMenuCategories = function (menu_items) {
  showLoading("#main-content");
  var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        } 
  if(menu_items === "about"){
    $ajaxUtils.sendGetRequest(
      aboutHtml,
      function (responseText) {
        switchMenuToActive();        
        document.querySelector("#main-content")
        .innerHTML = responseText; 
      },
      false);
  }
  else if(menu_items === "contact"){
    $ajaxUtils.sendGetRequest(
      contactHtml,
      function (responseText) {
        switchMenuToActive();
        document.querySelector("#main-content")
        .innerHTML = responseText;   
      },
      false);
  }
  else if(menu_items === "jobs"){
    $ajaxUtils.sendGetRequest(
      jobsHtml,
      function (responseText) {
        switchMenuToActive(); 
        document.querySelector("#main-content")
        .innerHTML = responseText;   
      },
      false);
  }
  else{

    $ajaxUtils.sendGetRequest(
      servicesHtml,
      function (responseText) {
        switchMenuToActive();
        document.querySelector("#main-content")
        .innerHTML = responseText;   
      },
      false);
  }
};


global.$dc = dc;

})(window);
