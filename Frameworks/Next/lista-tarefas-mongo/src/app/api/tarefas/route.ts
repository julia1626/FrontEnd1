//criar as rotas que não precisam de ID (get e post)

import { createTarefa, readAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const tarefas = await readAllTarefas(); //chama o controlador
        //tratar a resposta obtida pelo mongoDB
        return NextResponse.json({success:true, data:tarefas});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req: NextRequest){ //req : são os dados que estou enviando
    try {
        const data = await req.json(); //verifica se os dados estão em formato JSON
        const newTarefa = await createTarefa(data);
        return NextResponse.json({success:true, data:newTarefa});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}