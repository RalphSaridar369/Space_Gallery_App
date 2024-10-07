import './App.css';
import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './Apod.css';
import Loading from './images/Loading.gif';
import Video from './images/Video.gif';

class Apod extends Component{
    constructor(props){
        super(props);

        this.state={
            loading:true,
            image:'',   
            Image:'',
            title:'',
            date:'',
            photographer:'',
            explanation:''
        }
    }

   // useEffect(){
       //// axios.get("https://api.nasa.gov/planetary/apod?api_key=GejSjhiGtgqQYmQv7YUy2rSbUnbWLbg0K3ZGOhlR").then((data)=>{
       //     console.log("test");
      //  })
   // }

   componentDidMount(){
    axios.get("https://api.nasa.gov/planetary/apod?api_key=GejSjhiGtgqQYmQv7YUy2rSbUnbWLbg0K3ZGOhlR").then((data)=>{
        console.log(data);
        this.setState({
            title:data.data.title,
            date:data.data.date,
            photographer:data.data.copyright,
            explanation:data.data.explanation,
            loading:false,
        });

        if(data.data.copyright=="" || typeof data.data.copyright == 'undefined'){
            this.setState({photographer:"Unknown"})
        }
        if(data.data.media_type=="image"){
           this.setState({image:data.data.url, Image:data.data.url});
        }

        else{
            this.setState({
                Image:Video,
                image:data.data.url,
            })
        }
        })
   }
 
    render(){
        
        const loadingImg ={
            opacity:0.9,
            width:"100%",
            height:"100vh",
            overflowY:"hidden",
        }

        const loadingBody={
            overflowY:"hidden",
        }

        if(this.state.loading || !this.state.image){
            return(<div style={loadingBody}>
                <img src={Loading} style={loadingImg}/>
            </div>);
        }
        else{
        return (
            <div className="BodyApod">
                <a href={this.state.image} target="_blank">
                    <img src={this.state.Image} href={this.state.image} className="MainImage"/>
                </a>
                <h2 className="Title">{this.state.title}</h2>
                <div className="InfoApod">
                    <h3 className="Photographer">by  {this.state.photographer}</h3>
                    <h3 className="Date">{this.state.date}</h3>
                    <h5 className="Explanation">{this.state.explanation}</h5>
                    <a href={this.state.image} target="_blank">
                        <img className="SmallImage" src={this.state.Image} />
                    </a>
                    <h1></h1>
                </div>
            </div>
        );          
    }
}
}
export default Apod;
