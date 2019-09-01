interface IItemCollectionViewModel { 
    Title: string;
    Name: string; 
    SelectedItem: IClickableItem; 
} 
 
class ItemCollectionViewModel extends Backbone.Model 
    implements IItemCollectionViewModel { 
 
    get Title() { 
        return this.get('Title'); 
    } 
    set Title(value: string) { 
        this.set('Title', value); 
    } 
    get SelectedItem() { 
        return this.get('SelectedItem'); 
    } 
    set SelectedItem(value: IClickableItem) { 
        this.set('SelectedItem', value); 
    } 

    set Name(value: string) { 
        this.set('Name', value); 
    } 
    get Name() { 
        return this.get('name'); 
    } 
 
    constructor(input?: IItemCollectionViewModel) { 
        super(); 
        this.set(input); 
    } 
} 