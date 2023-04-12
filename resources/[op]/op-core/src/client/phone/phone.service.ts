import { Injectable } from '../../core/decorators/injectable';

@Injectable()
export class PhoneService {
    isPhoneVisible(): boolean {
        return exports['op-phone'].isPhoneVisible();
    }

    setPhoneFocus(status: boolean): void {
        exports['op-phone'].setPhoneFocus(status);
    }

    stopPhoneCall(): void {
        exports['op-phone'].stopPhoneCall();
    }

    setPhoneDisabled(value: boolean): void {
        exports['op-phone'].setPhoneDisabled(value);
    }
}
