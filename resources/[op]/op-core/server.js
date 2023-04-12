const hmr = require('./src/hmr.js');
const hotReload = GetConvar('op_core_hot_reload', 'false') == 'true';

if (hotReload) {
    console.log('[op-core] hot module reload enabled');

    hmr.hmr('build/server.js', newContent => {
        console.log('[op-core] hmr: reloading dist/server.js');
        emit('op_core.__internal__.stop_application');

        eval(newContent);
    });

    hmr.hmr('build/client.js', newContent => {
        console.log('[op-core] hmr: reloading dist/client.js');

        emitNet('op-core:__development__:hot-reload', -1, newContent);
    });
}
