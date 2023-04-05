import Navbar from "@/components/navbar";

export default function MainLayout({children}) {
    return (
        <div className="d-flex flex-column">
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    );
}