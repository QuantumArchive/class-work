export default {
    template: `
    <h1>About the Pirate App!</h1>
    <a ui-sref="about.special">make it special</a>
    <a ui-sref="about.plain">make it plain</a>
    <section>
        <ui-view name="header"></ui-view>
    </section>
    <section>
        <ui-view name="main"></ui-view>
    </section>
    
`
};