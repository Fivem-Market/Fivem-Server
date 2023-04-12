import { Injectable } from '../core/decorators/injectable';
import { PollutionLevel } from '../shared/pollution';

@Injectable()
export class Pollution {
    getPollutionLevel(): PollutionLevel {
        return exports['op-upw'].GetPollutionLevel() as PollutionLevel;
    }
}
