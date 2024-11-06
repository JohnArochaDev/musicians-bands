const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const band = await Band.create({name: 'test name', genre: 'test genre'})

        expect(band.name).toBe('test name');
        expect(band.genre).toBe('test genre');
    })

    test('can create a Musician', async () => {
        const musician = await Musician.create({name: 'test name', instrument: 'test instrument'})

        expect(musician.name).toBe('test name');
        expect(musician.instrument).toBe('test instrument');
    })

    test('can update a Band', async () => {
        const band = await Band.create({ name: 'test name', genre: 'test genre' });
    
        await Band.update({ name: 'updated name', genre: 'updated genre' }, {
            where: { id: band.id }
        });
    
        const updatedBand = await Band.findByPk(band.id);
    
        expect(updatedBand.name).toBe('updated name');
        expect(updatedBand.genre).toBe('updated genre');
    });

    test('can update a Musician', async () => {
        const musician = await Musician.create({name: 'test name', instrument: 'test instrument'})

        await Musician.update({ name: 'updated name', instrument: 'updated instrument' }, {
            where: { id: musician.id }
        });

        const updatedMusician = await Musician.findByPk(musician.id)

        expect(updatedMusician.name).toBe('updated name');
        expect(updatedMusician.instrument).toBe('updated instrument');
    })

    test('can delete a Band', async () => {
        Band.destroy({where:{name: 'updated name'}})
        Band.destroy({where:{name: 'test name'}})

        let bands = await Band.findAll()
        expect(bands.length).toBe(0)
    })

    test('can delete a Musician', async () => {
        Musician.destroy({where:{name: 'updated name'}})
        Musician.destroy({where:{name: 'test name'}})

        let musicians = await Band.findAll()
        expect(musicians.length).toBe(0)
    })
})