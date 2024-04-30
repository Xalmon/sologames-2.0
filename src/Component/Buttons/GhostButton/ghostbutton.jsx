import React from 'react';
import style from "./index.module.css"
const GhostButton = ({text}) => {

    return(
      <div>
          <button className={style.btn}>
              {text}
          </button>
      </div>
    );
}
export default GhostButton;