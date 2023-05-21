export default function Eda() {
    return (
        <main className="flex content-center">
             
            <div className=" flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border m-10 text-gray-700 shadow-md">

               


                <div className=" relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Документ
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">

                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex space-x-2 items-center">


                        <button
                            className="static z-50 whitespace-normal break-words rounded-lg bg-[#878E88] py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                        > Открыть
                        </button>

                        <button
                            className="static z-50 whitespace-normal break-words rounded-lg mx-20 bg-[#357266] py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                        > Изменить
                        </button>

                    </div>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        Дата
                    </p>
                </div>
            </div>


           
            <button className="bg-[#96C0B7] place-content-center mt-10 w-[150px] h-[100px] text-xl rounded-3xl">
                    Добавить
                </button>

        </main>
        
    )
}