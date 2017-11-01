//businessLogic
function Places(country, location, means, landmark, month, time) {
  var obj={};
  obj.country = country;
  obj.location = location;
  obj.means = means;
  obj.landmark = landmark;
  obj.month = month;
  obj.time = time;
  obj.describe=function () {
    alert("It is Located in "+ this.country+", " +this.location + " and you can travel by" + this.means + ". The first feature you are likely to see is" + this.landmark + " which is awesome. The best time to travel is " + this.month + " in the " + this.time+ ".");
  };
  return obj;
}
var maasaiMara = new Places("Kenya","Narok County","Road or Air","Mara River","November","Afternoon");
var malindi = new Places("Kenya","Mombasa County","Road or Air","Indian Ocean","December","Noon");
var zanzibar = new Places("Tanzania","Zanzibar","Road or Air","Water","Indian Ocean","August","Noon");
var sychelles = new Places("Sychelles","Southern Africa","Road, Air or Water","Indian Ocean","August","Noon");
var morocco = new Places("Morocco", "Northen Africa","Road, Air or Water","Rabat","May","Evening");


//userEndLogic
