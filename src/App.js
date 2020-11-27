import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({loading: true});

    const res = await Axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP__GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:res.data, loading: false});
  }

  //Searching Github Users
  searchUsers = async text => {
    this.setState({ loading:true});
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP__GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users:res.data.items, loading: false});
  }

  //Clear users from state
  clearUsers = () => this.setState({users:[], loading: false});

  render(){
    const {loading, users} = this.state;
   
    return (
      <Fragment>
        <Navbar title="Github finder"/>
        <div className='container'>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true:false}/>
          <Users loading={loading} users={users}/>
        </div>
      </Fragment>
    );
 }  
}

export default App;