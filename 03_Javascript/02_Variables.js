var myName = "Alice";
//--->can be reassigned and are only available inside the function they're created in. It's functionally scoped. 

const newName = value;
//--->cannot be reassigned and not accessible before they appear within the code. It's block scoped.

let nextName = value;
//--->can be reassigned but it's similar to const i.e, block scoped.

/* NOTE */
//--->If variables are not created inside a function or block they are globally scoped.

