import React from 'react';

function NewBeerForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer Name'/>
        <textarea
          type='text'
          id='description'
          placeholder='Beer Description'/>
        <textarea
          type='text'
          id='abv'
          placeholder='Alcohol by volume'/>
        <textarea
          type='text'
          id='price'
          placeholder='Price'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
