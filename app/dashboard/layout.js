import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar"
import style from './layout.module.css'
export default function Layout({ children }) {
    return (
        <>
            <header className="sticky top-0 z-10">
                <Navbar />
            </header>
            <div className="flex">
                <aside className={`${style.vScreen} sticky top-14`}>
                    <Sidebar />
                </aside>

                <main className="bg-slate-50">
                    {children}
                </main>
            </div>

        </>
    );
}