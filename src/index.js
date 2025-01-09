import prompt from "prompt";
import mainPrompt from './prompts/prompt-main.js'
import createQrCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js"

async function main() {
    
    prompt.get(mainPrompt, function(err, result){

        if (result.select == 1){
            createQrCode();
        }


        if (result.select == 2){
            createPassword();
        }

        prompt.start();
    })
}

main();