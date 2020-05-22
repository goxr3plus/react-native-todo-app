import React from 'react'
import { ListItem } from 'react-native-elements'

const GoalItem = (props) => {
   return <ListItem title={props.title} leftIcon={{ name: 'assignment' }} bottomDivider />
}

export default GoalItem
