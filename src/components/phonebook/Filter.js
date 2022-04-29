import React from 'react'; 

 const Filter =({value, onChange}) =>(
   <label>
     Поиск контакта
     <input type="text" value={value} onChange={onChange}/>
   </label>
 )

 export default Filter;