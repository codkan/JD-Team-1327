import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Background from "../assets/bg.png";
import end from "../assets/end.png";
import falls from "../assets/falls.png";
import secure from "../assets/secure.png";
import stairs from "../assets/stairs.png";
import stroller1 from "../assets/stroller1.png";
import stroller2 from "../assets/stroller2.png";
import tv from "../assets/TV.png";
import window from "../assets/window.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import * as Speech from "expo-speech";
import { Content } from "../Content";

var i = 0;

export default function Falls({ navigation }) {

    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleFallSourcesNav = () => {
        navigation.navigate("FallSources");
    };
    const handleFallsMMNav = () => {
        navigation.navigate("FallsMM");
    };
    const handleNextNav = () => {
        navigation.navigate("Burns");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(Content[text].body, {rate: 0.85});
        } else {
            Speech.stop();
        }
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={backToInfo}
        ></BackButton>
        <MediaButton
              text="Back to Info"
              onPress={backToInfo}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text style={CoreStyle.title}> Falls </Text>

    <Image style={styles.headimg} source={falls}/>


<Text style={CoreStyle.subtitle}> 5 Steps to Prevent Falls </Text>

<CollapsibleBox header="1. Be mindful with infants, even when secured" headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(0)}>
        <Image style={styles.roundpic} source={secure}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>- Whenever high chairs, infant carriers, car-seats, swings, or strollers are in use,
    always keep infants and young children strapped in and secure. {'\n'}
    - Even when your child is secured in a carrier, NEVER place it on top of a counter, table, or other
      furniture. Place it on the floor so that the child cannot rock itself off or be pulled/pushed by other siblings. {'\n'}
    - Try to use shopping carts with wheeled carriers attached whenever possible as they protect the child
      and often have fun designs {'\n'}
    - If you are using a normal shopping cart and seat, always use the harnesses or safety belts and avoid
      carts without them {'\n'}
    - Even if you are using a cart with an attached carrier, never leaver your child alone in the cart or
      allow them to ride in, under, or on the cart basket. [4] {'\n'}
    </Text>
</CollapsibleBox>

<CollapsibleBox header="2. Prevent dangerous falls for crawlers at home" headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(1)}>
        <Image style={styles.roundpic} source={stairs}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>- Stairs are one of the most dangerous places for young children, so use
    safety gates approved for both the tops & bottoms of stairs and, if possible, attach them to the wall. {'\n'}
    - Even with safety gates, infants and toddlers should always be closely supervised on or near stairs.{'\n'}
    - Children can easily fall elsewhere around the house, keep hallways, as well as stairs, well-lit and
      free from clutter and use ant-slip rugs for hardwood or tile. {'\n'}
    - Especially consider anti-slip mats and decals in the bathtub and shower to prevent dangerous falls {'\n'}
    - Always supervise young children on high porches, decks, or balconies and avoid them if at all possible. [4] {'\n'}
    </Text>
</CollapsibleBox>

<CollapsibleBox header="3. Close, lock, and guard windows from toddlers" headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(2)}>
        <Image style={styles.roundpic} source={window}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>- Keep younger children and climbable furniture away from windows. {'\n'}
    - If your windows open from the top and bottom, open only the top to prevent falls. Though be
      mindful that children may grow strong enough to open the bottom {'\n'}
    - When not in use, never forget to not only close but LOCK windows. {'\n'}
    - Normal screens are not meant for protection, so install proper window guards that you can easily open
      in the event of an emergency. {'\n'}
    - For extra protection, install window stops that prevent them from opening more than a few inches. [4] {'\n'}
    </Text>
</CollapsibleBox>

<CollapsibleBox header="4. Baby-proof furniture & protect climbers from tip-overs" headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(3)}>
        <Image style={styles.roundpic} source={tv}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subbullet}>- Do not let young children climb on any furniture where they could
    fall from any height or the furniture could possibly be tipped over, especially near windows.{'\n'}
    - Rearrange household items so that heavy items are lower and children are not tempted to climb or
    reach higher objects. {'\n'}
    - Securely attach furniture to the walls or floors by using anti-tip brackets, braces, wall straps, or mounts/braces
      and install stops on dresser drawers to prevent them from being pulled out. {'\n'}
    - Larger, older TVs should be placed on stable, low, secured furniture while flat-screen TVs
      should be mounted higher on the wall [5] {'\n'}
    </Text>
</CollapsibleBox>

<CollapsibleBox header="5. Pay close attention at the playground with young children" headerstyle={CoreStyle.bullet}>
    <Text style={CoreStyle.subbullet}>- Falls are the most common and the most severe playground injuries {'\n'}
    - Nearly half of playground injuries are due to improper supervision, so always avoid distraction and
      actively supervise children rather than letting them loose {'\n'}
    - Always dress appropriately for the playground by avoiding necklaces, purses, drawstrings, or hard
      clothing items that may pose strangulation hazards or worsen impacts {'\n'}
    - Teach and guide children to avoid any pushing, shoving, or crowding {'\n'}
    - If possible, seek out playgrounds with softer, shock-absorbing surfaces like rubber, turf, mulch,
      wood chips, pea gravel, etc. rather than asphalt, concrete, or dirt. [6] {'\n'}
    </Text>
</CollapsibleBox>

    <Text style={CoreStyle.subtitle}> {'\n'} Why are falls important? </Text>
        <Text style={CoreStyle.content}>
        {'\t'} Falls are the leading cause of hospitalized injury in the U.S. for children ages 0 to 14. [1]
         In fact, over 2 million children ages 14 and under are estimated to receive treatment for fall injuries annually. [2]
         Though these injuries are even more prevalent and severe for younger age groups. According
         to the CDC, falls are the leading cause of Traumatic Brain Injury (TBI) for children
         ages 0 to 4 with over 50% of total nonfatal injuries to infants under one being attributed to falls. [3] {'\n'}
    </Text>

    <Text style={CoreStyle.subtitle}> When and where do falls occur? </Text>
        <Text style={CoreStyle.content}>
        {'\t'} The different circumstances for falls vary largely between infants and older toddlers
        considering their differing mobility. Infants are most likely to fall from furniture/toys and
        stairs while they are unable to walk, while toddlers and older children are more likely to fall
        on the playground or from windows. [2]
        </Text>

<Image style={styles.longpic} source={end}/>

<Text style={CoreStyle.subtitle}> Stroller Safety </Text>

    <TouchableOpacity onPress={() => speak(7)}>
         <Image style={styles.roundpic} source={stroller2}/>
    </TouchableOpacity>

    <Text style={CoreStyle.content}> {'\t'} Just like you need to stay mindful when children are secured
     in carriers, you also need to remain aware when your child is in a stroller. You should always use
     the safety harnesses and even then, always use the brakes when not in motion and NEVER leave your
     child alone in a stroller. To avoid trapping their head or wrapping up their neck, close all openings
     and never hang bags on the handles (this could tip the stroller). If your child has too much room,
     use tightly rolled baby blankets instead of a pillow or large blanket. Lastly, fold and unfold strollers
     away from children to avoid pinching any fingers.</Text>

<Text style={CoreStyle.subtitle}> Stroller Purchasing Tips: </Text>

    <TouchableOpacity onPress={() => speak(8)}>
         <Image style={styles.roundpic} source={stroller1}/>
    </TouchableOpacity>

<Text style={CoreStyle.content}>
- Make sure the stroller is designed for the height, weight, and age of your child (infants need to lie almost flat) {'\n'}
- Check for reliable and, ideally, 5-point safety harnesses / restraining belts (shoulders, waist, between the legs) {'\n'}
- Look for dual brakes that use wheel mechanism rather than pressure on the tire and, most importantly, are easy to use {'\n'}
- Avoid parts that can pinch fingers or trap the head of a child {'\n'}
- A safe and stable stroller should have a wide wheel base, a seat low in the frame, small leg openings,
waist-level (or a bit lower) handlebars, and resist tipping backward when pressing the handles [7]
</Text>

    <View style={styles.buttons}>

    <SourcesButton
        onPress={handleFallSourcesNav}
    ></SourcesButton>

    <MMButton
        onPress={handleFallsMMNav}
    ></MMButton>

    </View>

    </ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    
    buttons: {
        display: "flex",
        flexDirection: "row",
    },
    roundpic: {
        height: 150,
        width: 150,
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 5,
    },
    longpic:{
        width: null,
        resizeMode: "contain",
        height: 45,
        marginBottom: 20,
    },
    headimg: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
});