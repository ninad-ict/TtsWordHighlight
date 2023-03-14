import React, { useEffect, useState } from "react";
import Tts from "react-native-tts";
 import {androidParams} from "react-native-tts";
import { View, Text,Button, LogBox } from 'react-native';

export default function CreateTts(props)
{
    const {text,utterId,key}={...props};

    const [highlightText,setHighlightText]=useState(text);

    function readText(){
        Tts.removeAllListeners('tts-progress');
        Tts.setDefaultEngine('com.google.android.tts');
        // Tts.speak(text, {utteranceId:utterId} );
        // Tts.speak(text,  {
        //     language: 'en-US',
        //     pitch: 0.5,
        //     rate: 0.5,
        //     volume: 1,
        //     utteranceId: 'my-unique-id'
        //   }).then(
        //     Tts.addEventListener('tts-progress',ttsProgressHandler)
        //   );    
        Tts.getInitStatus().then(
            d=>{

                console.log("TTS","INIT",d);

                // Tts.setDefaultEngine('com.google.android.tts');

                Tts.stop();
                Tts.setDucking(true);
                Tts.setDefaultRate(0.5);
                // Tts.setDefaultEngine('com.google.android.tts');
                Tts.speak(text, {
                    
                    androidParams: {
                        KEY_PARAM_UTTERANCE_ID: 'zzz'
                    },
                    utteranceId: 'zzz'
                  });
                Tts.addEventListener('tts-progress',ttsProgressHandler);
                Tts.addEventListener('tts-finish',(e)=>{
                    setHighlightText(text);
                })

            }).catch(e=>console.log("TTS","Error is ",e));

          
        //   Tts.speak(text,androidParams{

        //   }).then
        //   (
            
        //   )
        

        // Tts.addEventListener('tts-finish',(event)=>{

            
        //     // if(utteranceId==utterId)
        //     // {
        //     //     console.log("TTS","It matched");
        //     // }

        //     // console.log("TTS","Finish",utteranceId);
        //     // console.log("TTS","Finish2",KEY_PARAM_UTTERANCE_ID);
        //     // Tts.removeEventListener('tts-progress',ttsProgressHandler);
        // })
    }

    function ttsProgressHandler(event)
    {
        console.log("TTS",event);
        console.log("TTS",text.substring(event.start,event.end));

        // switch(key)
        // {
        //     case '1':
        //         {

        //         }
        // }
        setHighlightText(
            <>
            {text.substring(0,event.start)}
            {<Text style={{ backgroundColor: 'yellow' }}>{text.substring(event.start,event.end)}</Text>}
            {text.substring(event.end,text.length)}
            </>
            );
    }
    // Tts.getInitStatus().then(initTts);
    const initTts = async () => {

        // Tts.speak("test text",{utteranceId:"uuu"});
       
        // await Tts.setDefaultLanguage('en-IN');
        // await Tts.setDefaultVoice('en-in-x-ene-network');
        // setTtsStatus('initialized');
    }

    useEffect(()=>{
        let isMounted=true;
        
        

        

        return () => {
        isMounted = false;
        Tts.stop();
        Tts.removeAllListeners();
        setHighlightText('');
        };


    },[]);

    return (

        <View key={key}>
            <Text key={key}>{highlightText}</Text>
            <Button title="Listen" onPress={readText} key={key}/>   
        </View>


    )


}