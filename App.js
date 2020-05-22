import React, { useState } from 'react'
import { FlatList, StyleSheet, TextInput, View } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function App() {
   const [currentGoal, setCurrentGoal] = useState('')
   const [courseGoals, setGoals] = useState([])

   const onChangeText = (goal) => {
      setCurrentGoal(goal)
   }

   const addGoalHandler = () => {
      setGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: currentGoal }])
      console.log(courseGoals)
   }

   /* Render */
   return (
      <View style={styles.screen}>
         <View style={styles.inputContainer}>
            <TextInput
               placeholder="Course Goal"
               style={{
                  width: '85%',
                  borderColor: 'black',
                  borderWidth: 1,
                  marginBottom: 5,
                  padding: 10
               }}
               onChangeText={onChangeText}
            />
         </View>
         <View style={styles.inputContainerButtons}>
            <Button
               title="Add Goal"
               buttonStyle={{ marginRight: 10 }}
               textStyle={{ marginLeft: 15 }}
               icon={<Icon name="plus" size={15} color="white" />}
               onPress={addGoalHandler}
            />
            <Button
               title="Clear All"
               buttonStyle={styles.clearAll}
               textStyle={{ marginLeft: 15 }}
               icon={<Icon name="times" size={15} color="white" />}
               onPress={(e) => setGoals([])}
            />
         </View>
         <FlatList
            keyExtractor={(item) => item.id} //how to generate custom key , if not key is used on the objects ( for example we use id )
            data={courseGoals}
            renderItem={(itemData) => <ListItem title={itemData.item.value} leftIcon={{ name: 'assignment' }} bottomDivider />}
         ></FlatList>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: { paddingTop: 80 },
   clearAll: { backgroundColor: 'firebrick' },
   inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
   },
   inputContainerButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center'
   },
   listItem: {
      padding: 10,
      marginVertical: 2,
      color: 'white',
      backgroundColor: 'orange'
   }
})
