class ScreenViewApp { 
    start() { 
        let itemCollection = 
            new ItemCollection([
                {Id: 1, DisplayName: "testOne"},
                {Id: 2, DisplayName: "testTwo"},
                {Id: 3, DisplayName: "testThree"},
            ]); 
 
        let collectionItemViewModel = new ItemCollectionViewModel({ 
            Title: "Please select :", 
            SelectedItem: { 
                Id: 0, DisplayName: 'None Selected:' 
            }, 
            Name: "Your Name" 
        }); 
 
        let itemCollectionView = new ItemCollectionView( 
            { 
                model: collectionItemViewModel 
            }, itemCollection 
        ); 

        $(`#pageLayoutRegion`).html( 
            itemCollectionView.render().el 
        ); 
    } 
} 