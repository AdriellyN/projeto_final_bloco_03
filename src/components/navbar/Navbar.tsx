import { ShoppingCart, User } from "@phosphor-icons/react"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className="flex justify-center w-full py-4 text-white bg-indigo-900 ">
                <div className="container flex items-center justify-between mx-4 text-lg">
                    <Link to="/home">
                        <img
                            src="https://ik.imagekit.io/u4ctxhv0m/Proj-Farmacia/logo.png_ex=67befec2&is=67bdad42&hm=7890afa4b065b4918ace54940a1051a78a95d6f3722bce5acc86fd7580e23226&?updatedAt=1740486701383"
                            alt="Logo"
                            className="w-60"
                        />
                    </Link>

                    <div className="relative flex items-center justify-center w-2/5 text-black">
                        <form
                            className="flex items-center justify-center w-full"
                        >
                            <input
                                className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
                                type="search"
                                placeholder="Procurar"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button
                                type="submit"
                                className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-cyan-400 hover:bg-cyan-600 rounded-lg border border-cyan-80000"
                            >
                                <MagnifyingGlass
                                    size={14}
                                    weight="bold"
                                />
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center gap-4 py-4">
                        <Link
                            to="/categorias"
                            className="hover:underline"
                        >
                            Categorias
                        </Link>
                        <Link
                            to="/cadastrarcategoria"
                            className="hover:underline"
                        >
                            Cadastrar Categoria
                        </Link>
                        
                        <User
                            size={32}
                            weight="bold"
                        />

                        <ShoppingCart
                            size={32}
                            weight="bold"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar