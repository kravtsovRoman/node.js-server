const https = require('https');

function getRepos(username, done) {
    if(!username) return done(new Error('Необходимо указать имя пользователя'));

    const options = {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: { 'User-Agent': 'kravtsovRoman' }
    };

    https.get(options, res => {
        res.setEncoding('utf-8');
        
        let body = '';
        res.on('data', data => body += data);
        res.on('end', () => {
            const result = JSON.parse(body);
            done(null, result);
        });
    });
}

module.exports = {
    getRepos
};