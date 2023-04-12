const hotReload = GetConvar('op_core_hot_reload', 'false') == 'true';

if (hotReload) {
    console.log('[op-core] hot module reload enabled');
    onNet('op-core:__development__:hot-reload', content => {
        console.log('[op-core] [hmr] reloading client file');
        emit('op_core.__internal__.stop_application');

        eval(content);
    });

    setTimeout(() => {
        SendNuiMessage(
            JSON.stringify({
                type: 'op-core-nui-load',
                mode: 'dev',
            })
        );
    }, 1000);
} else {
    setTimeout(() => {
        SendNuiMessage(
            JSON.stringify({
                type: 'op-core-nui-load',
                mode: 'production',
            })
        );
    }, 1000);
}
