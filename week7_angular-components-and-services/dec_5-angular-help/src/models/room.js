export default class Room {
    constructor(name, { description, directions, items = [] }) {
        this.name = name;
        this.description = description;
        this.items = items;
        this.directions = directions;
    }

}