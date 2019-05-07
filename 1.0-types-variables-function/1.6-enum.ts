
enum NumericState {
    FIRST, SECOND, THIRD
}
console.log(NumericState.SECOND); // # 1
console.log(NumericState["SECOND"]); // # 1
console.log(NumericState[1]); // # SECOND

enum NumericState2 {
    FIRST = "Primero", SECOND = "Segundo", THIRD = "Tercero"
}
console.log(NumericState2.SECOND); // # Segundo