import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, Image } from "react-native";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import SourcesButton from "../components/SourcesButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import { ScrollView } from "react-native";
import ppd2 from "../assets/parentalHealthMM/ppd2.png";
import ppd3 from "../assets/parentalHealthMM/ppd3.png";
import CollapsibleBox from "../components/CollapsibleBox";


export default function ParentalHealth({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const handleParentalHealthSourcesNav = () => {
        navigation.navigate("ParentalHealthSources");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

    <BackButton
        text="<"
        txtColor={"black"}
        onPress={handleInfoNav}
    ></BackButton>

    <ScrollView>

    <Image style={styles.headimg} source={ppd2}/>

    <Text style={styles.title}> Parental Health </Text>
    <Text style={styles.subtitle}> Baby Blues or Postpartum Depression? </Text>

    <Text style={styles.content}>
        {'\t'} In the first few weeks of caring for a newborn, most new moms feel anxious, sad, frustrated, tired, and overwhelmed.
        Sometimes known as the "baby blues," these feelings get bettwe within a few weeks. But for some women, they are very strong 
        or don't get better. Postpartum depression is when these feelings don't go away after about 2 weeks or make it hard for a 
        woman to take care of her baby. [1] Rarely, an extreme mood disorder called postpartum psychosis also may develop after 
        childbirth. Postpartum depression isn't a character flaw or a weakness. Sometimes it's simply a complication of giving birth. 
        If you have postpartum depression, prompt treatment can help you manage your symptoms and help you bond with your baby. [2] {'\n'}
    </Text>

    <Text style={styles.subtitle}> Symptoms for Either Parent</Text>

    <CollapsibleBox header="1. Signs and Symptoms of Baby Blues for Either Parent [2]"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>- Mood swings {'\n'}
        - Anxiety {'\n'}
        - Sadness {'\n'}
        - Irritability {'\n'}
        - Feeling overwhelmed {'\n'}
        - Crying {'\n'}
        - Reduced concentration {'\n'}
        - Appetite problems {'\n'}
        - Trouble sleeping {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="2. Signs and Symptoms of Postpartum Depression for Mothers [1]"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>- Feeling sad, hopeless, or overwhelmed {'\n'}
        - Feeling worried, scared, angry, or panicked {'\n'}
        - Feelings of guilt or inadequacy {'\n'}
        - Excessive crying {'\n'}
        - Depressed modd or severe mood swings {'\n'}
        - Sleeping too much or too little {'\n'}
        - Eating too much or too little {'\n'}
        - Trouble concentrating {'\n'}
        - Wanting isolation from friends and family {'\n'}
        - Not feeling attached to the baby {'\n'}
        - Withdrawal from activities you usually find enjoyable {'\n'}
        - Fear that you're not a good mother [2] {'\n'}
        - Recurrent thoughts of death or suicide {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="3. Additional Signs and Symptoms of Postpartum Psychosis for Mothers [1]"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>- Thoughs of hurting the baby or yourself {'\n'}
        - Hearing voices, seeing things that are not there, or feeling paranoid (very worried, suspicious, or mistrustful) {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="4. Postpartum Depression for Fathers [2]"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>New fathers can experience postpartum depression, too. They may feel sad or fatigued, 
        be overwhelmed, experience anxiety, or have changes in their usual eating and sleeping patterns, the same symptoms 
        moths with postpartum depression experience. {'\n'}
        Fathers who are young, have a history of depression, experience relationship problems, or are struggling financially 
        are most at risk of postpartum depression. Paternal postpartum depression can have the same negative effect on partner 
        relationships and child development as postpartum depression in mothers can. {'\n'}
        </Text>
    </CollapsibleBox>

    <Image style={styles.headimg} source={ppd3}/>

    <Text style={styles.subtitle}> Long-Term Effects of Untreated Postpartum Depression [2] </Text>

    <CollapsibleBox header="1. For Mothers"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>Untreated postpartum depression can last for months or longer, sometimes becoming 
        a chronic depressive disorder. Even when treated, postpartum depression increases a woman's risk of future episodes 
        of major depression. {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="2. For Fathers"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>Postpartum depression can have a ripple effect, causing emotional strain for everyone 
        close to a new baby. When a new mother is depressed, the risk of depression in the baby's father may also increase. 
        New dads are already at increased risk of depression, whether or not their partner is affected. {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="3. For Children"
    headerstyle={styles.bullet}>
        <Text style={styles.subbullet}>Children of mothers who have untreated postpartum depression are more likely to have 
        emotional and behavioral problems, such as sleeping and eating difficulties, excessive crying, and delays in 
        language development. {'\n'}
        </Text>
    </CollapsibleBox>

    <SourcesButton
        text="[]"
        txtColor={"black"}
        onPress={handleParentalHealthSourcesNav}
    ></SourcesButton>

    </ScrollView>


    <View style = {styles.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    headimg: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        position: "relative",
    },
    subtitle: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    bullet: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5
    },
    subbullet: {
        fontSize: 16,
        marginLeft: 30,
        marginRight: 10,
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    pushdown: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C4C4C4",
    },
});
