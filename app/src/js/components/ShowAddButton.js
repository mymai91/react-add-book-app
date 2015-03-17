/** @jsx React.DOM */

var React = require('React');

var ShowAddButton = React.createClass({
  render: function () {
    var classString, buttonText;

    if (this.props.displayed) {
      classString = 'btn btn-default btn-block';
      buttonText = 'Cancel Add Book';
    } else {
      classString = 'btn btn-success btn-block';
      buttonText = 'Add New Book';
    }
    return (
      <button className={classString}
              onClick={this.props.onToggleForm}>
        {buttonText}
      </button>
    );
  }
});

module.exports = ShowAddButton;