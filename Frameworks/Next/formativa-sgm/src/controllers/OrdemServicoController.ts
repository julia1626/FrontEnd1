import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";

//getAll
export const getAllOrdemServico = async() =>{
    await connectMongo();
    const ordensServico = await OrdemServico.find([]); //listar todos os ordensServico da coleção
    return ordensServico;
}

//getOne
export const getOneOrdemServico = async(id: string) =>{
    await connectMongo();
    const ordemServico = await OrdemServico.findById(id);
    return ordemServico;
}

//create
export const createOrdemServico = async(data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const novaOrdemServico = new OrdemServico(data);
    const novaOrdemServicoId = novaOrdemServico.save();
    return novaOrdemServicoId;
}

//update
export const updateOrdemServico = async(id:string, data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const ordemServicoAtualizado = await OrdemServico.findByIdAndUpdate(id, data, {new:true});
    return ordemServicoAtualizado;
}

//delete
export const deleteOrdemServico = async(id:string) =>{
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
}