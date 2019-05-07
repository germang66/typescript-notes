//interfaces; mechanism to define what properties and methods an object must implement

interface ICustom {
    id: string,
    value: number,
    other?: string //optional property
}
let something : ICustom = { id: "ID123", value: 123 }
console.log(`something: ${JSON.stringify(something)}`);

//in operator
if ('value' in something) {
    console.log(`id: ${something.id}`);
}