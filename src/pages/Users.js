import React from 'react';

const Users = () => {
    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }
    return (
       <>
           <div className="bar d-flex  align-items-center" onClick={openSideBar}>
               <img src="/images/burger.svg" alt="bar" className="burger"/>
               <h2 className="Poppins" >Users</h2>
           </div>

           <div className="main">
               <div className="conatiner">
                   <div className="form-actions d-flex justify-content-around">
                       <p className="limit Poppins">Limit:</p>

                       <select className="ui dropdown">
                           <option value="10">10</option>
                           <option value="9">9</option>
                           <option value="8">8</option>
                       </select>

                       <div className="modal-inner d-none" id="modal">
                           <form >
                               <div className="d-flex align-items-center">
                                   <label htmlFor="#name">Name:</label>
                                   <input type="text" id="name" className="form-control" placeholder="type level name"

                                   />
                               </div>
                               <div className="d-flex align-items-center">
                                   <label htmlFor="#name">Mark for sec:</label>
                                   <input type="number" id="marksec" className="form-control" placeholder="type mark for second"
                                   />
                               </div>
                               <div className="d-flex align-items-center">
                                   <label htmlFor="#name">Mark:</label>
                                   <input type="number" id="mark" className="form-control" placeholder="type mark"
                                   />
                               </div>
                               <div className="d-flex align-items-center">
                                   <label htmlFor="#name">Mark min and max:</label>
                                   <input type="number" id="markmin" className="form-control" placeholder="type mark min"
                                   />
                                   --
                                   <input type="number" id="markmax" className="form-control" placeholder="type mark max"
                                   />
                               </div>
                               <button type="submit" className="btn" id="btn-create" >Create</button>
                               <button type="button" className="btn" id="btn-close">Close</button>
                               <button type="button" className="btn" id="btn-create" >Clean</button>
                           </form>
                       </div>
                   </div>

                   <div className="col-9 level" >

                       <table className="table table-borderless">
                           <thead>
                           <tr className="table-header">
                               <th>id</th>
                               <th>Name</th>
                               <th>Mark for 60 sec</th>
                               <th>Mark</th>
                               <th>Acces Mark</th>
                               <th>Actions</th>
                           </tr>
                           </thead>
                           <tbody>

                           {/*{data.map((user,index) => {*/}
                           {/*    return(*/}
                           {/*        <tr className="levels" key={user.name}>*/}
                           {/*            <td className="id">{index + 1}</td>*/}
                           {/*            <td className="levels-name">*/}
                           {/*                {user.name}*/}
                           {/*            </td>*/}
                           {/*            <td className="levels-mark-sec d-flex">*/}
                           {/*                {user.markForSec}*/}
                           {/*            </td>*/}
                           {/*            <td className="levels-mark">*/}
                           {/*                {user.mark}*/}
                           {/*            </td>*/}
                           {/*            <td className="levels-access">*/}
                           {/*                {user.markMin}--{user.markMax}*/}
                           {/*            </td>*/}
                           {/*            <td className="levels-actions d-flex justify-content-around">*/}
                           {/*                <button type="button" className="btn"><img src="/images/edit.svg" alt="edit"/></button>*/}
                           {/*                <button type="button" className="btn" ><img src="/images/delete.svg" alt="delete"  /></button>*/}
                           {/*            </td>*/}
                           {/*        </tr>*/}
                           {/*    )*/}
                           {/*})}*/}

                           </tbody>

                       </table>
                       <div className=" d-flex align-items-center justify-content-around">
                           <p>1 of 1</p>
                           <button type="button" className="btn"> &#8701; </button>
                           <button type="button" className="btn"> &#8702; </button>
                       </div>
                   </div>
               </div>
           </div>
       </>

);
};

export default Users;