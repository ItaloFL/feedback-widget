import React from 'react'
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
} from 'react-native'

import { styles } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  image: ImageProps
}

export function Option({ image, title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image}></Image>
      <Text
        style={styles.title}
      >{title}</Text>
    </TouchableOpacity>
  )
}
