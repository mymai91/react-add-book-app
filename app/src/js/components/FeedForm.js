/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({
  handleForm: function (e) {
    e.preventDefault();

    var newItem = {
      title: this.refs.title.getDOMNode().value,
      desc: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };

    this.refs.feedForm.getDOMNode().reset(),
    this.props.onNewItem(newItem);
  },
  render: function () {
    return (
      <form id="feedForm" 
            style={this.props.style} 
            onSubmit={this.handleForm}
            ref="feedForm">
        <div className="form-group">
          <input type="text" ref="title" className="form-control" placeholder="Title" />
          <input type="text" ref="desc" className="form-control" placeholder="Description" />
          <button type="submit" className="btn btn-primary btn-block">Save Book</button>
        </div>
      </form>
    );
  }
});

module.exports = FeedForm;