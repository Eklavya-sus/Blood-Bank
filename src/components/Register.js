import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'donor', 
      name: '',
      email: '',
      phoneNumber: '',
      donorName: '', 
      hospitalName: '', 
      bloodGroup: '',
      location: '', 
      password: '', 
      confirmPassword: '', 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
    
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
       <div class="container max-w-screen-lg mx-auto">
       <div onSubmit={this.handleSubmit}>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Registration</p>
            <p>Please fill out all the fields.</p>
          </div>
          

          <div class="lg:col-span-2">
          <div className="mb-4">
             <label>Choose User Type:</label>
             <div className="flex items-center space-x-4">
              <label>
               <input
                  type="radio"
                  name="userType"
                  value="donor"
                  checked={this.state.userType === 'donor'}
                  onChange={() => this.setState({ userType: 'donor' })}
                />
                <span className="ml-2 font-medium text-gray-600">Donor</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="hospital"
                  checked={this.state.userType === 'hospital'}
                  onChange={() => this.setState({ userType: 'hospital' })}
                />
                <span className="ml-2 text-gray-600">Hospital</span>
              </label>
            </div>
          </div>
  
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-2">
                <label>Password:</label>
                <input  type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>

              <div class="md:col-span-2">
                <label for="password">Confirm Password:</label>
                <input  type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange} class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label>Phone Number:</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input  type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange} class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
            
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">Address</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>
              {this.state.userType === 'donor' && (

              <div class="md:col-span-1">
                <label>BloodGroup</label>
                <input  type="text"
                name="bloodGroup"
                value={this.state.bloodGroup}
                onChange={this.handleInputChange} class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
              </div>
               )}
             

              <div class="md:col-span-5">
               <div class="inline-flex items-center">
              <p className="text-center mt-4 text-gray-600">
                 Already a user? 
               <Link to ="/login" className='text-blue-500'>
               <button>login</button>
               </Link>
              </p>
              </div>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>
              

            </div>
           
          </div>
         
        </div>
      </div>
    </div>

    
  </div>
</div>
    );
  }
}

export default Register;
