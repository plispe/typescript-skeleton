const path = require('path')

// If file with extension .ts is executed, then typescript sources are used
const extension = path.extname(process.argv[1])
const sourceDirectory = extension === '.ts' ? 'src' : 'dist';

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": process.env.DATABASE_SSL_MODE !== 'disabled',
    "synchronize": false,
    "logging": "all",
    "logger": "debug",
    "entities": [
        `${sourceDirectory}/entity/**/*${extension}`
    ],
    "migrations": [
        `${sourceDirectory}/migration/**/*${extension}`
    ],
    "subscribers": [
        `${sourceDirectory}/subscriber/**/*${extension}`
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}
