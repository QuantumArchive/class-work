'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WelcomePage = function () {
    function WelcomePage() {
        _classCallCheck(this, WelcomePage);

        // get a ref to the navigation elements
        var nav = element.all(by.css('nav a'));
        this.aGallery = nav.get(1);

        // get a ref to the main <ui-view>

        // TODO: not happy with this verbose, inefficient way
        // to get first child element. find a better way
        this.uiView = element(by.css('main ui-view'));
    }

    _createClass(WelcomePage, [{
        key: 'get',
        value: function get() {
            // navigate to url (in this case baseUrl in protractor.conf.js)
            return browser.get('/');
        }
    }, {
        key: 'goToGallery',
        value: function goToGallery() {
            this.aGallery.click();
        }
    }, {
        key: 'title',
        get: function get() {
            return browser.getTitle();
        }
    }, {
        key: 'url',
        get: function get() {
            return browser.getLocationAbsUrl();
        }
    }, {
        key: 'stateComponent',
        get: function get() {
            // get the current tagName of first element
            // under <ui-view> (which should be the state component)
            return this.uiView.all(by.css('*')).first().getTagName();
        }
    }]);

    return WelcomePage;
}();

exports.default = WelcomePage;