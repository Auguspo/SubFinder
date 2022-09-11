var fs = require('fs');
var files = fs.readdirSync('Z:\HDD');

files.map(files => fs.readdirSync('Z:\HDD\\'.concat(files) ).includes('Subs') ? 

    (fs.readdirSync('Z:\HDD\\'.concat(files)+'\\Subs').test(\d+(?:_Spanish.srt)) ? 

         console.log( 'esta' ) : null) : console.log('nada de nada')


)
