import Player from '../models/player';
import map from '../map';

export default function playerService() {

    return {
        getNew() {
            new Player(map.start);
        }
    };
}