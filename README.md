
import React, { Component, Fragment } from 'react';

export default class app extends Component{
  constructor(props){    
    super(props);
    this.state = {                 -------------- define the required properties
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
   
                                    ------------- return the values needed to render the page

    return(
      <Fragment>
      <div>Word </div>
      <input type="text" 
             value = {this.state.inputValue}
             onChange = {this.handleInputChange.bind(this)}/>          --------onChange event to receive the value in the input box render the handleInputChange methed
             <button onClick = {this.handleAdd.bind(this)}>Analysiz</button> --------------add an onClick event to the analysis button and render the handleAdd methed
            
      <h1>Word:
        {
       
         this.state.outputValue            ---render the word in input box value
            
        }
       </h1>
       
       <h1>
         No of Consonants:
         {
       
        this.state.Consonant            ---render the Consonant 
  
         }
       </h1>
       <h1>
         No of Vowels:
         
        <p>a:{this.state.a}</p> 
        <p>u:{this.state.u}</p>            -------render the Vowels 
        <p>o:{this.state.o}</p>
        <p>i:{this.state.i}</p>
        <p>e:{this.state.e}</p>
         
          
         
       </h1>
       <h1>
         No of Characters:
         {
           this.state.Characters              ----------render the  Characters number 
         }
       </h1>
       
      </Fragment>
      )  
      
}

handleInputChange(e){
  this.setState({                                     ----------- handleInputChange  update the inputValue's value  using this.setState
    inputValue: e.target.value 
})
} 
 handleAdd(){
  const con = this.state.inputValue;             
  const Characters1 = con.length;                           --------------get charactor amount.
  for(var i1=0; i1<this.state.inputValue.length; i1++){           --------------iterate over the value in the input box
    var char = this.state.inputValue.charAt(i1);
    if(char.match(/[aeiou]/)){                                                -------------switch statement to analyze the value of the input
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
  this.setState({                                                    ---------update all all this.state's value
     outputValue: this.state.inputValue,
     inputValue:'',
     Characters: Characters1,
     a :this.state.a++,
     Consonant: this.state.Consonant++
  })

  
}

}
