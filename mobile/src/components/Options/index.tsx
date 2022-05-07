import React from 'react'
import { Text, View } from 'react-native'
import { Copyright } from '../Copyright'

import { styles } from './styles'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Option } from '../Option'
import { FeedbackType } from '../Widget'

interface Props {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void
}

export function Options({ onFeedbackTypeChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChange(key as FeedbackType)}
          ></Option>
        ))}
      </View>
      <Copyright />
    </View>
  )
}
