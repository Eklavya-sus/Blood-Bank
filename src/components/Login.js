import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">User Login</h1>
        <form onSubmit={this.handleSubmit}>
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
            <label className="block text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
