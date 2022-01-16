import React from 'react';
import classes from './Users.module.css';
import userphoto from '../Users/Preloader/userph.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  let pagesCount = props.totC / props.pZ;
  let pages = [];
  let piece = [];
  let newBut = [];
  let flagBut = [];
  if (props.rB) flagBut = [1];

  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  if (props.totC > props.eP) {
    piece = pages.slice(props.sP, props.eP);
    newBut = [1];
  }
  else {
    piece = pages.slice(props.sP, props.totC);;
  }

  return (
    <div>
      <div>
        {flagBut.map(Elem =>
          <button onClick={() => props.swapS(false)}>...</button>)
        }

        {
          piece.map(Elem =>
            <button onClick={() => { props.swP(Elem); }}
              className={(props.curP === Elem) ? classes.selected : ""}>{Elem}</button>
          )

        }
        {newBut.map(Elem => <button onClick={() => props.swapS(true)}>...</button>)}

      </div>
      {
        props.usr.map(uElement =>
          <div key={uElement.id}>
            <span>
              <div>
                <NavLink to={"/frofile/" + uElement.id} className={navData => navData.isActive ? classes.active : classes.dialogs_items}>
                  <img width="100px" height="100px" src={uElement.photos.small === null ? userphoto : uElement.photos.small} />
                </NavLink>
              </div>
              <div>
                {uElement.followed ?
                  <button onClick={() => props.unF(uElement.id)}>Unfollow</button> :
                  <button onClick={() => props.onF(uElement.id)}>Follow</button>}
              </div>
            </span>

            <span>
              <div>{uElement.name}</div>
            </span>
            <span>
              {/* <div>{uElement.location.city}, {uElement.location.country} , {uElement.status} </div> */}
              <div>{uElement.status} </div>
            </span>
          </div>
        )
      }
    </div >
  );


}


export default Users;