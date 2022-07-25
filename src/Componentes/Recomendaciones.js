import React, {useState, useEffect} from "react";
import RecomendacionFragment from "./Fragments/RecomendacionFragment"
import covid19 from '../assets/images/cq5dam.web.1280.1280.jpeg'
import cuidados19 from '../assets/images/coronavirus_spanish.png.img.png'
const Recomendaciones = () => {
    return(
        <>
            <div className="conteiner">
                <div className="row">
                    <div className="col-12">
                        <h1>Recomendaciones</h1> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <RecomendacionFragment 
                            titulo="Positivo"
                           
                            tipoAlerta="alert-danger">
                                <p>1. Es muy importante que, desde la toma del examen, se mantengan todas las medidas de prevención de contagio. Cuando
                                se retire de la clínica, de no poseer una, se le proporcionará una mascarilla para regresar a su domicilio y debe mantener el
                                menor contacto posible con otras personas durante su traslado.
                                </p>
                                <p>
                                2. Debe permanecer en su domicilio (en aislamiento) hasta obtener el resultado (plazo máximo de 72 horas).
                                </p>
                                <img src={covid19} className="card-img-top" alt="..."/>
                        </RecomendacionFragment>
                            
                            </div>
                            <div className="col-6">
                            <RecomendacionFragment 
                            titulo="Negativo"
                            tipoAlerta="alert-success"
                          
                            >
                                  <p>Lávese las manos: lávese las manos frecuentemente con agua y jabón por al menos 20 segundos. 
                                </p>
                                <p>
                                Desinfectante de manos: si no hay agua y jabón disponibles, use un desinfectante de manos que contenga al menos un 60 % de alcohol. 
                                </p>
                                <p>
                                No tocar: evite tocarse los ojos, la nariz y la boca sin haberse lavado las manos antes.
                                </p>
                                <img src={cuidados19} className="card-img-top" alt="..."/>

                            </RecomendacionFragment>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default Recomendaciones