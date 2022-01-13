import *  as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';


class Users extends React.Component {


  componentDidMount () {
    if (this.props.users.length === 0) {
      
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setCountUsers(response.data.totalCount)
        });
    }
  }

  // dAjax () {
  //   axios.get("https://social-network.samuraijs.com/api/1.0/users?count=20" + "&page=" + this.props.pageSize)
  //   .then(response => this.props.setUsers(response.data.items));
  // }

  swapPage = (E) => {
    this.props.clickPage(E);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${E}`)
    .then(response => this.props.setUsers(response.data.items));
  }



  render() {

    let pagesCount = this.props.totalUsersCount / this.props.pageSize;

    let pages = [];
    let piece = [];
    let newBut = [] ;

    for (let i=1; i < pagesCount+1; i++){
      pages.push(i);
    }

    if (pages.length > 10) {
      for (let n = 0; n < 10; n++){
          piece = pages.slice(0, 10);
          newBut = [1];
      }
    } else {
      piece = pages;
    }
debugger
    return (
      <div>
        <div>
           {
              piece.map(Elem =>
                <button onClick={() => {this.swapPage(Elem);}}
                 className={(this.props.currentPage === Elem)? classes.selected : ""}>{Elem}</button>
                )
            
            }
            {newBut.map(Elem =>  <button>...</button>)}
          
        </div>
        {
          this.props.users.map(uElement =>
            <div key={uElement.id}>
              <span>
                <div>
                  {/* <img src={uElement.src} /> */}
                </div>
                <div>
                  {uElement.followed ?
                    <button onClick={() => this.props.unFollow(uElement.id)}>Unfollow</button> :
                    <button onClick={() => this.props.onFollow(uElement.id)}>Follow</button>}
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
}

export default Users;