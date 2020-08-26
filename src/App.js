import React from 'react';
import './App.css';
import courseInformation from '../src/fakeData/courseInformation.js'
import Courses from './Components/Courses/Courses';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {

  const [cart, setCart] = useState([])

  const handleAddCourse = (course) => {
    const newCart = [...cart, course]
    setCart(newCart);
  }

  return (
    <div className="main-content">

      <div className = 'courses'>
        {
          courseInformation.map( course => <Courses handleAddClick = {handleAddCourse} course = {course}></Courses>)
        }
      </div>

      <div className = 'cart'>
        <h3>Course enrolled: {cart.length}</h3>
        <Cart cart = {cart}></Cart>
      </div>

    </div>
  );
}

export default App;
