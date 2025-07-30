class Feature {
    constructor(id, title, description, voteCount = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.voteCount = voteCount;
    }
}

module.exports = Feature;