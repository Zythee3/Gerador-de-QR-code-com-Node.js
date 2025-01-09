import qr from 'qrcode-terminal';
import chalk from 'chalk';
import logSymbols from 'log-symbols'


async function handle(err, result) {
    
    if (err){
        console.log("error on application");
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, function(qrcode){
        console.log(logSymbols.success, chalk.greenBright("Qr code gerado com sucesso!\n"))
        console.log(qrcode);
    })
}


export default handle;