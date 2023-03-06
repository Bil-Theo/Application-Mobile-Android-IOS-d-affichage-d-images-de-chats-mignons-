import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
      },
      image: {
        flex: 1,
        justifyContent: "center",
        height: '80%',
        width: '99.999%',
        shadowOpacity: 50,
      },
      text: {
        color: "white",
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        maxHeight: 80,
        minWidth: '100%',
        backgroundColor: "#000000c0",
        position: "absolute",
        bottom: 80,
      },
      textButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        textAlign: 'center',
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      button: {
        backgroundColor: '#2596be',
        margin: 70,
        marginTop: 4,
        alignContent: 'center',
        height: '10%',
        width: '55%',
        borderRadius: 35,
      }
})

export default styles