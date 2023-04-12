import { Injectable } from '@public/core/decorators/injectable';

@Injectable()
export class VoipService {
    public mutePlayer(value: boolean) {
        exports['op-voip'].MutePlayer(value);
    }

    public setPlayerMegaphoneInUse(value: boolean, range: number) {
        exports['op-voip'].SetPlayerMegaphoneInUse(value, range);
    }
}
