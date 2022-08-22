const { currentTimestamp } = require('./datetime.js')
const JsonDB = require('./JsonDB.js')
const unique = rqeuire('./uuid.js')

const DB = new JsonDB('../../db/db.json')

class Note {
    static DB = DB
    static add(note) {
        note = new Note(note)
        let { id, title, text, created, edited } = note
        this.DB.addToCollectionOrUpdate('notes', {id, title, text, created, edited})
        return note
    }
    static remove(noteId) {
        this.DB.removeById ('notes', noteId)
    }
    static getAll() {
        return this.DB.getCollection('notes')
    }

    // Finish constructor code
}