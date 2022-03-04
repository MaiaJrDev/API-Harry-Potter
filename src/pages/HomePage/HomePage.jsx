import {FirstDivHome, DivImg, ImgTitle} from './Styled'
import grifinoria from '../../img/grifinoria.png'
import sonserina from '../../img/sonserina.png'
import lufalufa from '../../img/lufalufa.png'
import corvinal from '../../img/corvinal.png'
import selectHouse from '../../img/selecthouse.png'
import subGrif from '../../img/subgrif.png'
import subSons from '../../img/subsons.png'
import subLufa from '../../img/sublufa.png'
import subCorv from '../../img/subcorv.png'
import audio1 from '../../sounds/gryffindor.mp3'
import audio2 from '../../sounds/slytherin.mp3'
import audio3 from '../../sounds/hufflepuff.mp3'
import audio4 from '../../sounds/ravenclaw.mp3'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import gifLoading from '../../img/loadingHome.gif'

export default function HomePage(){

    const [gif, setGif] = useState(true);
    
    const navigate = useNavigate();

    useEffect(()=>{
      setTimeout(()=>{
        setGif(false)
      },2000)
    },[])


    const SelectHouse = (house, audio) => {
        
        new Audio(audio).play();
        navigate(`/Wizards/${house}`);

    }


    const renderShild = () => {
        return(
            <>
            <img src={selectHouse} className='titleHome' alt='seleciona a casa'/>
            <DivImg>
                <ImgTitle>
                <img src={grifinoria} className='shield' alt='grifinoria' onClick={() => SelectHouse('gryffindor', audio1)}/>
                <img src={subGrif} alt='subtitulo grifinoria'/>
                </ImgTitle>
                <ImgTitle>
                <img src={sonserina} className='shield' alt='sonserina' onClick={() => SelectHouse('slytherin', audio2)}/>
                <img src={subSons} alt='subtitulo Sonserina'/>
                </ImgTitle>
                <ImgTitle>
                <img src={lufalufa} className='shield' alt='lufalufa' onClick={() => SelectHouse('hufflepuff', audio3)}/>
                <img src={subLufa} alt='subtitulo Lufalufa'/>
                </ImgTitle>
                <ImgTitle>
                <img src={corvinal} className='shield' alt='corvinal' onClick={() => SelectHouse('ravenclaw', audio4)}/>
                <img src={subCorv} alt='subtitulo Corvinal'/>
                </ImgTitle>           
            </DivImg>
            </>
        )
    }


    return(
        <FirstDivHome>
            {gif ? <img src={gifLoading}/> : renderShild()}
        </FirstDivHome>
    )
}