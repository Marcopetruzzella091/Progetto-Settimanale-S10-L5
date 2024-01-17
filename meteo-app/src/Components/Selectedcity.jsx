
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Meteocard from './Meteocard';



export default function Selectedcity() {
    
    const [prov, setProv] = useState([]);
    
    const [comune, setComune] = useState([]);

    const [selectcomune, setSelectcomune] = useState();

    console.log(selectcomune)
       
   
   
    useEffect(() => {
        axios.get('https://axqvoqvbfjpaamphztgd.functions.supabase.co/province/')
          .then(response => {
            setProv(response.data);
            
          })
          .catch(error => {
            console.log(error);
            
          });
      }, []
      );
  
    
     const  loadcom = (e)=> {axios.get('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni/provincia/'+ e)
     .then(response => {
        
       setComune((response.data));        
       
     })
     .catch(error => {
       console.log(error);
       
     }); }

     const  icom = (e)=> {axios.get('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni?codice='+ e)
     .then(response => {
        
       setSelectcomune((response.data[0]));        
       
     })
     .catch(error => {
       console.log(error);
       
     }); }
    
   
 

    return (
        <>
            <Container>
                <Row>
                    <Col md="3">
                    
                        <Form.Select aria-label="Default select example" onChange={(e)=>  {loadcom(e.target.value); }}  >
                            <option>Seleziona Provincia</option>
                            
                             {prov.map((e, index)=><option key={index}   value={e.nome}> {e.nome} </option>)}  
                             
                        </Form.Select>

                    </Col>  </Row>
                <Row>
                    <Col md="3">
                        <Form.Select aria-label="Default select example" onChange={(e)=>  {icom (e.target.value);   }} >
                            <option>Seleziona Comune</option>
                            {comune.map((e, index)=><option key={index}  name={e.codice} value={e.codice}> {e.nome} </option>)}  
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
          <Meteocard selectcomune={selectcomune}/>
          

        </>
    )
}
