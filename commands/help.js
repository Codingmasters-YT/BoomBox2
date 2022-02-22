exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: '#E70000',
            author: { name: '**MUSIC BOT MADE BY Codemasters**' },
            footer:{ text: 'HEhE boi' },
            fields: [
                { name: 'Bot Commands', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `pb`, `loop`, `volume`, `skip`, `stop`, `ping`' },
            ],
            timestamp: new Date(),
            description: `__Help Menu__`,
        },
    });

};
