import React, {Component} from 'react';
import axios from 'axios';
var myKey = "AIzaSyBWM2E6zwTUf5Rc4gYfvnJmUGelCnVo3xg";
var maxResults = 3;


export default class SearchBar extends Component {
 state = {
  q:"",
  u:"",
  items: []
 }

 change = (e) => {
  //  console.log( e.target.value)
   var s = e.target.value;
  //  s = s.replace("+","%2B")
  //  s = s.replace("+","%2B")
   this.setState({q: s})
   console.log(this.state.q)
 }

 Clean = () => {
   this.setState({q: ""})
 }

//  search = () => {
   
//    var x = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${this.state.q}&type=video&key=${myKey}`
//    console.log(`${this.state.q}`)
//    axios.get(x)

//       .then(response => {

//         console.log(response.data.items);

//         this.setState({

//           u: "https://www.youtube.com/embed/" + response.data.items[0].id.videoId,
//           q:"",
//           items: response.data.items

//         });
//         console.log(this.state.u);

//       })

//       .catch(error => {

//         console.log(error);

//       });
//  }
 
  render(){
  return (
    <>
    <dev className="searchBar"><input type="text"  className="form-control" value={this.state.q} placeholder="Search" id="Search" onChange={this.change}/>   <button type="submit" className="btn btn-secondary" style={{verticalAlign: "baseline"}} onClick={this.props.search.bind(this,this.state.q, this.Clean)} ><i className="fa fa-search"></i></button>
     </dev>

    </>
  );
}
}
