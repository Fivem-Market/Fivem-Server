function closeNUI(cb: any, data: any = {}) {
    fetch(`https://op-inventory/closeNUI`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then(cb());
}

export { closeNUI }
