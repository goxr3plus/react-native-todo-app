import React from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'

export default App = () => {
   return (
      <View style={styles.screen}>
         <View style={styles.inputContainer}>
            <TextInput
               placeholder="Course Goal"
               style={{
                  width: '80%',
                  borderColor: 'black',
                  borderWidth: 1,
                  marginBottom: 5,
                  padding: 10
               }}
            ></TextInput>
            <Button title="ADD"></Button>
         </View>
         <View></View>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: { paddingTop: 80 },
   inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   }
})
