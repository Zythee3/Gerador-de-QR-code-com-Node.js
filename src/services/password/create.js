import chalk from 'chalk'
import handle from './handle.js';
import logSymbols from 'log-symbols';

async function createPassword() {
    console.log(logSymbols.success, chalk.greenBright("Resultado da senha aleatória:"))
    const password = await handle();
    console.log(password);
}

export default createPassword;