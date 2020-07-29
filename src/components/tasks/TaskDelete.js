import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import Modal from "../common/Modal";
import { deleteTask } from "../../redux/actions/index";

class TaskDelete extends React.Component {
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTask(id)}
          className="btn btn-danger"
          style={{ margin: "1em" }}
        >
          Delete
        </button>
        <Link to="/tasks" className="btn btn-secondary">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.task) {
      return "Are you sure you want to delete this task?";
    }

    return (
      <span>
        <p>Are you sure you want to delete the task:</p>
        <p>{this.props.task.TITLE}</p>
      </span>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/tasks")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks.filter((t) => t.ID === parseInt(ownProps.match.params.id, 10))[0],
  };
};

export default connect(mapStateToProps, { deleteTask })(TaskDelete);
