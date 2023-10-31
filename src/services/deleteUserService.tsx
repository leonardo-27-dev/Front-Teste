import axios from "axios"

export const deleteUser = async (url: string) => {
    let mensagem;
    await axios.delete(url)
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