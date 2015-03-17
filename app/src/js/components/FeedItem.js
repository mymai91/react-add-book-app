/** @jsx React.DOM */

var React = require('react');

var FeedItem = React.createClass({
  render: function () {
    return (
      <li className="list-group-item" key={this.props.key}>
        <h4>Title: {this.props.title}</h4>
        <span>Description: {this.props.desc}</span>
      </li>
    );
  }
});

module.exports = FeedItem;