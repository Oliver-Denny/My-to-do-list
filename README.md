This program makes use of:

 - HTML DOM manipulation;
 - CSS;
 - JS;
 - JQuery;
 - functions (including arrow notation);
 - IF statements;
 - event listeners;
 - APIs.

User Experience Overview

This program is a minimalist to-do list. In which the user can add and/or subtract items to an on-screen list. Above this list is a text/input field, in which the user can type the description for the item (e.g, “Learn javascript”). The user can enter this item onto the list, either by clicking the “+” button which is immediately adjacent to the input field, or by pressing the enter key.
Immediately adjacent to every item on the list is a “X” button, or a “Bin”. This adds convenience to the user, so by clicking on this button, they can delete the adjacent item.

Program Description

This program has one global variable; “Count”, which keeps a count of how many items have been added to the list by the user. However, in the outcome where the user has deleted all of the list items, Count is set to “-1” (defined as “Outcome B”). This is to distinguish Count from being set to “0”, which is what this variable is set to by default upon the user opening the program (defined as “Outcome A”). In this program, I have written the code in such a way that a different message appears in the items area to the user in Outcome A from Outcome B. In Outcome A, the user sees the message “click on the + to get started”, whereas in Outcome B, the user sees the message “No more tasks? Happy days!”. These two outcomes are managed by an IF statement within the noItems function…in turn, this function is called both upon loading the document, and whenever a single item in the list is deleted, where the item being deleted is the last item in the list.
The Count variable can only ever be equal to “-1” in the event that the user has deleted all of the list items.
This is thanks to an event listener attached to the “background” object, which, among other things, uses an IF statement to dictate what to subtract from the value of the Count binding whenever a list item is deleted.
This IF statement, is, in turn, nested within another IF statement, which dictates that the IF statement should only be executed where the the user has clicked on an object with the id of “Bin”.
If the user is deleting the last item in the list, the function noItems is called, because…there won’t be any list items left! When it comes to the Count binding, “2” is subtracted from the value it’s attached to, resulting in the value being “-1”.
Conversely, if the user is deleting an item which is not the last item in the list, a call is made to the css pixel height of the background object, and the overall height of the object is reduced…in line with the new number of items in the list. “1” is subtracted from “Count”.
In both instances, a call is made to the html structure of the document, in order to locate the parent of the “Bin” object…which is the list item. This list item is then removed (which, among other children, removes the “Bin” object itself).
The user can add a list item via the addItem function, which is called in an event listener on the “add” object, and the “name” object…the event listener on the name object is activated upon the user pressing the enter key, instead of simply clicking on the name object.
This function also checks to see if there is text that has been inserted by the user into the name object. If it doesn’t find any, it will return an alert message to the user which explains that something needs to be typed into the field before a list item can be created.
In addition to the list item being created, a call is made to the css code in order to increase the displayed height of the background object, in order to make room for the new list item.
