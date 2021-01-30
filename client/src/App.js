import React,{useState} from 'react'
import './App.css';

function App() {

  const [fiels,setFiels] = useState();

  const inputChange=(e)=>{
    setFiels(e.target.files[0])
  }

  const onSubmit=(e)=>{
    e.preventDefault();

    const data = new FormData();

    data.append("image",fiels);

    fetch("http://localhost:8000/single",{
      method:"POST",
      body:data,
    }).then((result)=>{
      console.log('file sent successfully');
    }).catch((err) => {
        console.log(err);
    })

  }
  return (
    <div className="App">
       <form onSubmit={onSubmit} >
      <input onChange={inputChange} type="file" name="image" />
      <button type="submit">Submit To Server</button>
    </form>
    </div>
  );
}

export default App;
