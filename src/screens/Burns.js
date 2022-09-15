import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import babyIMG from "../assets/BurnsMM/baby.jpeg";
import outletIMG from "../assets/BurnsMM/outlet.png";
import panIMG from "../assets/BurnsMM/pan.png";
import scaldIMG from "../assets/BurnsMM/scald.jpeg";
import smokeIMG from "../assets/BurnsMM/smoke.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import bhdr from "../assets/burn_hdr.png";

export default function Burns({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Falls");
    };
    const handleBurnSourcesNav = () => {
        navigation.navigate("BurningSources");
    };
    const handleBurnsMMNav = () => {
        navigation.navigate("BurnsMM");
    };
    const handleNextNav = () => {
        navigation.navigate("Poisonings");
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

    <Text style={CoreStyle.title}> Burns </Text>

    <Image style={CoreStyle.headimg} source={bhdr}/>

    <Text style={CoreStyle.subtitle}> How to prevent burn injuries? </Text>

    <CollapsibleBox header="1. Always test the water temperature before washing your child" headerstyle={CoreStyle.bullet}>
        <Image style={styles.scaldImg} source={scaldIMG}/> 

        <Text style={CoreStyle.subbullet}>- Lower the thermostat on your water heater below 120°F or install anti-scalding devices {'\n'}
        - Switch on the cold water first and turn it off last to avoid having your children exposed to only hot water {'\n'}
        - Turn your child away from the faucet during baths to prevent them from accidentally turning on the hot water {'\n'}
        </Text>
    </CollapsibleBox>


    <CollapsibleBox header="2. Make sure electrical outlets have child safety covers and keep a close eye on your child when they are playing with electronics" headerstyle={CoreStyle.bullet}>
        <Image style={styles.outletImg} source={outletIMG}/> 

        <Text style={CoreStyle.subbullet}>- Ensure there isn’t any exposed wiring and hide all extra wires to avoid your child chewing on cords {'\n'}
        - Replace batteries and check for any unusual defects in electronic toys {'\n'}
        - Keep bedside lamps and lightbulbs out of reach {'\n'}
        </Text>
    </CollapsibleBox>


    <CollapsibleBox header="3. Always know where your child is when cooking or handling hot food and liquids" headerstyle={CoreStyle.bullet}>

        <Text style={CoreStyle.subbullet}>- Keep toys out of the kitchen {'\n'}
        - Never hold your baby while handling drinks like coffee or tea because of the injury risk {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="4. Turn pot handles away from the front of the stove and use the back burners of the stove first." headerstyle={CoreStyle.bullet}>
        <Image style={styles.panImg} source={panIMG}/> 
        <Text style={CoreStyle.subbullet}>- Avoid tablecloths or large placemats. If a child pulls on one, hot drinks or food can fall. {'\n'}
        - Test food temperatures, especially when heated by the microwave, before feeding your child. {'\n'}
        </Text>
    </CollapsibleBox>


    <CollapsibleBox header="5. Have smoke detectors spread throughout your home and remember to replace the batteries often" headerstyle={CoreStyle.bullet}>
        <Image style={styles.smokeImg} source={smokeIMG}/> 
        <Text style={CoreStyle.subbullet}>- Keep a fire extinguisher handy in case of emergencies {'\n'}
        - Never leave rooms with candles, fireplaces, or active stoves unattended {'\n'}
        - Put potentially dangerous devices like irons or lighters in out-of-reach places {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="6. Make sure to apply sunscreen to your child and to reapply it if they’re playing in the water" headerstyle={CoreStyle.bullet}>

        <Text style={CoreStyle.subbullet}>- Don’t store your childs stroller or safety seat in direct view of the hot sun {'\n'}
        - Check metal playground equipment before letting your child play on it {'\n'}
        - Encourage your child to wear shoes since it will prevent them from walking barefoot on hot asphalt {'\n'}
        </Text>
    </CollapsibleBox>

    <Text style={CoreStyle.bullet}>7. Most importantly, always supervise your child around any open flame {'\n'} </Text>

    <Image style={styles.babyImg} source={babyIMG}/>

    <Text style={CoreStyle.subtitle}> Why are Burn Injuries Important? </Text>

        <Text style={CoreStyle.content}>
            {'\t'} Many regular household items like outlets, food, and hot water can cause childhood burns.
             Burn injuries can occur from flames or electrical current but the most concerning for children is scald burns from hot water [1].
            About 20,000 children under the age of 4 are hospitalized for scald injuries annually [2].
            Studies show that nearly 75% of these burn injuries are preventable so understanding safety procedures is essential [3].
            Infants and younger children are at higher risk of heat and cold injuries as well, since they produce and lose heat faster than adults [4].
            Even though burns are the fifth most common cause of accidental death for children, many of the deaths are preventable [4].
            Since most burn injuries happen at home, there are a lot of prevention measures that can be taken. {'\n'}
        </Text>

        <Text style={CoreStyle.subtitle}> Types of burn injuries? </Text>
            <Text style={CoreStyle.content}>
            {'\t'} There are a few different types of burn injuries.
            The most common are thermal burns which are caused when heat sources drastically raise the temperature of skin and tissue.
            Electrical burns due to contact with electricity are also relatively common.
            It’s easy to overlook, but radiation burns from prolonged exposure to the sun can also injure children.
            It’s also important to be cognizant of friction burns which can occur if children are playing with ropes. {'\n'}
        </Text>

    <Text style={CoreStyle.subtitle}> What are Treatment Options? </Text>
        <Text style={CoreStyle.content}>
        {'\t'} In the unfortunate case of a burn injury, some treatments may help. 
        It’s crucial to cool the affected area with cold water or a cold compress. 
        Protect the burned area by wrapping it with gauze or cloth while not breaking any blisters. 
        Don’t immediately apply any ointments, oils, or sprays. 
        If you fear the injury is severe enough or covers a large area, call emergency medical services. 
        If an electrical burn occurs, then there may be damage below the skin so seeing a doctor is also necessary [4].
    </Text>

    <View style={CoreStyle.buttons}>

    <SourcesButton
        onPress={handleBurnSourcesNav}
    ></SourcesButton>

    <MMButton
        onPress={handleBurnsMMNav}
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
    panImg: {
        height: 150,
        width:300,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    scaldImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    babyImg: {
        paddingLeft: 30,
        height: 150,
        width: 300,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    smokeImg: {
        height: 150,
        width:250,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    outletImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});