class Guild {
    constructor(id, name, users) {
        this.id = id;
        this.name = name;
        this.users = users;
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
     * @param {string} name
     */
    set name(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    /**
     * @param {array} users
     */
    set users(users) {
        this.users = users;
    }

    get users() {
        return this.users;
    }
}