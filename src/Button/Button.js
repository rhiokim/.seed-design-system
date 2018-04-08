// @flow
import * as React from 'react'

import '../style.styl'
import '../style.sass'

type Props = {
  children?: React.Node
}

export default ({ children }: Props) => <button>{children}</button>
