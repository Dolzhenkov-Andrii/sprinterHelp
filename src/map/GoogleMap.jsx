import React from "react";
import classes from "./googleMap.module.css"

export default function GoogleMap(){
    return (
        <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.3076741353068!2d29.992042252593002!3d49.80582473317671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d347637b4c87d1%3A0x84005121b5ef5f8b!2z0KDQsNC30LHQvtGA0LrQsCDQodC_0YDQuNC90YLQtdGA!5e0!3m2!1sru!2sua!4v1713625138022!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}
