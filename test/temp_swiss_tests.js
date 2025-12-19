
it('should throw if round count is not an integer', async () => {
    await expect(manager.create.stage({
        name: 'Swiss Float',
        tournamentId: 0,
        type: 'swiss',
        seeding: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
        settings: {
            size: 4,
            roundCount: 3.5,
        },
    })).to.be.rejectedWith('The round count must be an integer.');
});

it('should throw if round count is less than 3', async () => {
    await expect(manager.create.stage({
        name: 'Swiss Short',
        tournamentId: 0,
        type: 'swiss',
        seeding: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
        settings: {
            size: 4,
            roundCount: 2,
        },
    })).to.be.rejectedWith('The round count must be between 3 and 9.');
});

it('should throw if round count is greater than 9', async () => {
    await expect(manager.create.stage({
        name: 'Swiss Long',
        tournamentId: 0,
        type: 'swiss',
        seeding: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
        settings: {
            size: 4,
            roundCount: 10,
        },
    })).to.be.rejectedWith('The round count must be between 3 and 9.');
});

it('should create stage if round count is valid (e.g. 5)', async () => {
    const stage = await manager.create.stage({
        name: 'Swiss Valid',
        tournamentId: 0,
        type: 'swiss',
        seeding: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
        settings: {
            size: 4,
            roundCount: 5,
        },
    });
    expect(stage).to.not.be.null;
});
