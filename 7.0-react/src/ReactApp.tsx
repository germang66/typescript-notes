import * as React from 'react'; 
import * as _ from 'underscore'; 


export interface IClickableItem { 
    Id: number; 
    DisplayName: string; 
} 
 
export interface IItemCollectionViewProps { 
    title: string, 
    items: IClickableItem[], 
    SelectedItem: IClickableItem; 
}; 

type StringProps<T> = { 
    [key: string]: any; 
} 

export class ItemCollectionView extends 
    React.Component<
        IItemCollectionViewProps, // internal properties 
        StringProps<{ inputName: string }> // state properties
     > { 
    // SelectedItem: IClickableItem; 
    // ^^ properties cannot be included like this. 
    constructor(input: IItemCollectionViewProps) { 
        super(input); 
        this.state = { inputName: 'Your Name' };
        this.itemSelected = this.itemSelected.bind(this); 
        // ^^ this is functionally equivalent to below : 
        // _.bindAll(this, 'itemSelected'); 
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    } 
 
    render() { 
        let _this = this; 
     
        let buttonNodes = 
            this.props.items.map(function (item) { 
                return ( 
                    <ItemView 
                       onItemClicked={_this.itemSelected} 
                       DisplayName={item.DisplayName} 
                       Id={item.Id}  
                   /> 
                ); 
            }); 
     
        return <div> 
            <h1>{this.props.title}</h1> 
            <ul> 
                {buttonNodes} 
            </ul> 
            <div>Selected Item : 
                {this.props.SelectedItem.Id} - 
                {this.props.SelectedItem.DisplayName}</div>
                <form onSubmit={this.onSubmit} > 
                    <div className="form-group"> 
                    <label>Name :</label> 
                    <input type="text" 
                        className="form-control" 
                        name="inputName" 
                        value={this.state.inputName} 
                        onChange={this.onChange} 
                    />  
                    <button className="submit-button" 
                        type="submit" value="Submit">Submit</button> 
                        </div>
                </form>  
        </div>; 
    }
    
    onSubmit(e: React.FormEvent) { 
        console.log(`onSubmit : state :  
            ${this.state.inputName}`); 
        e.preventDefault(); 
    } 

    itemSelected(item: IClickableItem) { 
        this.props.SelectedItem.Id = item.Id; 
        this.props.SelectedItem.DisplayName = item.DisplayName; 
     
        this.setState({}); 
    }
    
    onChange(event: React.ChangeEvent<HTMLInputElement>) { 
        let valueName = event.target.name; 
        this.setState({ [valueName]: event.target.value }); 
        console.log(`onChange : ${event.target.name} : ${event.target.value}`); 
    } 
}

 
export class ItemModel { 
    DisplayName: string = ""; 
    Id: number = 0; 
    onItemClicked(item: ItemModel) { } 
} 
 
export class ItemView 
    extends React.Component<ItemModel, {}> { 
    constructor(input: ItemModel) { 
        super(input); 
        this.handleClick = 
            this.handleClick.bind(this); 
    } 
 
    render() { 
        return ( 
            <div> 
                    <button className="btn btn-primary" 
                        style={{ "marginBottom": "5px" }} 
                        onClick={this.handleClick}> 
                        {this.props.DisplayName} 
                    </button> 
 
            </div> 
 
        ); 
    } 
    handleClick() { 
        this.props.onItemClicked(this.props); 
    } 
} 