
import { useNavigate } from "react-router-dom";


export default function ErrorPage(){

    const navigate = useNavigate();

    return(
        <>
        <h1>Pagina Não Encontrada</h1>
        <button onClick={() => navigate('/API-Harry-Potter')}>Voltar a Pagina Inicial</button>
        </>
    )
}