import React,{useState} from 'react';
import "./App.css";
import ToDoLists from './Components/ToDo';

const App=()=>{
  const [inputList, setinputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent=(event)=>{
    setinputList(event.target.value)
    
  }
  const listOfItems=()=>{
   setItems((oldItems)=>{
   return[...oldItems,inputList]
   })
   setinputList("");
  }
  const deleteItems = (id) => {
    console.log("ddddd");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
            return index!==id;
      })
    })
  }
  
  return(
    <>
    <div className='main_div'>
      <div className='center_div'>
    <br/>
    <h1>ToDo List</h1>
    <br/>
          <input type="text" placeholder='Add a Item' onChange={itemEvent} value={inputList}/>
          <button onClick={listOfItems}>+</button>
          <ol>
          {  items.map((itemVal,index)=>{
            return <ToDoLists
             text={itemVal}
             key={index}
             id={index}
              onSelect={deleteItems}
             />;
          })}
          </ol>
      </div>
    </div>
    </>
  )
}
export default App;
// function App() {
//   const [inputList, setinputList] = useState();
//   const [items,setItems]=useState([]);
//   const itemEvent=(event)=>{
//     setinputList(event.target.value);
//   }
//   const listOfItems=()=>{
//     setItems((oldItems)=>{
//        return[...oldItems,inputList]
       
//     });
//     setinputList("");
//   };
//   const deleteItems = () => {
//     console.log("delete");
//   }
  
    
//     setItems((oldItems)=>{
//          return oldItems.filter((arrElem,index)=>{
//             return index !==id;
//          })
//     })
//   };
//   return(
//    <>
//     <div className='main_div'>
//         <div className='center_div'>
//             <br/>
//             <h1>ToDo List</h1>
//             <br/>
//             <input type="text" placeholder='Add a Product' onChange={itemEvent} value={inputList}/>
//           <button onClick={listOfItems}>+</button>

//             <ol>
//               {
//               items.map((itemVal,index) => {

//                 return <ToDoLists key={index} text={itemVal} id={index} onSelect={deleteItems}
//                  />  
//               })
// }
//             </ol>
//         </div>
//     </div>
//    </>
//   )


// export default App;
