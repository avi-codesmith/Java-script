const day = "sunday";

switch (day) {
  case "monday":
    console.log("Prepare week plan.");
    console.log("Got to coding meet up.");
    break;
  case "tuesday":
    console.log("Complete Hero section.");
    break;
  case "wednesday":
  case "thursday":
    console.log("complete Calculator section.");
    break;
  case "friday":
    console.log("Party with friends ;)");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend :)");
    break;
  default:
    console.log("ERROR not a valid day!");
}
