import React, { Component, Fragment } from 'react';

export default class app extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      outputValue:'',
      Consonant:'' ,
      a:'',
      u:'',
      i:'',
      e:'',
      o:''
    }
  }

   render(){
   
   

    return(
      <Fragment>
      <div>Word </div>
      <input type="text" 
             value = {this.state.inputValue}
             onChange = {this.handleInputChange.bind(this)}/>
             <button onClick = {this.handleAdd.bind(this)}>Analysiz</button>
            
      <h1>Word:
        {
       
         this.state.outputValue
            
        }
       </h1>
       
       <h1>
         No of Consonants:
         {
       
        this.state.Consonant
  
         }
       </h1>
       <h1>
         No of Vowels:
         
        <p>a:{this.state.a}</p> 
        <p>u:{this.state.u}</p> 
        <p>o:{this.state.o}</p>
        <p>i:{this.state.i}</p>
        <p>e:{this.state.e}</p>
         
          
         
       </h1>
       <h1>
         No of Characters:
         {
           this.state.Characters
         }
       </h1>
       
      </Fragment>
      )  
      
}

handleInputChange(e){
  this.setState({
    inputValue: e.target.value
})
} 
 handleAdd(){
  const con = this.state.inputValue;
  const Characters1 = con.length;
  for(var i1=0; i1<this.state.inputValue.length; i1++){
    var char = this.state.inputValue.charAt(i1);
    if(char.match(/[aeiou]/)){
        switch (char) {
            case 'a':
                this.state.a++;
                break;
            case 'e':
              this.state.e++;
                break;
            case 'i':
              this.state.i++;
                break;
            case 'o':
              this.state.o++;
                break;
            case 'u':
              this.state.u++;
                break;
        }
    } else if(char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
        this.state.Consonant++;
    }
}
  this.setState({
     outputValue: this.state.inputValue,
     inputValue:'',
     Characters: Characters1,
     a :this.state.a++,
     Consonant: this.state.Consonant++
  })

  
}

}