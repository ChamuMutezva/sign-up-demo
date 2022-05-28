import React from 'react'
//import { TextField } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
//import { textAlign } from '@mui/system';
//import { FormControl } from '@mui/material';


function Inputs(props) {
  
    return (

        <div className={`${props.divClassName} form-input-container`}>
            <FormLabel className='label' htmlFor={props.labelfor}>{props.labeltext}</FormLabel>
            <input type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                onChange={props.onChange}
                value={props.email}
                min={props.min}
                max={props.max}
                required
                onBlur={props.onBlur}
                className={`form-input border-radius ${props.name}`}
                aria-describedby={props.ariaDescribedBy}
            />

            {props.errors && <FormLabel id={props.errorId} 
                aria-live="polite"
                className="error__alert">{props.errors}</FormLabel>}

        </div>

    )
}

export default Inputs