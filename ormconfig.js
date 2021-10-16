if (process.env.NODE_ENV === 'development')
    module.exports = {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        entities: ['src/models/*.{ts,js}'],
        migrations: ['src/database/migrations/**/*.{ts,js}'],
        cli: {
            entitiesDir: 'src/models',
            migrationsDir: ['src/database/migrations'],
        },
    };
else
    module.exports = {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        extra: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        entities: ['dist/models/*.js'],
        migrations: ['dist/database/migrations/**/*.js'],
        cli: {
            entitiesDir: 'src/models',
            migrationsDir: ['src/database/migrations'],
        },
    };
