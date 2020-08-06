//this is some hardcore shit, right^^
Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
  var dayOfYear = ((today - onejan + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
};
var today = new Date();
var currentWeekNumber = today.getWeek();
console.log(currentWeekNumber);
alert("The current week number is:\n"+currentWeekNumber);
window.history.back();