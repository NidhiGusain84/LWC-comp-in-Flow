import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_RATING from "@salesforce/schema/Account.Rating";
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class DisplayFlowConditionally extends LightningElement {

    @api recordId;
    accountRating;

    @wire(getRecord, {
        recordId: "$recordId",
        fields: [ACCOUNT_RATING]
    }) getRecordFunction({ data, error }) {
        if (data) {
            this.accountRating = getFieldValue(data, ACCOUNT_RATING);
        } else if (error) {

        }
    };

    get isAccountRatingIsHot() {
        return this.accountRating === "Hot" ? true : false;
    }
    get isAccountRatingIsWarm() {
        return this.accountRating === "Warm" ? true : false;
    }
    get isAccountRatingIsCold() {
        return this.accountRating === "Cold" ? true : false;
    }
    get inputVariable() {

        return [{
            name: "inputRating",
            type: "String",
            value: this.accountRating,
        }]


    }

}