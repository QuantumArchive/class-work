import template from './app-header.html';
import styles from './app-header.scss';

export default {
    template,
    transclude: {
        links: '?headerLinks',
        custom: '?headerCustom'
    },
    controller() {
        this.styles = styles;
    }
};