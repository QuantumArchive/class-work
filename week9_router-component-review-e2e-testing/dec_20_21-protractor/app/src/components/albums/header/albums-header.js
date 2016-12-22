import styles from './albums-header.scss';

export default {
    template: `
        <a ng-class="$ctrl.styles.link" ui-sref="^.detail">detail</a>
        <a ng-class="$ctrl.styles.link" ui-sref="^.thumbnail">thumbnail</a>
    `,
    controller() {
        this.styles = styles;
    }
};