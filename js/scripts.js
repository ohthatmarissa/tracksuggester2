$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var design = $("input:radio[name=design]:checked").val();
    var customers = $("input:radio[name=customers]:checked").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var groups = $("input:radio[name=groups]:checked").val();
    var projects = $("input:radio[name=projects]:checked").val();
    var course;

      if (design === "yes" && environment === "startup") {
        if (projects === "elaborate") {
        course = "Ruby/Rails";
      } else if (projects === "mobile") {
        course = "Java";
      }
    }

      if (customers === "no" && company === "company") {
        if (design === "no") {
        course = "C#";
      } else if (design === "yes") {
        course = "CSS/Design";
      }
    }

      if (design === "yes" && environment === "remotely") {
        if (projects === "small") {
        course = "PHP";
      } else if (projects === "elaborate") {
        course = "Ruby/Rails";
      }
    }

      $("#course").text("Your best course match is " + course + "!");
      $("#course").show();



  });
});
