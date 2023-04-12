import { Injectable } from './decorators/injectable';

export type opRole = 'admin' | 'staff' | 'gamemaster' | 'helper' | 'user';

@Injectable()
export class Permissions {
    addPlayerRole(source: number, role: opRole) {
        ExecuteCommand(`add_principal "player.${source}" "op_role.${role}"`);
    }

    allowCommandForRole(command: string, role: opRole) {
        ExecuteCommand(`add_ace "op_role.${role}" "command.${command}" allow`);
    }
}
