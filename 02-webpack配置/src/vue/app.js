const CryptoJS = require('crypto-js'); // AES加密 (业务响应)

  /**
 * AES 解密 ：字符串 key iv  返回base64
 *
 */
export function Decrypt(word, keyStr, ivStr) {
   
    word = "FuuJQge72kgkc3eNhLe7lg==";
    // let key = CryptoJS.enc.Utf8.parse("cdff74110d2fbf7fae43820f9eed3a9e");
    let key = CryptoJS.enc.Utf8.parse("cdff74110d2fbf7fae43820f9eed3a9e");
    let iv = CryptoJS.enc.Utf8.parse("d22b0a851e014f7b");
  
    let decrypt = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    console.log("解密结果:" + decryptedStr.toString());
    
  }
  