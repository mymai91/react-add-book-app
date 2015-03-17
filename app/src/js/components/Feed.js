/** @jsx React.DOM */

var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm = require('./FeedForm');
var FeedList = require('./FeedList');

var Feed = React.createClass({
  getInitialState: function () {
    var feedItems = [
      {key: '1', title: 'Real data', description: 'Firebase is cool', voteCount: 49},
      {key: '2', title: 'Javascript is fun', description: 'Too funy', voteCount: 9}
    ];

    return {
      items : feedItems,
      formDisplayed: false
    };
  },
  onToggleForm: function () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function (newItem) {
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false,
      key: this.state.items.length
    })
  },
  render: function () {
    var display;
    display = {
      display: this.state.formDisplayed ? 'block' : 'none'
    }
    return (
      <div className="container">
        <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        <FeedForm style={display} onNewItem={this.onNewItem} />
        <FeedList items={this.state.items} />
      </div>
    );
  }
});

module.exports = Feed;