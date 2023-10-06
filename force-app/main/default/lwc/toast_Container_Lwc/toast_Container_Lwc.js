import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Toast_Container_lwc extends LightningElement {
    showToast(variant, title, message, url, label) {
        const toastEvent = new ShowToastEvent({
            title: title,
            message: message,
            messageData: [
                label,
                {
                    url: url,
                    label: label
                }
            ],
            variant: variant,
        });
        this.dispatchEvent(toastEvent);
    }

    showError() {
        this.showToast('error', 'Error', 'Record {0} created! See it {1}!', 'https://www.salesforce.com/', 'here');
    }

    showWarning() {
        this.showToast('warning', 'Warning', 'Record {0} created! See it {1}!', 'https://www.salesforce.com/', 'here');
    }

    showSuccess() {
        this.showToast('success', 'Success', 'Record {0} created! See it {1}!', 'https://www.salesforce.com/', 'here');
    }

    showInfo() {
        this.showToast('info', 'Info', 'Record {0} created! See it {1}!', 'https://www.salesforce.com/', 'here');
    }
}