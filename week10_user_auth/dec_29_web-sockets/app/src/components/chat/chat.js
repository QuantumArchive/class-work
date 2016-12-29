import template from './chat.html';
import styles from './chat.scss';

export default {
    template, 
    controller
};

controller.$inject = ['chatService'];

function controller(chat) {
    this.styles = styles;
    this.text = '';
    this.messages = [];

    chat.onMessage(message => this.messages.push(message));

    this.sendMessage = () => {
        const message = { text: this.text };
        chat.send(message);
        this.text = '';
        this.messages.push(message);
    };
}