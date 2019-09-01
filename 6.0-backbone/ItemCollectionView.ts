class ItemCollectionView extends Backbone.View<ItemCollectionViewModel> { 
    template: (json: any, options?: any) => string; 
    itemCollection: ItemCollection; 
 
    constructor(options:  
        Backbone.ViewOptions<ItemCollectionViewModel> = {}, 
        _itemCollection: ItemCollection) { 
        options.events = { 'click #submit-button-button': 'submitClick' } 
        super(options); 
        this.itemCollection = _itemCollection; 
 
        let templateSnippet =  
            $(`#itemCollectionViewtemplate`).html(); 
        this.template = _.template(templateSnippet); 
 
        this.listenTo(EventBus.Bus,"item_clicked", this.handleEvent); 
 
    } 
    render() { 
        this.$el.html(this.template(this.model.attributes)); 
        this.itemCollection.each((item) => { 
            var itemView = new ItemView({ model: item }); 
            this.$el.find('#ulRegions').append(itemView.render().el); 
        }); 
 
        return this; 
    } 
    handleEvent(e: ItemModel) { 
        this.model.SelectedItem = e; 
        this.render(); 
    }
    submitClick() { 
        let name = this.$el.find('#inputName'); 
        if (name.length > 0) { 
            console.log(`name : ${name.val()}`); 
        } else { 
            console.log(`cannot find #inputName`); 
        } 
    } 
} 