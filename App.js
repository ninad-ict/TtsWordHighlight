import React, { useEffect, useState,useRef } from "react";
import { Text, View,TextInput,Button } from "react-native";
import Tts from 'react-native-tts';
import { InteractionManager } from 'react-native';
import CreateTts from "./CreateTts";




export default function App()
{
  
  
    return (
       <>
       <CreateTts text="Test the event listener in isolation: Try testing the event listener in isolation, without any other code that might be interfering with it. You can do this by creating a simple test app that only includes the code for the event listener. This will help you isolate any issues that might be caused by other parts of your app." 
        utterId="E" key={"1"}/>
        <CreateTts text="विद्यार्थांनो, खाली तुम्हाला परीक्षेत विचारल्या जाणारे प्रश्नप्रकार दिले आहेत त्याचा छान सराव करा आणि परीक्षेत चांगले मार्क्स मिळवा." 
        utterId="M" key={"2"}/>        
        <CreateTts text="प्रकृति ने हमारे देश भारत की रचना बड़े प्यार से की है. हमारा देश हिमालय की गोद में बसा हुआ है. हमारा देश सबसे पहले जागृत हुआ था और इसकी संस्कृति सबसे पुरानी थी." 
        utterId="H" key={'3'}/>        
        <CreateTts text="ایک مرتبہ کسی بستی میں بہت دنوں تک بارش نہیں ہوئی۔تمام لوگ پریشان ہوگئے۔کسان فکرمندتھے کہ بارش نہ ہوئی تو کھیتوں میں فصل نہ ہوگی اور فاقوں کی نوبت آجائے گی۔ایک دن تمام لوگوں نے طے کیا کہ بستی سے باہر جاکر خدا سے دعا کی جائے۔سب لوگ بستی سے باہر جانے لگے ۔اس بھیڑ میں ایک بوڑھے نے دیکھا کہ ایک بچی ہاتھ میں چھتری لیے چل رہی ہے۔بوڑھے نے پوچھا، ''بارش تو ہو نہیں رہی ہے ،تم" 
        utterId="U" key={'4'}/>
        </>
    )
}