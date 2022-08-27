import React, { useState, useEffect } from "react";

export default function Sum() {
 
  const [numbers, setnumbers] = useState([]);
  const [expectedSum, setexpectedSum] = useState(12)
  
  const [results, setresults] = useState<number[][]>([])

  const sum = (numbers:number[], expectedSum:number) => {

    let pairs=[]
    numbers.sort(function(a, b){return a-b});
    let left = 0;
    let rigth = numbers.length - 1;

    while (left < rigth) {
     
      if (numbers[left] + numbers[rigth] > expectedSum) {
        rigth=rigth-1;
      } else if (numbers[left] + numbers[rigth] < expectedSum) {
        left =left+1;
      } else if(numbers[left] + numbers[rigth] === expectedSum){
        
          pairs.push([numbers[left], numbers[rigth]]);
          left =left+1;
      }
    }

    setresults(pairs)
    console.log(pairs)
    
  };

  const handleOnChange=(e:any)=>{

    if(e.target.value){
          setexpectedSum(parseInt(e.target.value))
    }
    
  }

  useEffect(()=>{
    
    sum(numbers, expectedSum)
 

  },[expectedSum,numbers])

  const uploadFile=(e:any)=> {
    e.preventDefault()

    console.log('load')
    const reader = new FileReader()
    reader.onload = async (e) => { 
      if(e.target){
        const text = e.target.result;
       setnumbers(JSON.parse(text as string))
       
      }
  
      
    };
    reader.readAsText(e.target.files[0])
}
  
  

  return (
    <div className="container">

      <h1>Sum pairs to find result {expectedSum || 0}</h1>

      <section>
        <div>
          <span>Expected Sum: </span>
          <input type="number" name="expectedSum" defaultValue={expectedSum} onChange={handleOnChange}/>
        </div>
        <div>
          <span>Numbers: </span>
          <input type="file"
                  name="myFile"
                  onChange={uploadFile} 
                  onClick={(e)=>{e.currentTarget.value=""; setnumbers([])}}
                  />
        </div>
      </section>
      <section>
        <h2>Numbers:{JSON.stringify(numbers)}</h2>
      </section>
      <section>
        <h2>Results:</h2>
        <div>
          {results.length ?
          <ul>
            {results.map((r,index)=>
                <li key={index}>{r[0]}, {r[1]}</li>
            )}
          
          </ul>:
           <p>Pairs not found</p>
          }

        </div>
      </section>
    </div>
  )
}


