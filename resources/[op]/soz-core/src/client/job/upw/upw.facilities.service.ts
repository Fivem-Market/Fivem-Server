import { Injectable } from '@core/decorators/injectable';

@Injectable()
export class UPWFacilitesService {
    public getTerminalIdentifierForEntity(entity: number): string {
        return exports['op-upw'].GetTerminalIdentifierForEntity(entity);
    }
}
