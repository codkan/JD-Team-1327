import { StyleSheet } from "react-native";

// This is meant to be a core, shared syle library for styles to encourage consistency
// and code reuse throughout the app.


export const CoreStyle = StyleSheet.create({

    // background image formatting
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    // Main header/title text for info, media pages etc.
    title: { 
        fontSize: 40,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
    },

    // Secondary headers for subsections
    subtitle: { 
        fontSize: 26,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: 10,
    },

    // Small text
    content: { 
        fontSize: 18,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "justify",
        lineHeight: 25,
    },

    // Good size for big bullet points, works well as header for collapsible box
    bullet: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 15,
        marginRight: 15
    },

    //Good size for small sub-bullet points, works well as body for collapsible box
    subbullet: {
        fontSize: 18,
        marginLeft: 35,
        marginRight: 30,
        textAlign: "justify",
        lineHeight: 23,
    },

    // box for the back buttons and source button at top of info pages (prev called btns)
    topnavbuttons: { 
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 20,
        justifyContent: "space-between",
    },

    // text style for module page titles
    moduleText: {
      // margin: 100,
      height: 70,
      fontSize: 40,
      marginTop: 60,
      marginBottom: 25,
      fontWeight: "bold",
      textAlign: "center",
    },

    //buttonContainer for housing crayon section buttons on module pages
    buttonContainer: {
        flex: 1,
        top: -60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    //crayon styling only for buttons on initial module pages
    crayon: {
        height: 50,
        width: 355,
        marginTop: 40,
    },

    // pushdown style to keep navigation bar at bottom of screen
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

    // Container for Multimedia pages
    mediaContainer: {
        alignItems: "center",
        marginHorizontal: 0,
        width: "100%",
    },

    // style for "Go to Topic" button views in Multimedia
    mediaButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -20,
        marginBottom: 75,
    },

    // style for the sources and media buttons at the end of info sections
    buttons: {
        display: "flex",
        flexDirection: "row",
    },

    // header image style for most of info sections
    headimg: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },

    // image viewer sizing
    imgview: {
        height: 500,
        width: "100%",
        marginBottom: 100,
    },

    // random contain style for About/Disclaim
    contain: {
        marginHorizontal: 25,
    },

    // other random contain style for About/Disclaim
    container: {
      marginTop: 50,
      marginBottom: 25,
      marginHorizontal: 10,
    },

    // Modal Text style for header content in About/Disclaim
    minorText: {
        marginTop: 150,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
    },

    // text style for in-game About
    disclaimer: {
        fontSize: 10,
        marginHorizontal: 35,
        marginBottom: 10,
    },

    // text style for main menu Disclaim
    about: {
        fontSize: 12,
        marginHorizontal: 10,
    },

    // contain in row
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    // contain and center
    center: {
        alignItems: "center",
    },

    // text style for settings pages
    settingText: {
        height: 70,
        fontSize: 40,
        marginTop: 150,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
    },

    // container style for setting buttons
    settingContainer: {
        flex: 1,
        top: -80,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    // container style for answer choices in quizzes
    quizContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 65,
    },

    // invisible back button for spacing
    invisible: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0.0,
        shadowRadius: 4,
        shadowOffset : { width: 0, height: 4},
        elevation: 7.5,
        marginTop: 10,
        marginBottom: 10,
      },
});