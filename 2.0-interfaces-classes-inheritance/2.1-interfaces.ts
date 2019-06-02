//interfaces; mechanism to define what properties and methods an object must implement

interface ICustom {
    id: string,
    value: number,
    other?: string //optional property
}
let something : ICustom = { id: "ID123", value: 123 }
console.log(`something: ${JSON.stringify(something)}`);

//in operator:
// TS allows us to generate type guards for interface using this operator, to
// test whether an interface has a particular property
if ('value' in something) {
    console.log(`id: ${something.id}`);
}