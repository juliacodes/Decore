import React from "react";
import FontPicker from "font-picker-react";
 
const Font = () => (
   <FontPicker
          apiKey="AIzaSyCZwT9nkGdLqU1uuAwJvStcwtOp_x9s_60"
          activeFontFamily={props.activeFontFamily}
          onChange={nextFont => this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />

  
);
export default Font;
