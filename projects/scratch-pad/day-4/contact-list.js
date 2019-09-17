// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list. 
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from  
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * create "printAllContactNames()" so that it has all() API THAT RETURNS A STRING with all fullNames but separated nicely line break
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    return contact;
}


function makeContactList() {
    var contacts = [];

    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                var conOb = contacts[i];
                if (conOb.nameFirst + ' ' + conOb.nameLast === fullName) {
                    return contacts[i];
                }
                
            }
            
        },
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                var conOb = contacts[i];
                if (conOb === contact) {
                    return contacts.splice(i, 1);
                }
                
            }
        },
        printAllContactNames: function() {
            var allContactNames = [];
            for (var i = 0; i < contacts.length; i++) {
                var con = contacts[i];
                var nameFirst = con.nameFirst;
                var nameLast = con.nameLast;
                var fullName = nameFirst + ' ' + nameLast;
                
                if (i < contacts.length - 1) {
                    allContactNames.push(fullName + '\n');
                } else {
                    allContactNames.push(fullName);
                }
            }
            return allContactNames.join('');
        }

    };
}
// YOUR CODE GOES ABOVE HERE //
    /*
      * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * create "printAllContactNames()" so that it has all() API THAT RETURNS A STRING with all fullNames but separated nicely line break
     */



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
