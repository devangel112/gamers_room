module.exports = (client, callback) => {
    client.on('message', (message) => {
        const { content } = message;
        console.log(content);
        let charsCount = content.length;
        console.log(charsCount);
        let xp = Math.round(charsCount * 0.3);
        console.log(xp);
        callback(message);
    })
}