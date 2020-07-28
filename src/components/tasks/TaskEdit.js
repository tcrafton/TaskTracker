import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { editTask } from "../../redux/actions";
import TaskForm from "./TaskForm";

class TaskEdit extends React.Component {
  onSubmit = (formValues) => {
    this.props.editTask(formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit Task</h3>
        <TaskForm
          initialValues={_.pick(
            this.props.task,
            "ID",
            "TITLE",
            "DESCRIPTION",
            "REQUESTED_BY",
            "FULL_NAME"
          )}
          users={this.props.users}
          tasks={this.props.tasks}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks.filter(
      (t) => t.ID === parseInt(ownProps.match.params.id, 10)
    )[0],
    users: state.users,
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { editTask })(TaskEdit);
