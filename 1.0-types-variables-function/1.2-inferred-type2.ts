/**
 * Duck typing
 */
var complexType = { name: "myName", id: 1};
//same number of attributes is the same inferred type
complexType = { id: 2, name: "anotherName" };
//different number of attribute is not the same inferred type
complexType = { id: 3 };