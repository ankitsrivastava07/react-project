import React,{Component} from 'react'

class Welcome extends Component{

    render(){    
   return(
       <div>
      <h1>{this.state.count}</h1>
      <button onClick={()=> this.increment()}>Subscribe</button>
      </div>
   )
 }
}
export default Welcome