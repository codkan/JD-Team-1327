import { StyleSheet } from "react-native";

// This is meant to be a core, shared syle library for styles to encourage consistency
// and code reuse throughout the app.


export const CoreStyle = StyleSheet.create({

    // Main header/title text for info, media pages etc.
    title: { 
        fontSize: 40,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        flex: 9
    },

    // Secondary headers for subsections
    subtitle: { 
        fontSize: 26,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
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
    }
});