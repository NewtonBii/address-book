//business logic
function Places(country, location, means, landmark, month, time) {
  this.country = country;
  this.location = location;
  this.means = means;
  this.landmark = landmark;
  this.month = month;
  this.time = time;
}
var maasaiMara = new Places("Kenya","Narok County",["Road","Air"],"Mara River","November","Afternoon");
var malindi = new Places("Kenya","Mombasa County",["Road","Air"],"Indian Ocean","December","Noon");
var zanzibar = new Places("Tanzania","Zanzibar",["Road","Air"],"Indian Ocean","August","Noon");
var sychelles = new Places("Sychelles","Southern Africa",["Road","Air","Water"],"Indian Ocean","August","Noon");
