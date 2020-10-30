import PropTypes from 'prop-types'
import React from 'react'

import getNetworkLink from './utils/getNetworkLink'
import windowOpen from './utils/windowOpen'

class ShareButton extends React.PureComponent {
  onClick = e => {
    e.preventDefault()

    const { url, network, text, longtext, link, media } = this.props
    const networkLink = link || getNetworkLink({ network, url, text, longtext, media })

    this.openShareWindow(networkLink)
  };

  openShareWindow = link => {
    windowOpen(link)
  };

  render () {
    const { network, children, className } = this.props

    return (
      <button
        className={`${className}`}
        aria-label={`Share on ${network}`}
        onClick={this.onClick}
        style={{ 'border-radius': '50%' }}

      >
        {children}
      </button>
    )
  }
}

ShareButton.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  text: PropTypes.string,
  longtext: PropTypes.string,
  media: function (props, propName, componentName) {
    const key = props.network.toLowerCase()
    if (key === 'pinterest' && props[propName] === undefined) {
      return new Error(
        `The prop '${propName}' is marked as required in '${componentName}' for the 'Pinterest' network, but it's value is 'undefined'.`
      )
    }
  },
  className: PropTypes.string
}

ShareButton.defaultProps = {
  link: '',
  text: '',
  longtext: '',
  className: ''
}

export default ShareButton
