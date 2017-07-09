(function (global) {

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

    //On first load, show home view
    showLoading("#main-content");
    $.ajax({
              type: "GET",
              url: homeHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                       }
            });

    $("#collapsable-nav a").click(function(){
        var ele= $(this);
        showLoading("#main-content");
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
        if($(this).parent().attr("id") === "navAboutButton"){
            $.ajax({
              type: "GET",
              url: aboutHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
        else if($(this).parent().attr("id") === "navServicesButton"){

            $.ajax({
              type: "GET",
              url: servicesHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
        else if($(this).parent().attr("id") === "navJobsButton"){
            $.ajax({
              type: "GET",
              url: jobsHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
        else if($(this).parent().attr("id") === "navHomeButton"){
            $.ajax({
              type: "GET",
              url: homeHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
        else{
            $.ajax({
              type: "GET",
              url: contactHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
    })
});

})(window);
