describe("simple HTML test", () => { 
    it("should pass", () => { 
        expect(true).toBeTruthy(); 
    }); 
});

//# Jasmine fixtures
//
//* jasmine-jquery library lets us inject HTML elements into the DOM before our tests execute


class ModifyDomElement { 
    setHtml() { 
        let elem = $('#my_div'); 
        elem.html('<p>Hello World</p>'); 
    } 
}

// setFixtures (jasmine-jquery method) inject temporary html for the duration of the test
// allow test the method setHtml (require the div tag with  id 'my_div')

describe("fixture tests", () => { 
    it("should modify a dom element", () => { 
        setFixtures('<div id="my_div"></div>');
        let modifyDom = new ModifyDomElement(); 
        modifyDom.setHtml(); 
        var modifiedDomElement = $('#my_div'); 
        expect(modifiedDomElement.length).toBeGreaterThan(0); 
        expect(modifiedDomElement.html()).toContain("Hello"); 
    }); 
}); 

//#DOM events
// simulate DOM events using jquery-jasmine and spies ('spyOnEvent')

describe("click event tests", () => { 
    it("should trigger an onclick DOM event", () =>{ 
        setFixtures(` 
            <script> 
            function handle_my_click_div_clicked() {  
                // do nothing at this time 
            } 
            </script>         
            <div id='my_click_div' 
            onclick='handle_my_click_div_clicked()'>Click Here</div>`); 
        var clickEventSpy = spyOnEvent('#my_click_div', 'click'); 
        $('#my_click_div').click(); 
        expect(clickEventSpy).toHaveBeenTriggered(); 
    }); 
});
