const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU23KqSBT9l37VHLkpYFWqBhBQUfFGjE7OQwMNdrja3YiY8t+nMEnl1FSdM5m3rmaz9uq91tpvIC8wRQ5qwPANlASfIUPtkTUlAkOgV1GECOiCEDIIhsDV3dnM5fkytjfIvgysg9Evx2Nht+Cdhqozrkk513CxlBaP4NYFZeWnOPgDoJptNRxNpbB2quRUXPCp2Spm3hPUlblP9ja6ioW6mmgLk3sEtxYRYoLz2CyPKEMEpg5qlhCT79G3dVeYL0fb9WIlrDfO0n0aS42ZThzOs6dGD17c0np6joy9tfoe/WDbGdOVvBKmz8vFrLSVU7F9tch8UF2nhj1H7tThRmRgTnbKO32K4xyFkxDlDLPm23NvFpE72U02ZFklCb16o+3K41R85gKyDon+GpgNPFyC14Kn3yMeRSQOJtXkUhuZauySoyLmSunZOuZ7fX5UQL2jLdWduq/jX4kvyadXkv8z98LsFe5if9KVnW82y9HO4Xy3t5ggReqsYmZuq9A9wUEz5r9pmzIScgdrsIkkRWnYkzxiidRLohrb0VWMr/Mj2VRisaNm/UUfsor8iaXld+ZYn6ZlHERTgdPjmnrnZ1GlYnlax2d1THsjXYLyq5Bp1VhKpit2rk20ssbyLpMqr3Ai3TSCgQcPrlhdFniaX/T68f6iBDWTEAz5WxcQFGPKCGS4yNs7QeS7AIbnDQoIYvfxAtvp8DEPZ8ZVzI04q+xjdOp4i0YdrMgoUOSiqvPXybVJ9vUj6IKSFAGiFIVjTFlBmjmiFMaIguHfP7sgRxf2Llzbru0WYUKZl1dlWsDwU9XPjzAIiipnmyYPjPaACBhyX9eIMZzHtJ1jlUMSHPEZGUfIKBhGMKXo1gUhOuMAtXigGhxXJdS26xRRL5Zr/+xTIW4pH4v8vQRJfMiFUHhAEi8/SL40ePAVRXiQxEBBKifLvo9AF+CPzLT//FZC7bwZqZuBk4WudrFqS+RU8vS0icq5dpfhffaIoBAMGalQF/gwSKpyWyQo/wPuxk2363lvv++Jo9nVIp1dEIezeLk5Kr/gvmsKhm9fe8oowhZPWS52A2W8AF2Q3S2I25erkixzsiz2JXEocn/RH3U7R1iWP3LEQBfksC0Gxks+fsm1l3x7P3gv+e4l19q2H5q0gCFiEKe0LZ+5l2OljE1nkAuE2rZuxpoRa+BLw88wvJuNlL40W7O+Va/FVJbgqphbVuh16DMurhv3hM8WW+7zkF7vZvs3CBiCy0UyHaangeAIZbw9k55Wp2edbKHbmw42yO4dZD+T9kfe2lucvub9yVbzm8A7vVo1mfjltX88v0bPR/5wWilmNbdmttYm59NLvzaDai2xyAjSJtnnoz1F/OHi0+ezPBnNq8I7ejOYuvPrmPeXy8ScbErvqDl2trH6B+lwoEZz2RVZHwXOPFGlKSsEjUv01XtM72si/VjP+B6gtw/nRRjdt92HKP+l3VcGuFv3F4iP9fkbn+lwsOsYnI/WgRn2UcdOnJG+fn5aEks6zbnXU0Eu/laYiv5cAbfbzy4oU8iigmRgCGjmQ9AFKaRM+8rwFmeIMpiVYMjLYl8RJJHvd0HWaGW5YZB9Rh9ouqZpowMGt38AWuW8VxYIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

