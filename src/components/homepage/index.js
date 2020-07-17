import React, { Component } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'DEMO-API-KEY';

class HomePage extends Component {

  async getcategorys() {
      const res = await axios('/categories');
      return res.data;
  }
  async getCatsImagesBycategory(category_id, amount) {
      const res = await axios('/images/search?category_ids='+category_id + "&limit="+ amount);
      
      console.table(res.data)
      return res.data;
  }

  async loadcategoryImages() {
    console.log('Load category Images:', this.state.selected_category)

    let category_images = await this.getCatsImagesBycategory(this.state.selected_category,10)

    this.setState({ images: category_images });
  }

  constructor(...args) {

      super(...args);
      this.state = {
        images: [],
        categorys: [], 
        selected_category: 0
      };

    this.oncategorySelectChange = this.oncategorySelectChange.bind(this);
  }
  async oncategorySelectChange(e) {
    console.log("category Selected. ID:",e.target.value)
    await this.setState({selected_category:e.target.value});
    await this.loadcategoryImages();
  }
  componentDidMount() {
      if (this.state.categorys.length===0) {
          (async () => {
              try {
                  this.setState({categorys: await this.getcategorys()});
              } catch (e) {
                  //...handle the error...
                  console.error(e)
              }
          })();
      }
  }
  render() {
      return (
        <div>
<h1>Search Cat Images</h1>
     Select Cat Category: &nbsp;&nbsp; <select  className= "textCaptial" value={this.state.selected_category} 
              onChange={this.oncategorySelectChange}>
              <option>--select--</option>
        {this.state.categorys.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select><br></br><br></br>
     
            
         
      <div className="gallery">
     {this.state.images.map((image) =><img width="300" height="200" alt="" src={image.url}></img>)}
     </div>
   
     </div>
      );
  }
}

export default HomePage;