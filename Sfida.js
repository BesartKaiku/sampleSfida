import React from 'react-native';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';




const Sfida = () => {
    const [route,setRoute] = usestate('');
    const onPress = () => setRoute(console.log("ok"))
  return (
    <View style={styles.container}>
        <View style={styles.sfidatContainer}>
            <Text  style={styles.sfidatText}>Zbuloni Sfidat</Text>
            
        </View>
        <FlatList>
            numColumns = {2}
            

            
            
        </FlatList>
        <View style={styles.grid}>

                <TouchableOpacity onPress={onPress}>
                <Image source={require('./assets/nftgreen1.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/nftgreen5.png')} />
                </TouchableOpacity>
            
                <TouchableOpacity>
                <Image source={require('./assets/nftgreen6.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('./assets/nfthckth2.png')} />
                </TouchableOpacity>
            

                <TouchableOpacity>
                <Image source={require('./assets/nfthckth3.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('./assets/nfthckth4.png')} />
                </TouchableOpacity>
        
        </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    sfidatContainer:{
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
        
        borderRadius: 30,
        width: 400,
        height: 80,


    },
    sfidatText :{
        fontSize: 40,
        color:'white',

    },
    grid:  {
        item: {
          flex: 2,
          maxWidth: "33%", // 100% devided by the number of rows you want
          alignItems: "center",
          
          // my visual styles; not important for the grid
          padding: 10,
          backgroundColor: "rgba(249, 180, 45, 0.25)",
          borderWidth: 1.5,
          borderColor: "#fff"
        
      
        

    },

    }
    
  });

  export default Sfida;

