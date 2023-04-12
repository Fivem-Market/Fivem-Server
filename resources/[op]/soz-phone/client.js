const hotReload = GetConvar('op_phone_hot_reload', 'false') == 'true';

if (hotReload) {
    console.log('[op-phone] hot module reload enabled');
    onNet('op-phone:__development__:hot-reload', content => {
        console.log('[op-phone] [hmr] reloading client file');
        emit('op_phone.__internal__.stop_application');

        eval(content);
    });

    setTimeout(() => {
        SendNuiMessage(
            JSON.stringify({
                type: 'op-phone-nui-load',
                mode: 'dev',
            })
        );
    }, 5000);
} else {
    setTimeout(() => {
        SendNuiMessage(
            JSON.stringify({
                type: 'op-phone-nui-load',
                mode: 'production',
            })
        );
    }, 5000);
}
