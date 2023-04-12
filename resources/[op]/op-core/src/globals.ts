export declare const op_CORE_IS_CLIENT: boolean;
export declare const op_CORE_IS_SERVER: boolean;
export declare const op_CORE_IS_PRODUCTION: boolean;
export declare const op_CORE_DIRNAME: string;
export declare let __dirname: string;
export declare let __filename: string;

if (op_CORE_IS_SERVER) {
    global.__dirname = process.cwd() + '/resources/[op]/op-core/build';
    global.__filename = global.__dirname + '/server.js';
}
