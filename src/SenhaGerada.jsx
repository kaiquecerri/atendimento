import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SenhaGerada() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/novasenha");
        }, 5000);

        const handleTouch = () => {
            navigate("/novasenha");
        }
        window.addEventListener("touchstart", handleTouch);
        
        return () => {
            window.removeEventListener("touchstart", handleTouch);
            clearTimeout(timer);
        }
    }, [navigate]);

    return (
        <div className="w-screen h-screen bg-sky-50 flex flex-col justify-center gap-5 p-5">
            <h1 className="text-4xl font-bold text-center p-5">SUA SENHA É:</h1>
            <h1 className="text-6xl font-bold text-center p-5">{new URLSearchParams(window.location.search).get("senha")}</h1>
        </div>
    );
}

export default SenhaGerada;