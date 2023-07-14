import React from 'react'

export default function Contact(props) {
  return (
    <>
      <div className="container">
            <form>
        <div className="form-group my-4">
            <label htmlFor="exampleInputEmail1" className= {`text-${props.mode==='dark'? 'light' : 'dark'}`} >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1" className= {`text-${props.mode==='dark'? 'light' : 'dark'}` }>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <textarea className="form-control my-4" id="" cols="10" rows="5" placeholder='Enter you message here!'></textarea>
        </div>
      

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </>
  )
}
