const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/dungeon`
);

exports.getLocation = grid_id => {
    return db.query(
        `
        SELECT * FROM test WHERE grid_id = $1
        `,
        [grid_id]
    );
};
