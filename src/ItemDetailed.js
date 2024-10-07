import React from 'react'
import './Apod.css';
import './App.css';
import './Audio.css';
import Speaker from './images/speaker.png';

const ItemDetailed = (props) =>{

        var data =[]
        data=JSON.parse(localStorage.getItem('url'))
        console.log(data);

    if(data[data.length-1] == 'image'){
        return(
            <div className="BodyApod">
                <a href={data[4]} target="_blank">
                    <img src={data[4]} href={data[4]} className="MainImage"/>
                </a>
                <h2 className="Title">{data[0]}</h2>
                <div className="InfoApod">
                    <h3 className="Photographer">{data[1]}</h3>
                    <h3 className="Date">{data[2]}</h3>
                    <h5 className="Explanation">{data[3]}</h5>
                    <a href={data[4]} target="_blank">
                        <img className="SmallImage" src={data[4]} />
                    </a>
                    <h1></h1>
                </div>
            </div>
        )
        }     
        
    if(data[data.length-1] =='video'){
        return(
            <div className="BodyApod">
                <a href={data[data.length-2]} target="_blank">
                    <img src={data[5]} href={data[data.length-2]} className="MainImage"/>
                </a>
                <h2 className="Title">{data[0]}</h2>
                <div className="InfoApod">
                    <h3 className="Photographer">{data[1]}</h3>
                    <h3 className="Date">{data[2]}</h3>
                    <h5 className="Explanation">{data[3]}</h5>
                    <a href={data[data.length-2]} target="_blank">
                        <img className="SmallImage" src={data[5]} />
                    </a>
                    <h1></h1>
                </div>
            </div>
        )
        }

        if(data[data.length-1] == 'audio'){
            return(
                <div className="AudioBodyApod">
                    <a href={data[data.length-2]} target="_blank">
                        <img src={Speaker} href={data[data.length-2]} className="AudioMainImage"/>
                    </a>
                    <h2 className="AudioTitle">{data[0]}</h2>
                    <div className="AudioInfoApod">
                        <h3 className="AudioPhotographer">{data[10]}</h3>
                        <h3 className="AudioDate">{data[1]}</h3>
                        <h5 className="AudioExplanation">{data[2]}</h5>
                        <a href={data[data.length-2]} target="_blank">
                            <img className="AudioSmallImage" src={Speaker} />
                        </a>
                        <h1></h1>
                    </div>
                </div>
            )
            }   
    }

export default ItemDetailed;
