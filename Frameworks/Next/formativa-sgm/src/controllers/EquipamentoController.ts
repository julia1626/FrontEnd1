import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb";

//getAll
export const getAllEquipamento = async() =>{
    await connectMongo();
    const equipamentos = await Equipamento.find([]); //listar todos os equipamentos da coleção
    return equipamentos;
}

//getOne
export const getOneEquipamento = async(id: string) =>{
    await connectMongo();
    const equipamento = await Equipamento.findById(id);
    return equipamento;
}

//create
export const createEquipamento = async(data: Partial<IEquipamento>) =>{
    await connectMongo();
    const novoEquipamento = new Equipamento(data);
    const novoEquipamentoId = novoEquipamento.save();
    return novoEquipamentoId;
}

//update
export const updateEquipamento = async(id:string, data: Partial<IEquipamento>) =>{
    await connectMongo();
    const equipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, {new:true});
    return equipamentoAtualizado;
}

//delete
export const deleteEquipamento = async(id:string) =>{
    await connectMongo();
    await Equipamento.findByIdAndDelete(id);
}