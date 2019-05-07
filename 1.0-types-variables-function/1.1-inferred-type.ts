
/**
 * when types are not declared, are inferred
 */

var inferredString = "this is a string";
var inferredNumber = 1;

inferredNumber = inferredString; //THROW ERROR
// - error TS2741: Property 'name' is missing in type '{ id: number; }' but required in type '{ name: string; id: number; }'. 


 
