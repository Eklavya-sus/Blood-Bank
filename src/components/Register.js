import React, { Component } from 'react';

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
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Registration</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Choose User Type:</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="donor"
                  checked={this.state.userType === 'donor'}
                  onChange={() => this.setState({ userType: 'donor' })}
                />
                <span className="ml-2">Donor</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="hospital"
                  checked={this.state.userType === 'hospital'}
                  onChange={() => this.setState({ userType: 'hospital' })}
                />
                <span className="ml-2">Hospital</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          {this.state.userType === 'donor' && (
            <div className="mb-4">
              <label className="block text-gray-600">Donor Name:</label>
              <input
                type="text"
                name="donorName"
                value={this.state.donorName}
                onChange={this.handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
          )}
          {this.state.userType === 'hospital' && (
            <div className="mb-4">
              <label className="block text-gray-600">Hospital Name:</label>
              <input
                type="text"
                name="hospitalName"
                value={this.state.hospitalName}
                onChange={this.handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          {this.state.userType === 'donor' && (
            <div className="mb-4">
              <label className="block text-gray-600">Blood Group:</label>
              <input
                type="text"
                name="bloodGroup"
                value={this.state.bloodGroup}
                onChange={this.handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
          )}
          {this.state.userType === 'hospital' && (
            <div className="mb-4">
              <label className="block text-gray-600">Location:</label>
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
       
      <p className="text-center mt-4 text-gray-600">
        Already a user? <a href="/login" className="text-blue-500">Login</a>
      </p>
   
      </div>
    );
  }
}

export default Register;
