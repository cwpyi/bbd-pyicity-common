import secret from '../core/secret'

window.isecret = {}
window.isecret.aesEncrypt = function(data) {
    return new secret('icity$open$09764').aesEncrypt(data);
}
window.isecret.aesDecrypt = function(data) {
    return new secret('icity$open$09764').aesDecrypt(data);
}

export default window.isecret