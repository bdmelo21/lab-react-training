import React from 'react'

function CreditCard(props){
    let image="";
    let type=props.type;
    let number=props.number;
    let owner=props.owner;
    let bank=props.bank;
    let month=props.expirationMonth;
    let year= props.expirationYear;
    let numbers=number.toString();
    let newNumber=[];
    for (let i = 0; i<numbers.length; i ++) {
        if (i>=12){
        newNumber.push(numbers.charAt(i));
        }
    }
    newNumber=newNumber.join("");
    if (month<10){
        month=`0${month}`;
    }
    year= year.toString();
    year=year.substring(2);
    if (type==="Visa"){
        image="https://image.flaticon.com/icons/png/128/825/825510.png"
    }
    if (type==="Master Card"){
        image="http://collectionpng.com/images/1672.png"
    }

    return (
        <div style={{backgroundColor:props.color, width:"550px", height:"250px"}}>
        <img src={image} style={{width: "20%", height: "20%"}}></img>
        <h1>{`•••• •••• •••• ${newNumber}`}</h1>
        <h3>{`Expires:${month}/${year} ${bank}`}</h3>
        <h3>{`${owner}`}</h3>
        </div>
    )








}

export default CreditCard
