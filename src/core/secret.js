var crypto = require('crypto');

export default class Secret {
    constructor(key) {
        this.key = key || 'icity987654$1236'
    }

    /**
     * 加密
     */
    aesEncrypt(data) {
        var cipher = crypto.createCipher('aes-128-ecb', this.key);
        var crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    /**
     * 解密
     */
    aesDecrypt(encrypted, key) {
        try {
            const decipher = crypto.createDecipher('aes-128-ecb', this.key);
            var decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch(err) {
            console && console.log(err)
            return null;
        }
    }

}