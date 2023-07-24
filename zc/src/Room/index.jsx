import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from  '@zegocloud/zego-uikit-prebuilt'

const Roompage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID =171442243 ;
        const serverSecret = "8e3f235f3ba37dfa6329e9b24ad2d033";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,
             Date.now().toString(),"free1234");
        const zc = ZegoUIKitPrebuilt.create( kitToken ) ;
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name:'Copy link',
                    url:`http://localhost:3000/room/.${roomId}`
                }
            ],
            scenario:{
             mode: ZegoUIKitPrebuilt.OneONoneCall,    
            },
            showScreenSharingButton: false,
        });
    }
    return(
<div>
    <div ref={myMeeting}/>
</div>
    )
}
export default Roompage