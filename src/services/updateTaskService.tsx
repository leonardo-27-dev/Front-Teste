import axios from "axios"

export const updateTask = async (url: string, obj: any) => {
    let mensagem;
    await axios.post(url, obj)
    .then((response: any) => {
        mensagem = response.status;
    }).catch((error) => {
        if(error.response){
            mensagem = error.response.data.message;
        } else {
            postMessage("Erro: Tente novamnete mais tarde");
        }
    })

    return mensagem;
}