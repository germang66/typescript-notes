import * as React from "react"; 
import * as ReactDOM from "react-dom"; 
 
 
import { ItemCollectionView, IClickableItem } from "./ReactApp"; 
 
 
let ClickableItemArray: IClickableItem[] = [ 
    { Id: 1, DisplayName: "firstItem" }, 
    { Id: 2, DisplayName: "secondItem" }, 
    { Id: 3, DisplayName: "thirdItem" }, 
]; 
 
ReactDOM.render( 
    <ItemCollectionView items={ClickableItemArray} 
        title="Please select:" 
        SelectedItem={ 
            { Id: 0, DisplayName: "None Selected " } 
        } />, 
    document.getElementById("app") 
); 