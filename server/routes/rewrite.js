var fs = require('fs');
var path = require("path");

module.exports = function (url) {
    if (!url) return url;

    if (path.extname(url) != "") {
        if (path.extname(url) == '.js') {
            try {
                fs.statSync(path.join(__dirname, '../../node_modules', url));
                url = '../../node_modules' + url;
            }
            catch (e) {
                url = '../../public' + url;
             }
        } else {
            url = '../../public' + url;
        };
    }
    else
        url = '../../public/index.html';

    return path.join(__dirname, url);
};