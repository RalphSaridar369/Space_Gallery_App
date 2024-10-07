import './App.css';
import React, { useEffect, Component } from 'react';
import SearchInput from './SearchInput';
import Results from './Results';
import axios from 'axios';
import Loading from './images/loadinghome.gif';


class SearchBar extends Component{

  constructor(props){
    super(props);

    this.inputRef = React.createRef();

    this.state={
      loading:true,
      buttonPressed : false,
      searchInput:"",
      quote:"",
      author:"",
      quotes:[
        {
          "id":"0",
          "quote":"“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”",
          "author":"― Albert Einstein"
        },
        {
          "id":"1",
          "quote":"“ Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying. ”",
          "author":"― Arthur C. Clarke"
        },
        {
          "id":"2",
          "quote":"“ A book, too, can be a star, a living fire to lighten the darkness, leading out into the expanding universe. ”",
          "author":"― Madeleine L'Engle"
        },
        {
          "id":"3",
          "quote":"“ Nothing happens until something moves. ”",
          "author":"― Albert Einstein"
        },
        {
          "id":"4",
          "quote":"“ The universe is a pretty big place. If it's just us, seems like an awful waste of space. ”",
          "author":"― Carl Sagan"
        },
        {
          "id":"5",
          "quote":"“ The Universe is under no obligation to make sense to you. ”",
          "author":"― Neil deGrasse Tyson"
        },
        {
          "id":"6",
          "quote":"“ The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together. ”",
          "author":"― Carl Sagan, Cosmos"
        },
        {
          "id":"7",
          "quote":"“ One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn't exist.....Without imperfection, neither you nor I would exist ”",
          "author":"― Stephen Hawking"
        },
        {
          "id":"8",
          "quote":"“ There’s as many atoms in a single molecule of your DNA as there are stars in the typical galaxy. We are, each of us, a little universe. ”",
          "author":"― Neil deGrasse Tyson"
        },
        {
          "id":"9",
          "quote":"“ You and I are all as much continuous with the physical universe as a wave is continuous with the ocean. ”",
          "author":"― Alan Watts"
        },
      ],
      data:[],
  }
  }

componentDidMount(){
  

  const number = Math.floor(Math.random() * 10);
  switch (number){
    case 0:
      this.setState({
        quote:this.state.quotes[0].quote,
        author:this.state.quotes[0].author
      })
      break;
    case 1:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
    break;
    case 2:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
    break;
    case 3:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
    break;
    case 4:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
    break;
    case 5:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
    case 6:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
       break;
    case 7:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
      break;
    case 8:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
      break;
    case 9:
      this.setState({
        quote:this.state.quotes[number].quote,
        author:this.state.quotes[number].author
      })
      break;
  }
}


render(){

  const changeSearch=(e)=>{
    this.setState({searchInput:e.target.value});
  }

  const submitSearch=(e)=>{
      this.setState({
        buttonPressed:true,
        loading:true,
      });
      e.preventDefault();
      const query="https://images-api.nasa.gov/search?q="+this.state.searchInput+"";
      axios.get(query).then((res)=>{
        this.setState({
          data:[...res.data.collection.items],
          loading:false,
        });
        console.log(this.state.data);
      })
  }

  const styledSearchbarHero ={
    width:"100%",
  }

  const styledSearchInput = {
    width:'500px',
    textAlign:'center',
    height:"34px",
    marginTop:'1px',
  } 

  const styledSubmitButton ={
    letterSpacing:'0.1rem',
    height:"34.5px",
    backgroundColor:"transparent",
    border:"1px solid gray"
  }
  
  const styledQuote={
    letterSpacing:'0.15rem',
    fontStyle:'normal',
    fontSize:'1.4em',
    fontStyle:'italic',
    margin:"0rem 20px",
    paddingTop:"2rem",
  }  

  const styledAuthor={
    letterSpacing:'0.1rem',
    fontStyle:'normal',
    fontSize:'1.2em',
    fontStyle:'italic',
    margin:"2rem 20px",
  }
 
  const searchBarMain ={
    paddingTop:"2rem",
  }

  const body ={
    paddingTop:"6rem",
  }

  if(this.state.buttonPressed && this.state.loading){
      return( 
        <div className="body" style={body}>
              <div style={styledSearchbarHero} className="Quotes">
                <p style={styledQuote}>{this.state.quote}</p>
                <p style={styledAuthor}>{this.state.author}</p>
                <SearchInput search={changeSearch} submit={submitSearch} searchBarStyle={searchBarMain} submitStyle={styledSubmitButton}
                 searchInputStyle={styledSearchInput} />
              </div>
              <div>
                <img src={Loading} className="hl"/>
              </div>
        </div>)
  } 

  else{
    return (
    <div class="body" style={body}>
          <div style={styledSearchbarHero} className="Quotes">
            <p style={styledQuote}>{this.state.quote}</p>
            <p style={styledAuthor}>{this.state.author}</p>
            <SearchInput search={changeSearch} submit={submitSearch} searchBarStyle={searchBarMain} submitStyle={styledSubmitButton}
            searchInputStyle={styledSearchInput} />
          </div>
          <Results results={this.state.data}/>
    </div>
      );
    }
  }
}
export default SearchBar;
