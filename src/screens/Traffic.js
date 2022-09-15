import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import car from "../assets/carSafetyMM/car.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";

import rearSeat from "../assets/carSafetyMM/rearSeat.png";
import foreSeat from "../assets/carSafetyMM/foreSeat.png";
import boostSeat from "../assets/carSafetyMM/boostSeat.png";
import belt from "../assets/carSafetyMM/belt.png";
import carSafety from "../assets/carSafetyMM/carSafety.png";
import safe from "../assets/carSafetyMM/safe.png";

export default function Traffic({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Drownings");
    };
    const handleTrafficSourcesNav = () => {
        navigation.navigate("TrafficSources");
    };
    const handleCarsMMNav = () => {
        navigation.navigate("CarSafetyMM");
    };
    const handleNextNav = () => {
        navigation.navigate("ParentalHealth");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    return (
    <ImageBackground source={Background} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={handleLastNav}
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

    <Text style={CoreStyle.title}> Car Safety </Text>

    <Image style={styles.hdrimg} source={carSafety}/>

    <Text style={CoreStyle.subtitle}> Types of Car Seats </Text>

    <CollapsibleBox header="1. Rear-facing carseats" headerstyle={CoreStyle.bullet}>
        <Image style={styles.rearimg} source={rearSeat}/>
        <Text style={CoreStyle.subbullet}>- Used for infants and toddlers {'\n'}
        - All infants and toddlers should ride in these until they reach the highest weight or height limit of the seat {'\n'}
        - Most convertible rear-facing seats are built to allow children to ride rear-facing for 2 years or more {'\n'}
        - Usually comes with a base that stays in the car in place. The seat clicks into and out of the base for easy installation {'\n'}
        - Has a carrying handle for easy child-carry {'\n'}
        - Ensure that the harness is snug and the chest clip is placed at the center of the chest, even with the armpits {'\n'}
        - Never place a rear-facing carseat in the front seat where a passenger airbag is activated {'\n'}
        - Make sure the seat is angled correctly so that the head and neck are supported and not able to flop around {'\n'}
        - Should only be used for travel; never use for sleeping, feeding, etc outside of the vehicle {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="2. Forward-facing carseats" headerstyle={CoreStyle.bullet}>
        <Image style={styles.foreimg} source={foreSeat}/>
        <Text style={CoreStyle.subbullet}>- Used for toddlers and preschoolers. This is the next seat up from a rear-facing carseat {'\n'}
        - Should always be worn with the attached harness for proper effectiveness {'\n'}
        - Many forward-facing carseats can accommodate children up to 65 pounds or more {'\n'}
        - All toddlers and preschoolers should ride in a forward-facing carseat until they outgrow the weight or height limit of the seat {'\n'}
        - Does not come with a carrying handle. These seats are intended to stay in the car at all times {'\n'}
        - Should only be used for travel; never use for sleeping, feeding, etc outside of the vehicle {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="3. Booster seat" headerstyle={CoreStyle.bullet}>
        <Image style={styles.boostimg} source={boostSeat}/>
        <Text style={CoreStyle.subbullet}>- Used for school-aged children {'\n'}
        - Children within this category should use a booster seat with the seat belt until the seat belt fits properly without the need of the booster seat {'\n'}
        - Vehicle seat belts usually fit properly without a booster seat when the child has reached 4ft 9in and is between the ages of 8 to 12 {'\n'}
        - All children under the age of 13 should ride in the back seat regardless of height or weight {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="4. Seat belts" headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Once a seat belt fits properly without the use of a booster seat, children should wear both the lap and shoulder belt at all times {'\n'}
        - Fits correctly when the should belt lies across the middle of the chest and shoulder, not the neck or throat {'\n'}
        - Fits correctly when the lap belt is low and snug across the upper thighs, not the belly {'\n'}
        - Never allow anyone to share seat belts. All passengers must have their own car safety seats or seat belts {'\n'}
        </Text>
    </CollapsibleBox>

    <Image style={CoreStyle.headimg} source={belt}/>

        <Text style={CoreStyle.subtitle}> Things to avoid when shopping for carseats </Text>
            <Text style={CoreStyle.content}>
            {'\t'} Never use a carseat that is too old. The manufacturer will make a note of how long the
            carseat can be used and when it was made. If a carseat has any visible cracks on it, it is unuseable
            and can cause more harm than good to your child. Carseats should also be replaced after any moderate or severe crash.
            Even minor crashes can cause unseen damage to the carseat and may need replacing. Carseats can also be recalled;
            make sure that you hold on to the manufacturer label for the carseat so that you know the age of the seat and if
            it has been recalled. If in doubt, you can call the manufacturer or contact the National Highway Traffic Safety
            Administration (NHTSA) Vehicle Safety Hotline at (888)-327-4236 or their website.
        </Text>

    <Text style={CoreStyle.subtitle}> Must-Dos while traveling </Text>

    <CollapsibleBox header="1. Be a good role model" headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Make sure you always wear your seat belt. This will 
        help your child form a lifelong habit of buckling up. {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="2. Make sure that everyone who transports your child uses the correct car safety seat or seat belt on every trip, every time"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Being consistent with car safety seat use is good parenting, 
        reduces fussing and complaints, and is safest for your child {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="3. Never leave your child alone in or around cars, and lock your vehicle when it is not in use"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- A child can die of heatstroke because temperatures can reach 
        deadly levels in minutes {'\n'}
        - A child can be strangled by power windows, retracting seat belts, sunroofs, or accessories {'\n'}
        - A child can knock the vehicle into gear, setting it into motion {'\n'}
        - A child can be backed over when the vehicle backs up {'\n'}
        - A child can be trapped in the trunk of the vehicle {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="4. Follow manufacturer directions for cleaning car seats" headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Cleaning but not disinfecting is usually permitted. That's 
        because disinfectant products may decrease the protection provided by the seat and harness {'\n'}
        </Text>
    </CollapsibleBox>

    <Image style={styles.foreimg} source={safe}/>

     <Text style={CoreStyle.subtitle}> Why is Car Safety So Important? </Text>

        <Text style={CoreStyle.content}>
            {'\t'} Driving a car can already be a scary task for some people; you are manuevering a thousand-pound
            hunk of metal and responsible for the lives of drivers and passengers around you. Now you are adding the
            life of your child. Car safety, however, is there to ensure that you and your child stay as safe as possible
            and hopefully give for a less daunting experience. The following tips outline basic car seat rules,
            tips for parents on how to be good car safety role models, and things to avoid. {'\n'}
        </Text>

    <Image style={CoreStyle.headimg} source={car}/>

    <View style={CoreStyle.buttons}>

    <SourcesButton
        onPress={handleTrafficSourcesNav}
    ></SourcesButton>

    <MMButton
        onPress={handleCarsMMNav}
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
    hdrimg: {
        height: 150,
        width: 175,
        alignSelf: "center",
    },
    rearimg: {
        height: 160,
        width: 120,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    foreimg: {
        height: 160,
        width: 120,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    boostimg: {
        height: 120,
        width: 170,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});
