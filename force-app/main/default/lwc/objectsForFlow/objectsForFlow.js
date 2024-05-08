import { LightningElement, api, track } from 'lwc';

export default class ObjectsForFlow extends LightningElement {

    @track _contacts = [];

    set contacts(contacts = []) {
        this._contacts = [...contacts]; //copy of array
    }

    @api
    get contacts() {
        return this._contacts;
    }

    get items() {
       let contactEmailArray =  this._contacts.map((currentItem) => {
            return {
                type: 'icon',
                label: currentItem.Email,
                name: currentItem.Email,
                iconName: 'standard:contact',
                alternativeText: 'Contact Email',
            }
        });
        return contactEmailArray;
    }

}