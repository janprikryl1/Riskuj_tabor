function Groups(props) {
  return (
   <div className="container" style={{paddingTop:"10px"}}>
       <div className="row d-flex justify-content-center">
               <div className="col-sm-2">
                   <h3 style={{color:"blue"}}>Skupinka 1: {props.points1}</h3>
               </div>
               <div className="col-sm-2">
                   <h3 style={{color:"green"}}>Skupinka 2: {props.points2}</h3>
               </div>
               <div className="col-sm-2">
                   <h3 style={{color:"red"}}>Skupinka 3: {props.points3}</h3>
               </div>
               <div className="col-sm-2">
                   <h3 style={{color:"orange"}}>Skupinka 4: {props.points4}</h3>
               </div>
       </div>
   </div>
  );
}

export default Groups;