import React from 'react'
import { Card } from "./card";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Input = styled('input')({
  display: 'none',
});

export default class ImageFile extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        id : "someUniqueId", // I would use this.props.id for a real world implementation
        imageURI : null
      }
    }
    
    buildImgTag(){
      let imgTag = null;
      if (this.state.imageURI !== null)
      imgTag = (this.state.imageURI);
/*         imgTag = (<div className="row">
                    <div className="small-9 small-centered columns">
                      <img className="thumbnail" src={this.state.imageURI}></img>
                    </div>
                  </div>); */
      return imgTag;
    }
    
    readURI(e){
      if(e.target.files && e.target.files[0]){
        let reader = new FileReader();
        reader.onload = function(ev){
          this.setState({imageURI:ev.target.result});
        }.bind(this);
        reader.readAsDataURL(e.target.files[0]);
      }
    }
    
    handleChange(e){
      this.readURI(e); // maybe call this with webworker or async library?
      if (this.props.onChange !== undefined)
        this.props.onChange(e); // propagate to parent component
    }
  
    render() {
      const imgTag = this.buildImgTag();
  
      return <>
        <Grid item xs={12} md={8}>
          <label htmlFor={this.state.id} className="button">
            <Input accept="image/*" id={this.state.id} multiple type="file" onChange={this.handleChange.bind(this)} className="show-for-sr"/>
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
              <Button variant="contained" component="span">
                Upload
              </Button>
            </Box>
          </label>
        </Grid>
        <Grid item xs={12} md={4}>
          <div id="export">
            <Card src={imgTag}/>
          </div>
        </Grid>
    </>;
    }
  }