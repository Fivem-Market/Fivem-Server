export declare const op_PHONE_IS_CLIENT: boolean;
export declare const op_PHONE_IS_SERVER: boolean;
export declare const op_PHONE_IS_PRODUCTION: boolean;
export declare const op_PHONE_DIRNAME: string;
export declare let __dirname: string;
export declare let __filename: string;

if (op_PHONE_IS_SERVER) {
    global.__dirname = process.cwd() + '/resources/[op]/op-phone/build';
    global.__filename = global.__dirname + '/server.js';
}
