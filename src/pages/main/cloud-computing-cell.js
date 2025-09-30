import Header from "@/Components/Header";
import CloudComputing from "../pagesComp/CloudComputing";


export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Cloud Computing Cell"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
                    <CloudComputing />
                </section>
            </div>
        </>
    )
}

export default Home;
