
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosClose, IoIosArrowUp } from "react-icons/io";
import {BiCheckbox, BiCheckboxChecked} from "react-icons/bi";
import "./index.css";

export default function Dropdown(props) {

const [showDropDown, setShowDropDown] = useState(false);
const [selectAll, setSelectAll] = useState(false);
const [selectedItem, setSelectedItem] = useState(props.multi == true ? []: null);

useEffect(() => {
    
}, [showDropDown, selectedItem]);


const selections = props.selections;

function handleClick(){
    if(showDropDown == true){
        setShowDropDown(false);
    }
    if(showDropDown == false){
        setShowDropDown(true);
    }
}

function onItemClick (item){
    if(!props.multi){
        setSelectedItem(item.label);
    }
    else{
        if(selectedItem.some(function(o){return o.value === item.value;})){
            console.log("already in")
        }
        else{
        if(item.value == "Select All"){
            if(selectAll == false){
            var filteredArray = selections.filter(function(e) { return e.value !== item.value });
            console.log(filteredArray)
            setSelectedItem(filteredArray)
            setSelectAll(true);
            }
            else{
                setSelectedItem([])
                setSelectAll(false);
            }
        }
        else{
        setSelectedItem([...selectedItem, item])
        }
        }
    }
}

function removeItem(item){
    if(!props.multi){
        setSelectedItem(null)
    }
    else{

        var filteredArray = selectedItem.filter(function(e) { return e.value !== item });
        setSelectedItem(filteredArray);
        setSelectAll(false);
        console.log(selectedItem);
    }

}

function inList(item){
    if(selectedItem.some(function(o){return o.value === item.value;})){
        return true;
    }
    else{
        return false;
    }
}

function handleBoxClick(item){
    if(inList(item)){
        removeItem(item.value)
    }
    else{
        onItemClick(item);
    }
}


    return(
    <div className="Dropdown-Container" >
        <div className="label-container" onClick={() => handleClick()}>
            {props.multi == true ? (
                <label className="labelList" >{selectedItem.length == 0 ? props.default : selectedItem.map((selection) => (
                    <div 
                        key={selection.value}>
                        {selection.label}
                        <IoIosClose onClick={() => removeItem(selection.value)}/>
                    </div>
                )
                )}</label>
            ): (
            <label className="labelList">{selectedItem == null ? props.default : <div>{selectedItem}<IoIosClose onClick={() => removeItem(selectedItem)}/></div>}</label>
            )}
            {showDropDown ? <IoIosArrowUp className="arrowIcon" style={{marginLeft: "300px", fontSize:"20px"}}/> : <IoIosArrowDown className="arrowIcon" style={{marginLeft: "300px", fontSize:"20px"}}/>}
    </div>
    {showDropDown && (
        <div className="menu">
            {selections.map((selection) => (
                <div className="Options" onClick={() => onItemClick(selection)}
                key={selection.value} >
                    {props.multi && (
                    <div className="boxIcon">
                    {inList(selection) || selectAll == true ? <BiCheckboxChecked style={{color: "blue"}} onClick={() => handleBoxClick(selection)}/> : <BiCheckbox onClick={() => handleBoxClick(selection)}/>}
                    </div>
                    )}
                <div 
                className='item'>
                {selection.label}   
                </div>
                </div>
            ))}
        </div>
    )}
    </div>
    )
}
