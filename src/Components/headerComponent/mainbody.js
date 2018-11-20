import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link }
  from 'react-router-dom';
import Modal from 'react-modal';
import Glyphicon from 'glyphicons'
import '../../App.css';
import axios from 'axios';
import logo from '../../images/icon.png';
import profilepic from '../../images/defaultpic.png';
import Background from '../../images/bgpic.png';
import videodisplay from '../Courses/videoDisplay'

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '20%',
    width                 : '50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var sectionStyle = {
  backgroundImage: "url(" +  Background  + ")"
};

class homepage extends Component {
  constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhoneno = this.onChangePhoneno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            name: '',
            phoneno: '',
            email:'',
            modalIsOpen: false,
            isMainPage: true,
            isDashBoard: false
        }
      }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePhoneno(e) {
        this.setState({
            phoneno: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const userdetail = {
            name: this.state.name,
            email: this.state.email,
            phoneno: this.state.phoneno
        }
        console.log(`name is ${this.state.name} and port is ${this.state.phoneno}`);

        axios.post('http://localhost:4000/enroll/add', userdetail)
        .then(res => console.log(res.data));
        this.setState({
          name: '',
          phoneno: '',
          email:'',
        });
        this.setState({
          isDashBoard : true,
          isMainPage : false
        });
        //console.log(this.isDashBoard);
    }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

       const mainPage = (<div>
          <header className="">
            <nav className="headerstyle navbar navbar-default" >
              <div className="container">
                <p className="navbar-brand header-style"  >
                    <img src={logo} />
                </p>
                <ul className="nav navbar-nav navbar-right">
                  <li ><a href="" ><strong> Home</strong></a></li>
                  <li ><a href="" ><strong> Courses</strong></a></li>
                  <li ><a href="" ><strong> About Us</strong></a></li>
                  <li ><a href="" ><strong> Contact Us</strong></a></li>
                </ul>
                </div>
          </nav>
        </header>
        <div className="container jumbotron text-center mainbodyhead" >
            <h1>  Introduction to Machine Learning</h1>
            <br/>
            <br/>
            <h3>Free certification course of Machine Learning</h3>
            Created By: Ritesh Singh
            <br/><br/>
            <b>
              Course Duration : 7 Day
            </b>
            <h1 >Free</h1>
            <h4 className="starcolor">
              <span className="glyphicon glyphicon-star" >ssf</span>
              <span className="glyphicon glyphicon-star" ></span>
              <span className="glyphicon glyphicon-star" ></span>
              <span className="glyphicon glyphicon-star" ></span>
              <span className="glyphicon glyphicon-star" ></span>
            </h4>
            <h3>682 Ratings | 1786 Enrollments</h3>
            <div>
             <a class="btn btn-danger btn-style" onClick={this.openModal}>Enroll</a>
            </div>
            <Modal  isOpen={this.state.modalIsOpen}  onRequestClose={this.closeModal} style={customStyles}  >
                  <form onSubmit={this.onSubmit} className="form-style form-horizontal">
                      <div className="form-group">
                        <h3 className="model-title-style"  ><strong>Enter Details</strong></h3>
                        <input type="text" required className="form-control" value={this.state.name}  onChange={this.onChangeName} placeholder="Name"  />
                      </div>
                      <div className="form-group">
                        <input type="text"  required  value={this.state.phoneno} onChange={this.onChangePhoneno}  className="form-control"
                         placeholder="Mobile Number" />
                      </div>
                      <div className="form-group">
                        <input type="email" required  value={this.state.email}  onChange={this.onChangeEmail} className="form-control" placeholder="Email Id"  />
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-login-style"  value="Next" />
                      </div>
                  </form>
                  <div className="close-btn-style">
                    <a type="button" className="btn btn-danger" style={{borderRadius:20,marginLeft:500}} onClick={this.closeModal} >
                     CLose
                    </a>
                  </div>
            </Modal>
          </div>
        </div>);

        const dashboardPage = ( <div>
          <div className="navsidebar" style={{backgroundColor:"#F5F5F5"}}>
            <div className="dashboardheader">
              <img src={profilepic} class="profilephoto" />
              <br/>
              <div className="dropdown" style={{marginTop: 70}} >
                <strong className="dashboard-head-link" style={{textDecorationLine: "none",marginLeft: 10}}>
                    Student
                </strong>
              </div>
            </div>
          </div>

          <div className="mainbody">
              <div class="dashboardbody" style={{backgroundColor:"#fff"}}>
                  <h2>Intro To Machine Learning
                      <div class="dropdown dbtn" >
                          <a class=" dropdown-toggle mainheadstyle" style={{textDecorationLine:"none",backgroundColor:"#fff"}}  type="button" data-toggle="dropdown">Videos
                              <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu">
                              <li>
                                <Link to={'/videodisplay/0'} className="nav-link" style={{textDecorationLine:"none"}}>Lectures
                                      <strong style={{backgroundColor:"green",padding: 4,color: "white"}}>Free</strong>
                                </Link>
                              </li>
                          </ul>
                      </div>
                  </h2>
              </div>

              <div className="displaybg" style={ sectionStyle } >
                  <div class="container" style={{padding: 100}}>
                      <h2 class="text-center">This is a Demo App.</h2>
                  </div>
              </div>
          </div>
        <Switch>
          <Route path='/videodisplay/:id' component={ videodisplay } />
        </Switch>
      </div>);

     return (
       <div>
       { this.state.isMainPage ? mainPage : null }
       { this.state.isDashBoard ? dashboardPage : null }
       </div>
     );
  }
}

export default homepage;
