function createMadLib(){
    var adjective1;
    var adjective2;
    var animal;

    adjective1 = prompt("Enter an adjective");
    adjective2 = prompt("Enter another adjective");
    animal = prompt("Enter an animal");

    var story = "The " + adjective1 + " man rode a " +
        adjective2 + " " + animal + " into town.";

    var myParagraphElement = $('#storyText');
    myParagraphElement.css("font-size", "40px");
    myParagraphElement.removeClass("handWritten");
    myParagraphElement.addClass("bananas");
    myParagraphElement.html(story);
}

function changeLink(){
    $('#myLink').attr("href", "http://www.uwm.com");
}