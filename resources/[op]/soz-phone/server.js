const hmr = require('./src/hmr.js');
const hotReload = GetConvar('op_phone_hot_reload', 'false') == 'true';

if (hotReload) {
    console.log('[op-phone] hot module reload enabled');

    hmr.hmr('build/server.js', newContent => {
        console.log('[op-phone] hmr: reloading dist/server.js');
        emit('op_phone.__internal__.stop_application');

        eval(newContent);
    });

    hmr.hmr('build/client.js', newContent => {
        console.log('[op-phone] hmr: reloading dist/client.js');

        emitNet('op-phone:__development__:hot-reload', -1, newContent);
    });
}
