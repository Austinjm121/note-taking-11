const fs = require('fs')
const path = require('path')

class JsonDB {
    connected = false
    data = {}

    constructor(filename) {
        this.file = filename
        if (this.fileExists()) this.data = this.parsedFile()
    }

    addToCollectionOrUpdate(collectionName, item) {
        const collection = this.getCollection(collectionName)
        let record = collection.find(existing => existing.id === item.id)
        if (record === undefined) {
            collection.push(item)
        } else {
            collection.splice(collection.indexOf(record), 1, item)
        }
        this.setCollection(collectionName, collection)
    }
    setCollection(collectionName, data) {
        this.data[collectionName] = data
        this.writeFile(this.data)
    }
    //Finish saveCollection, getCollection, removeId, retrieve Data, if file exists retrieve path, read file, write file
}