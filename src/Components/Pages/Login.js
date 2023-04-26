import React from 'react'

export default function index() {
  return (
    <>
    <h1 className="display-1 text-center m-4">Login</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputusername"
              aria-describedby="username"
            />
           
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}