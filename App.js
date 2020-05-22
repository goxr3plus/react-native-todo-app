import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
   const [courseGoals, setGoals] = useState([])

   const addGoalHandler = (currentGoal) => {
      setGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: currentGoal }])
   }

   /* Render */
   return (
      <View style={styles.screen}>
         <GoalInput setGoals={setGoals} addGoalHandler={addGoalHandler}></GoalInput>
         <FlatList
            keyExtractor={(item) => item.id} //how to generate custom key , if not key is used on the objects ( for example we use id )
            data={courseGoals}
            renderItem={(itemData) => <GoalItem title={itemData.item.value}></GoalItem>}
         ></FlatList>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: { paddingTop: 80 }
})
