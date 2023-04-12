import { Inject, Injectable } from '../core/decorators/injectable';
import { opRole } from '../core/permissions';
import { PlayerService } from './player/player.service';
import { QBCore } from './qbcore';

@Injectable()
export class PermissionService {
    @Inject(PlayerService)
    private playerService: PlayerService;

    @Inject(QBCore)
    private QBCore: QBCore;

    private hasPermission(source: number, permission: opRole): boolean {
        return this.QBCore.hasPermission(source, permission);
    }

    public isHelper(source: number): boolean {
        return (
            this.hasPermission(source, 'helper') ||
            this.hasPermission(source, 'gamemaster') ||
            this.hasPermission(source, 'staff') ||
            this.hasPermission(source, 'admin')
        );
    }

    public isGameMaster(source: number): boolean {
        return (
            this.hasPermission(source, 'gamemaster') ||
            this.hasPermission(source, 'staff') ||
            this.hasPermission(source, 'admin')
        );
    }

    public isStaff(source: number): boolean {
        return this.hasPermission(source, 'staff') || this.hasPermission(source, 'admin');
    }

    public isAdmin(source: number): boolean {
        return this.hasPermission(source, 'admin');
    }

    public getPermission(source: number): opRole {
        if (this.isAdmin(source)) {
            return 'admin';
        }
        if (this.isStaff(source)) {
            return 'staff';
        }
        if (this.isGameMaster(source)) {
            return 'gamemaster';
        }
        if (this.isHelper(source)) {
            return 'helper';
        }
        return 'user';
    }
}
