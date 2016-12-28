import styles from './albums-header.scss';

export default {
    // Using `^.detail` causes ui-router to just transition end part of state:
    // /albums/123abc/detail + `^.thumbnail` = /albums/123abc/thumbnail
    template: `
        <a ng-class="$ctrl.styles.link" ui-sref="^.detail">detail</a>
        <a ng-class="$ctrl.styles.link" ui-sref="^.thumbnail">thumbnail</a>
    `,
    controller() {
        this.styles = styles;
    }
};