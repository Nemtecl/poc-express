module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER || 'test',
  password: process.env.POSTGRES_PASSWORD || 'test',
  database: process.env.POSTGRES_DB || 'test',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
