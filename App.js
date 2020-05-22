import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

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

   /* Render */
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
               onChangeText={onChangeText}
            />
            <Button title="ADD" onPress={addGoalHandler} />
         </View>
         <View>
            {courseGoals.map((goal, i) => (
               <Text key={i}> {goal}</Text>
            ))}
         </View>
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
