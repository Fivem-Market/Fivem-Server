import { Injectable } from '../core/decorators/injectable';

@Injectable()
export class TalkService {
    isRadioOpen(): boolean {
        return exports['op-talk'].isRadioOpen();
    }

    setRadioOpen(status: boolean): void {
        exports['op-talk'].setRadioOpen(status);
    }
}
