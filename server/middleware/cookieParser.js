const parseCookies = (req, res, next) => {
    if(req.headers.cookie) {
        console.log(req.headers);
        let key = req.headers.cookie.split('=')[0];
        let value = req.headers.cookie.split('=')[1];
        let cookie = {}
        cookie[key] = value;
        req.cookies = cookie;
        console.log('aserawerawer;', req.cookies);
    }
    next();
};

module.exports = parseCookies;


// { cookie: 'shortlyid=18ea4fb6ab3178092ce936c591ddc591dd936c591ddbb
// 90c99c9f66; otherCookie=2a990382005bcc8b968f2b18ff2b18f968f2b18f8f
// 7ea490e990e78; anotherCookie=8a864482005bcc8b968f8b968fbcc8b968f2b
// 18f8f7ea490e577b20' }