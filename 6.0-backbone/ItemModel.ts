interface IClickableItem {
    Id: number,
    DisplayName: string
}

class ItemModel extends Backbone.Model 
    implements IClickableItem { 
    get Id() { 
        return this.get('Id'); 
    } 
    set Id(value: number) { 
        this.set('Id', value); 
    } 
    get DisplayName() { 
        return this.get('DisplayName'); 
    } 
    set DisplayName(value: string) { 
        this.set('DisplayName', value); 
    } 
    constructor(input: IClickableItem) { 
        super(); 
        this.set(input); 
    } 
} 