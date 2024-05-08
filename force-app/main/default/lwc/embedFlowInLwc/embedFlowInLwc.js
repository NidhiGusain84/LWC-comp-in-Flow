import { LightningElement, api } from 'lwc';

export default class EmbedFlowInLwc extends LightningElement {
    @api recordId;

    get inputVariables() {
        return [
            { name: "AccountId", type: "String", value: this.recordId },
            { name: "operationType", type: "String", value: "Create Record" }
        ];
    }

    statusChangeHandler(event) {
        if (event.detail.status === "FINISHED") {
            let outputValues = event.detail.outputVariables;
            for (let i = 0; i < outputValues.length; i++) {
                let item = outputValues[i];
                if (item.name === "outputAccountId") {
                    console.log("Account Id", item.value);
                }
                if (item.name === "outputOperationType") {
                    console.log("Output Operation Type Id", item.value);
                }
            }

        }
    }

}