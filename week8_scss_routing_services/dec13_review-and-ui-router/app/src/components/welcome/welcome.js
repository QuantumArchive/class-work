export default {
    template: `
    <h1>Welcome to the Pirate App!</h1>
    <h3>Are you?</h3>
    <a ui-sref="welcome.new">new</a>
    <a ui-sref="welcome.returning">returning</a>
    <section><ui-view>This is the default text</ui-view></section>
`
};