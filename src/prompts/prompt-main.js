import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.greenBright.italic("Escolha qual ferramenta você deseja utilizar (1 - QR code ou 2 - Senha aleatoria)"),
        pattern: /^[1-2]$/,
        message: chalk.redBright.italic("Escolha entre as opções 1 ou 2"),
        required: true,
    },
]


export default mainPrompt