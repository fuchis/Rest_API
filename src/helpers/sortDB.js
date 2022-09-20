const sortDB = {}

sortDB.sort = (DB) => {
    return DB.sort( (a, b) => a.name.localeCompare(b.name, 'en', {'sensitivity': 'base'}));
}

module.exports = sortDB;