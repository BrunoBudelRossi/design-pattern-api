if (process.env.NODE_ENV === 'development')
    module.exports = {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        entities:
            process.env.NODE_ENV === 'development'
                ? ['src/models/*.{ts,js}']
                : ['dist/models/*.js'],
        migrations:
            process.env.NODE_ENV === 'development'
                ? ['src/database/migrations/**/*.{ts,js}']
                : ['dist/database/migrations/**/*.js'],
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
                rejectUnauthorized: false,
            },
        },
        entities:
            process.env.NODE_ENV === 'development'
                ? ['src/models/*.{ts,js}']
                : ['dist/models/*.js'],
        migrations:
            process.env.NODE_ENV === 'development'
                ? ['src/database/migrations/**/*.{ts,js}']
                : ['dist/database/migrations/**/*.js'],
        cli: {
            entitiesDir: 'src/models',
            migrationsDir: ['src/database/migrations'],
        },
    };
