export default function Bananas() {
    return (
        <main className=" flex justify-center  items-center">
            <div className="w-[80%] rounded-2xl bg-[#878E88] items-center content-center h-screen m-10 ">
                <div className="items-center justify-center content-center">
                    <div className="text-center p-2 text-3xl rounded-xl bg-[#D4DFC7]">
                        Название доукмента
                        <div>
        
                        </div>
                    </div>

                        <img className="flex  rounded-lg content-center w-[70%] mx-[15%] my-[1%] " src="https://images.unsplash.com/photo-1683908390248-bf40286d6149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />

                    <button className="bg-[#A3BBAD] mx-1 p-3 text-2xl rounded-full">
                        Изменить          
                    </button>

                    <button className="bg-[#96C0B7] mx-1 p-3 text-2xl rounded-full">
                        Вернуться         
                    </button>

                </div>
            </div>
        </main>
    )
}