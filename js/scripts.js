//business logic

function Contact(first,second){
  this.firstName=first;
  this.secondName=second;
}

//userInterface
$("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();

      var newContact = new Contact(inputtedFirstName, inputtedLastName);

      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
