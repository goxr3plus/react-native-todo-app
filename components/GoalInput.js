import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

const GoalInput = (props) => {
   const [currentGoal, setCurrentGoal] = useState('')

   const onChangeText = (goal) => {
      setCurrentGoal(goal)
   }

   return (
      <>
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
               onPress={(e) => props.addGoalHandler(currentGoal)}
            />
            <Button
               title="Clear All"
               buttonStyle={styles.clearAll}
               textStyle={{ marginLeft: 15 }}
               icon={<Icon name="times" size={15} color="white" />}
               onPress={(e) => props.setGoals([])}
            />
         </View>
      </>
   )
}

const styles = StyleSheet.create({
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
   }
})

export default GoalInput
