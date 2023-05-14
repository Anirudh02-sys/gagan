var app = angular.module('calenderApp', []);


app.component('CalendarScheduler', {
    templateUrl: 'calendar.html',
    controller: function() {
      this.date = new Date();
      this.events = [];
  
      this.addEvent = function() {
        var event = {
          name: this.eventName,
          date: this.eventDate
        };
        this.events.push(event);
        this.eventName = '';
        this.eventDate = '';
      };
  
      this.removeEvent = function(index) {
        this.events.splice(index, 1);
      };
    }
  });
  