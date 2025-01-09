import chalk from "chalk";
// import { message } from "prompt";


const promptQrCode = [

    {
        name: "link",
        description: "Informe o link para gerar o Qr code: ",

    },

    {
        name: "type",
        description: chalk.greenBright.italic("Escolha entre 1 - Qr code em imagem ou 2 - Qr code no terminal"),
        pattern: /^[1-2]$/,
        message: chalk.redBright.italic("Escolha entre 1 ou 2"),
        required: true,
    }
]


export default promptQrCode;