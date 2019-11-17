import React, {Component} from 'react'
import Faker from 'faker'
import {Table, Button} from "react-bootstrap/";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class Liste extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    generateUser = () => {
        for (let i = 0; i < 20; i++) {
            const user = {
                name: Faker
                    .internet
                    .userName(),
                email: Faker
                    .internet
                    .email(),
                avatar: Faker
                    .internet
                    .avatar()
            }
            this.setState(prevState => ({
                users: [
                    ...prevState.users,
                    user
                ]
            }))
        }
    }

    render() {
        return (
            <div>
                <div style={{marginBottom:'10px'}}>
                <Button onClick={this.generateUser.bind(this)} variant="primary">GENERATE</Button>
                  </div> 
                {
                    this.state.users.map((user,i) =>
                    <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th># {i+1}</th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><img className="img-responsive" src={user.avatar} alt={user.name}/></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>

                                </tbody>
                                
                            </Table>
                        )
                }
                </div>
        )
    }
}

export default Liste;