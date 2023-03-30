class User {
    constructor(id, tag, name, lastMessageTimestamp) {
        this.id = id;
        this.tag = tag;
        this.name = name;
        this.lastMessageTimestamp = lastMessageTimestamp;
    }

    /**
     * @param {int} id
     */
    set id(id) {
        this.id = id;
    }

    get id() {
        return this.id;
    }

    /**
     * @param {string} tag
     */
    set tag(tag) {
        this.tag = tag;
    }

    get tag() {
        return this.tag;
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    /**
     * @param {Date} lastMessageTimestamp
     */
    set lastMessageTimestamp(lastMessageTimestamp) {
        this.lastMessageTimestamp = lastMessageTimestamp;
    }

    get lastMessageTimestamp() {
        return this.lastMessageTimestamp;
    }

}