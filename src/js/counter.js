module.exports = (callback) => {
    let countdown = 5;

    let timer = setInterval(() => {
        callback(countdown);
        countdown--;

        if (countdown === -1) {
            clearInterval(timer);
        }
    }, 1000);
};