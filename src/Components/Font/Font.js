import React from "react";
import FontPicker from "font-picker-react";


export default class Font extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: "",
    };
  }
 
  render() {
    return (
        <FontPicker
          apiKey="AIzaSyCZwT9nkGdLqU1uuAwJvStcwtOp_x9s_60"
          activeFontFamily={this.state.activeFontFamily}
          onChange={nextFont =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
    );
  }
}


  

