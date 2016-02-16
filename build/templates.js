angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html lang=\"en\">\n  <head>\n      <meta charset=\"UTF-8\">\n      <title>Title</title>\n      <link media=\"all\" rel=\"stylesheet\" href=\"build/style.css\">\n      <script src=\"build/libs.min.js\" type=\"text/javascript\"></script>\n  </head>\n  <body ng-app=\"app\">\n    <div class=\"wrapper\" ui-view></div>\n    <script src=\"build/projects.js\"></script>\n    <script src=\"build/script.min.js\" type=\"text/javascript\"></script>\n    <script src=\"build/templates.js\"></script>\n  </body>\n</html>\n");
$templateCache.put("app/components/main/main.html","<div class=\'main\'>\n  <top-bar></top-bar>\n  <recent-projects></recent-projects>\n  <navigation></navigation>\n  <div class=\'content\' ui-view></div>\n  <footer></footer>\n</div>\n");
$templateCache.put("app/components/main/navigation/navigation.html","<div class=\"navigation\">\n  <a class=\'link\' ng-repeat=\'link in links\' ng-href=\'#/{{link.url}}\' ng-bind=\'link.key\'></a>\n</div>\n");
$templateCache.put("app/components/main/recent-projects/recent-projects.html","<div class=\"recent-projects\"></div>\n");
$templateCache.put("app/components/main/top-bar/top-bar.html","<div class=\"top-bar\"></div>\n");
$templateCache.put("app/components/main/content/project/project.html","<div class=\'project\'>\r\n  <div class=\'name\' ng-bind=\'project.name\'></div>\r\n  <div class=\'description\' ng-bind=\'project.description\'></div>\r\n  <div class=\'text\' ng-bind=\'project.text\'></div>\r\n  <div class=\'features\' ng-if=\'project.hasFeatures()\'>\r\n    <div class=\'feature\' ng-repeat=\'feature in project.features\' ng-bind=\'feature\'></div>\r\n  </div>\r\n  <div class=\'links\' ng-if=\'project.hasLinks()\'>\r\n    <div class=\'link\' ng-repeat=\'link in project.links\' ng-bind=\'link\'></div>\r\n  </div>\r\n  <div class=\'images\' ng-if=\'project.hasImages()\'>\r\n    <img class=\'image\' ng-repeat=\'image in project.images\' ng-src=\'{{image}}\' />\r\n  </div>\r\n  <div ng-if=\'project.hasVideo()\' ng-bind=\'project.video\'></div>\r\n</div>\r\n");
$templateCache.put("app/components/main/content/projects/projects.html","<div class=\'projects\'>\r\n  <div class=\'category\' ng-repeat=\'category in displayables\'>\r\n    <div class=\'name\' ng-if=\'!hasKey()\' ng-bind=\'category.name\'></div>\r\n    <div class=\'work\' ng-repeat=\'work in category.works\'>\r\n        <a class=\'name\' ng-bind=\'work.name\' ng-href=\'#/project/{{work.key}}\'></a>\r\n        <img class=\"poster\" ng-if=\'work.hasPoster()\' ng-src=\'work.poster\' />\r\n        <div class=\'description\' ng-bind=\'work.description\'></div>\r\n        <div class=\'links\' ng-if=\'work.hasLinks()\'>\r\n            <div class=\'link\' ng-repeat=\'link in work.links\' ng-bind=\'link.text\'></div>\r\n        </div>\r\n        <div class=\'features\' ng-if=\'work.hasFeatures()\'>\r\n            <div class=\'feature\' ng-repeat=\'feature in work.features\' ng-bind=\'feature\'></div>\r\n        </div>\r\n        <div class=\'date\'>\r\n          Developed in <span ng-bind=\'work.date\'></span>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");}]);