const React = require('react')

class ThemedDecorations extends React.Component {
    render() {
      const currentTheme = this.props.theme
      const childrenWithExtraProp = React.Children.map(this.props.children, child => {
        return (
          <div className={this.props.theme}>{child}</div>
        )
      })
      return (
        <div>
          {childrenWithExtraProp}
        </div>
      )
      }
    }

    module.exports = ThemedDecorations
