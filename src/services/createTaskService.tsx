import axios from "axios"

export const createTask = async (url: string, obj: any) => {
    let mensagem;
    await axios.post(url, obj)
    .then((response) => {
        mensagem = response.data.mensagem;
    }).catch((error) => {
        if(error.response){
            mensagem = error.response.data.mensagem;
        } else {
            postMessage("Erro: Tente novamnete mais tarde");
        }
    })

    return mensagem;
}