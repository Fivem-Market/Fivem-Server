import { Provider } from '../../core/decorators/provider';
import { Rpc } from '../../core/decorators/rpc';
import { RpcServerEvent } from '../../shared/rpc';

@Provider()
export class VoipProvider {
    private readonly httpEndpoint: string;

    constructor() {
        this.httpEndpoint = GetConvar('op_voip_mumble_http_endpoint', '');
    }
    @Rpc(RpcServerEvent.VOIP_IS_MUTED)
    public isMuted(playerId: number): boolean {
        if (this.httpEndpoint !== '') {
            return exports['op-voip'].ZumbleIsPlayerMuted(playerId);
        }
        return MumbleIsPlayerMuted(playerId);
    }
}
