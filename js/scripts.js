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
    alert("It is Located in "+ this.country+", " +this.location);
  };
  return obj;
}
var maasaiMara = new Places("Kenya","Narok County",["Road","Air"],"Mara River","November","Afternoon");
var malindi = new Places("Kenya","Mombasa County",["Road","Air"],"Indian Ocean","December","Noon");
var zanzibar = new Places("Tanzania","Zanzibar",["Road","Air","Water"],"Indian Ocean","August","Noon");
var sychelles = new Places("Sychelles","Southern Africa",["Road","Air","Water"],"Indian Ocean","August","Noon");
var morocco = new Places("Morocco", "Northen Africa",["Road","Air", "Water"],"Rabat","May","Evening");


//userEndLogic
maasaiMara.describe();
