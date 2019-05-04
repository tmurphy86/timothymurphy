import React from 'react';
import apiPhotos from '.././api/Photos';

class Photos React.Component {
  state = {images: [] };

  onSearchSubmit = async (term) => {
    URL = 'https://api.unsplash.com/search/photos'
    const response = await Photos.get('/search/photos',{
      params:{query: term},
      headers:{
      Authorization: 'Client-ID 4a0a02f3928d401f46e9ab878bee36c0016e2f308e6bf7531962166b6f28191c'
      }
    });
      this.setState({images: response.data.results});
    }

  render(){
    return(
      <div/>

    );
  };
}
export default Photos;
