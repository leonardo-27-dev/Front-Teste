import axios from "axios";

export const listUser = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/listUser");
    if (response.status !== 200) {
      throw new Error("Erro na requisição");
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao listar usuário:", error);
    return null;
  }
};
