import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DisplayToastMessageInFlow extends LightningElement {

    statusChangeHandler(event){
        if(event.detail.status === "FINISHED"){
            const event = new ShowToastEvent({
            title: 'Success',
            variant: "success",
            message:
                'Record Created Successfully.',
        });
        this.dispatchEvent(event);
        }
    }

}