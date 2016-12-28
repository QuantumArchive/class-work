oauth.$inject = ['$authProvider', 'apiUrl'];

export default function oauth($authProvider, apiUrl) {
    const url = `${apiUrl}/auth/twitter`;
    $authProvider.twitter({ url });
}