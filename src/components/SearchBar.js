import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    var term = event.target.value;
  }
  onButtonClick(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <form>
          <button onClick={this.onButtonClick}>Search</button>
          <input type="text" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
