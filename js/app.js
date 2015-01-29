'use strict';
var app;

app = angular.module('angularParseBoilerplate', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'angulartics', 'angulartics.google.analytics']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('task', {
    url: '/:locale',
    controller: 'TaskCtrl',
    templateUrl: 'task.html'
  });
  return $urlRouterProvider.otherwise('/fr');
});

app.run(function($rootScope, $state) {
  return $rootScope.$state = $state;
});

app.controller('TaskCtrl', function($scope, Task) {
  $scope.addTask = function() {
    $scope.newTask.save().then(function(task) {
      return $scope.fetchTasks();
    });
    return $scope.newTask = new Task;
  };
  $scope.removeTask = function(task) {
    return task.destroy().then(function() {
      return _.remove($scope.tasks, function(task) {
        return task.objectId === null;
      });
    });
  };
  $scope.editingTask = function(task) {
    return task.editing = true;
  };
  $scope.editTask = function(task) {
    task.save();
    return task.editing = false;
  };
  $scope.cancelEditing = function(task) {
    task.title = task._cache.title;
    return task.editing = false;
  };
  $scope.fetchTasks = function() {
    return Task.query().then(function(tasks) {
      return $scope.tasks = tasks;
    });
  };
  $scope.fetchTasks();
  return $scope.newTask = new Task;
});


/**
cbpAnimatedHeader.js v1.0.0
http://www.codrops.com

Licensed under the MIT license.
http://www.opensource.org/licenses/mit-license.php

Copyright 2013, Codrops
http://www.codrops.com
 */
var cbpAnimatedHeader;

cbpAnimatedHeader = (function() {
  var changeHeaderOn, didScroll, docElem, header, init, scrollPage, scrollY;
  init = function() {
    window.addEventListener("scroll", (function(event) {
      var didScroll;
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }), false);
  };
  scrollPage = function() {
    var didScroll, sy;
    sy = scrollY();
    if (sy >= changeHeaderOn) {
      classie.add(header, "navbar-shrink");
    } else {
      classie.remove(header, "navbar-shrink");
    }
    didScroll = false;
  };
  scrollY = function() {
    return window.pageYOffset || docElem.scrollTop;
  };
  docElem = document.documentElement;
  header = document.querySelector(".navbar-fixed-top");
  didScroll = false;
  changeHeaderOn = 300;
  init();
})();

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app.factory('Task', function(Parse) {
  var Task;
  return Task = (function(_super) {
    __extends(Task, _super);

    function Task() {
      return Task.__super__.constructor.apply(this, arguments);
    }

    Task.configure("Task", "title");

    return Task;

  })(Parse.Model);
});
