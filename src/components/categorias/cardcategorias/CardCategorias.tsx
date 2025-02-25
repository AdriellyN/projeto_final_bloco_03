import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { Pencil, Trash } from "@phosphor-icons/react"

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>


            <div className="flex items-center justify-center w-full text-slate-100 bg-indigo-800 py-1 gap-2">
                <Link to={`/editarcategoria/${categoria.id}`}>
                        <Pencil size={36} className="#ffffff " />
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} >
                        <Trash size={36} color="#ffffff" />
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias