class ItemView extends Backbone.View<ItemModel> { 
    template: (json: any, options?: any) => string; 
    constructor( 
        options = <Backbone.ViewOptions<ItemModel>>{} 
    ) { 
        options.events = { 'click': 'onClicked' }; 
        super(options); 
 
        let templateSnippet = $(`#itemViewTemplate`).html(); 
            this.template = _.template(templateSnippet); 
        _.bindAll(this, 'onClicked'); 
    } 
    render() { 
        this.$el.html( 
            this.template(this.model.attributes) 
        ); 
        return this; 
    } 
    onClicked() { 
        EventBus.Bus.trigger("item_clicked", this.model.attributes); 
    } 
} 