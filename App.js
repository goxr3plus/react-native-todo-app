import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function App() {
   const [currentGoal, setCurrentGoal] = useState('')
   const [courseGoals, setGoals] = useState([])

   const onChangeText = (goal) => {
      setCurrentGoal(goal)
   }

   const addGoalHandler = () => {
      setGoals((currentGoals) => [...currentGoals, currentGoal]) // currentGoals = like previews state
      console.log(courseGoals)
   }

   const list = courseGoals.map((goal) => ({
      title: goal,
      icon: 'flight-takeoff'
   }))

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
         <View>
            {list.map((item, i) => (
               <ListItem key={i} title={item.title} leftIcon={{ name: item.icon }} bottomDivider />
            ))}
         </View>
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
