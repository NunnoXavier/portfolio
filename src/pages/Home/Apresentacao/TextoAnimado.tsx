import { Typography } from "@mui/material/"
import { useState, useEffect } from 'react'
import './Apresentacao.css'

interface TextoAnimadoProps{
    texto: string
}

const TextoAnimado: React.FC<TextoAnimadoProps> = ( { texto } ) => {
    const [strTexto, setTexto] = useState(texto)

    useEffect(() =>{
      efeitoMaquinaDeEscrever(texto)
    },[])
  
    const efeitoMaquinaDeEscrever = (t: string) =>{
      const arr = t.split('')
      let tt = ''
      setTexto(tt)  
      arr.forEach((letra, i) => {
        if(i === 0){
          //return
        } 
        
        setTimeout(() => {
          tt += letra
          setTexto( tt )
          if(i == texto.length -1){
            setTimeout(() => efeitoMaquinaDeEscrever(texto), 2000)
            
          }
        },100 * i)
      })
    }        
    
    return(
        <Typography className="animado" variant="h3" color="primary.contrastText" textAlign="center">
            { strTexto }
        </Typography>        
    )
}

export default TextoAnimado