import prompt from "prompt";
import mainPrompt from './prompt/prompt-main.js'

async function main() {
    
    prompt.get(mainPrompt, function(err, result){

        if (result.select == 1){
            console.log("QR code escolhido")
        }


        if (result.select == 2){
            console.log("Password escolhido")
        }

        prompt.start();
    })
}

main();