import React from 'react'
import { Card } from "./card";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Templates } from "./templateSelector";
import { Export } from './export';


const Input = styled('input')({
  display: 'none',
});

export function Wrapper() {
    
    return (
      <>
        <Grid item xs={12} md={6}>
          <div 
            className="mt2"
          >
            <label htmlFor={this.state.id} className="button">
              Image asset <br></br>
              <p>
              Occupy twee irony whatever migas subway tile vexillologist fingerstache mustache</p>
              <Input accept="image/*" id={this.state.id} multiple type="file" onChange={this.handleChange.bind(this)} className="show-for-sr"/>
              <Box component="div" sx={{ p: 2, border: '1px dashed grey' }}>
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </Box>
            </label>
          </div>
          <div
            className="mt2"
          >
            <label
            >Templates <br></br>
              
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Export/>
          </Box>
        </Grid>
      </>
      
    );
  }