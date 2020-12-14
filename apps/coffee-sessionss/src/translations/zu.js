import _ from 'lodash'

export const zu = {
  title: 'Coffee Attendants'
}

export const translate = (key) => _.get(zu, key);