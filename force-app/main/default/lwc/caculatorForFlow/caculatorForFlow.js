import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';


export default class CaculatorForFlow extends LightningElement {

    @api inputNumberOne = "";
    @api inputNumberTwo ="";
    @api outputResult = "";

    clickHandler(event){
        let name = event.target.name;
        if(name === "add"){
            this.outputResult = Number(this.inputNumberOne) +   Number(this.inputNumberTwo);
        }else if(name === "subtract"){
            this.outputResult = Number(this.inputNumberOne) -   Number(this.inputNumberTwo);
        }else if(name === "multiply"){
            this.outputResult = Number(this.inputNumberOne) *   Number(this.inputNumberTwo);
        }else if(name === "divide"){
            this.outputResult = Number(this.inputNumberOne) /   Number(this.inputNumberTwo);
        }

        const attributeChangeEvent = new FlowAttributeChangeEvent("outputResult", this.outputResult);
        this.dispatchEvent(attributeChangeEvent);

    }
}