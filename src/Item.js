import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Speaker from './images/speaker.png';

const Item = (props) => {
    

    const styledImages={
        width:'20px!important',
        height:'20px!important',
    }

    const styledTitle={
        marginTop:'30px',
    }


    if(props.Media.media_type=="audio"){
        
        var data = [props.Media.nasa_id +"",
        props.Media.date_created +"",
        " 123",
        props.Media.description +"",];
        
         axios.get('https://images-assets.nasa.gov/audio/'+props.Media.nasa_id+'/collection.json').then((res)=>{
            for(var i=0;i<res.data.length;i++){
                var s = res.data[i];
                if( s.substring(s.length-9,s.length) == '~orig.mp3'){
                    s = encodeURI(s);
                    data.push(s);
                }
            }
            data.push(props.Media.media_type);
        }); 

        return (
            <div style={styledImages} className="bodyItem">
                    <Link to={`/spacelibrary/${props.Media.media_type}/${props.Media.title}`} target="_blank"
                    onClick={() =>{ localStorage.setItem('url',JSON.stringify(data))}}>
                        <img alt="" style={styledImages} src={Speaker} />
                    </Link>
                <div>
                    <h4 style={styledTitle}>
                        {props.Media.title}
                    </h4>
                    <p>
                        {props.Media.date_created}
                    </p>
                </div>
            </div>
        ) 

 
    } 

    if(props.Media.media_type == "video"){
        
        var data = [props.Media.title +"","by  "+ props.Media.photographer +"",props.Media.date_created +"",
        props.Media.description +"","", props.Details.links[0].href +""];

        axios.get('https://images-assets.nasa.gov/video/'+props.Media.nasa_id+'/collection.json').then((res)=>{
            for(var i=0;i<res.data.length;i++){
                var s = res.data[i];
                if( s.substring(s.length-10,s.length) == '~large.mp4'){
                    s = encodeURI(s);
                    data.push(s);
                }
            }
            data.push(props.Media.media_type);
        });

        if(typeof props.Media.photographer == 'undefined'){
            data[1]="by  Unknown";
        }


        return(
            <div style={styledImages} className="bodyItem">
                <Link to={`/spacelibrary/${props.Media.media_type}/${props.Media.title}`} target="_blank"
                onClick={() =>{ localStorage.setItem('url',JSON.stringify(data))}} >
                    <img alt="" style={styledImages} src={props.Details.links[0].href} />
                </Link>
                <div>
                    <h4 style={styledTitle}>
                        {props.Media.title}
                    </h4>
                    <p>
                        {props.Media.date_created}
                    </p>
                </div>
            </div>
        ) 


    }

    if(props.Media.media_type == "image"){

        var data = [props.Media.title +"","by  "+ props.Media.photographer +"",props.Media.date_created +"",
        props.Media.description +"",props.Details.links[0].href +"", props.Media.media_type];

        if(typeof props.Media.photographer == 'undefined'){
            data[1]="by  Unknown";
        }

        return(
            <div style={styledImages} className="bodyItem">
                <Link className="linkedImg" to={{pathname:`/spacelibrary/${props.Media.media_type}/${props.Media.title}`}} target="_blank" 
                onClick={() =>{ localStorage.setItem('url',JSON.stringify(data))}}>
                    <img alt="" style={styledImages} src={props.Details.links[0].href} />
                </Link>
                <div>
                    <h4 style={styledTitle}>
                        {props.Media.title}
                    </h4>
                    <p>
                        {props.Media.photographer}
                    </p>
                </div>
            </div>
        ) 


    }  
}

export default Item;