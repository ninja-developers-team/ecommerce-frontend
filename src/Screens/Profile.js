import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'


export class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
                {isAuthenticated &&
                    <div className='row'>
                        <div class="col container d-flex justify-content-lift align-items-center">
                            <div class="card">
                                <div class="upper"> <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" alt='...' /> </div>
                                <div class="user text-center">
                                    <div class="profile"> <img src={user.picture} alt={user.name} className="rounded-circle" width="100" /> </div>
                                </div>
                                <div class="mt-5 text-center">
                                    <h4 class="mb-0">{user.name}</h4>
                                    <div className="row ">
                                        <b class="col"> Email</b>  <span class="col text-muted d-block mb-2">{user.email}</span>
                                    </div>
                                    <div className="row">
                                        <b class="col"> username</b>  <span class="col text-muted d-block mb-2">@{user.nickname}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="card col">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h2 class="mb-0"> {user.given_name} Favorite List </h2>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0">item 1</h6>
                                    <span class="text-secondary">price</span>
                                </li>
                            </ul>
                        </div>
                        {/* must edeted after the data base data */}
                        <div class="card col">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h2 class="mb-0"> {user.given_name} Card List </h2>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0">item 1</h6>
                                    <span class="text-secondary">price 00.0</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"> Total</h6>
                                    <span class="text-secondary">00.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default withAuth0(Profile)
