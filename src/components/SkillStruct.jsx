import React from 'react';

function SkillStruct(props) {
    return (
        <div>
            <div className="pbar mt-3 h6">{props.skill}</div>
            <div className="progress pbar" style={{backgroundColor:"LightGray"}}>
                <div className="progress-bar" style={{width:props.progress+"%", backgroundColor:'#459825'}} role='progressbar' aria-valuenow={props.progress} aria-valuemax='100' aria-valuemin='0'>{props.progress}%</div>
            </div>
        </div>
    )
}

export default SkillStruct;