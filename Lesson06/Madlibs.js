/*
This program will prompt the user for some words and generate
a silly story
 */

// variables to store input
var noun1, noun2, noun3, noun4, noun5;
var verb1, verb2;
var adj1, adj2, adj3;

// input words
noun1 = "<span>" + prompt("Enter a noun") + "</span>";
noun2 = "<span>" + prompt("Enter a noun") + "</span>";
noun3 = "<span>" + prompt("Enter a noun") + "</span>";
noun4 = "<span>" + prompt("Enter a noun") + "</span>";
noun5 = "<span>" + prompt("Enter a noun") + "</span>";
verb1 = "<span>" + prompt("Enter a past tense verb") + "</span>";
verb2 = "<span>" + prompt("Enter a past tense verb") + "</span>";
adj1 = "<span>" + prompt("Enter an adjective") + "</span>";
adj2 = "<span>" + prompt("Enter an adjective") + "</span>";
adj3 = "<span>" + prompt("Enter an adjective") + "</span>";

// this is processing, combining the inputs to create a story
var story = "For Valentine's Day she wanted a " + noun1 +
    ". He " + verb1 + " to get her a " + noun2 +
    ". He knew that she would really like to have a " + noun3 +
    ". She " + verb2 + " he would not get her a " + noun4 +
    ". She was going to be very " + adj1 +
    " if he got her anything other than a " + noun5 +
    ". He was going to be very " + adj2 + " if she liked his gift" +
    ". As it turned out, they were both " + adj3 + ".";

// this is where we output our results
document.writeln(story);