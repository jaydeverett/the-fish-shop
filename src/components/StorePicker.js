import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  gotToStore(e) {
    //to make links visit store
    e.preventDefault();
    console.log('You Changed the Url')
    //first grab text from the box
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
    //then transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={(e) => this.gotToStore(e)}>
        { /* This is a comment in JSX */}
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit"> Visit Store </button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}


export default StorePicker;
