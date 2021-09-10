const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'db4free.net',
        port: env.DB_PORT || '3306',
        user: env.DB_USER || 'node_sql_test',
        password: env.DB_PASSWORD || 'VpZzr7$8u8PzjBm',
        database: env.DB_NAME || 'node_sql_test',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
