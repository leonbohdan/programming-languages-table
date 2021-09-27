const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// language for testing
// const programmingLanguage = {
//     name: 'newLang',
//     released_year: '2021',
//     githut_rank: '87',
//     pypl_rank: '2',
//     tiobe_rank: '5'
// };

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);

    const rows = await db.query(
        `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
        FROM programming_languages LIMIT ${offset},${config.listPerPage}`
    );

    const data = helper.emptyOrRows(rows);

    const meta = {page};

    return {
        data,
        meta
    }
};

async function create(programmingLanguage) {
    const result = await db.query(
        `INSERT INTO programming_languages 
        (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
        VALUES ${programmingLanguage.name},${programmingLanguage.released_year},
        ${programmingLanguage.githut_rank},${programmingLanguage.pypl_rank},
        ${programmingLanguage.tiobe_rank}`
    );

    let message = 'Error in creating programming language';

    if (result.affectedRows) {
        message = 'Programming language created successfully';
    }

    return {message};
}

module.exports = {
    getMultiple,
    create
};
