
function Home() {
    return (
        <>
            <div className="flex justify-center bg-cyan-300 py-10 h-auto">
                <div className="container grid grid-cols-2 text-black">
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                        <h2 className="text-4xl font-bold ">
                            Seja bem vinde!
                        </h2>
                        <p className="text-xl">Aqui você encontra Medicamentos e Cosméticos!</p>

                        <div className="flex justify-around gap-4">
                            <button className='border-b-0 rounded px-4 py-2 bg-indigo-800 text-white hover:bg-white hover:text-indigo-800'>
                                Cadastrar Produto
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/u4ctxhv0m/Proj-Farmacia/home.png_ex=67befec3&is=67bdad43&hm=d18ac6e8fb675966ebed620960266ac7cc7d686754a7bbd7fde188c28b88c53d&=&format=webp&quality=lossless&width=612&height=614?updatedAt=1740486733550"
                            alt="Imagem Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home

