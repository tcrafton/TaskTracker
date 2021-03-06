import React from "react";
import { connect } from "react-redux";
import { createTask, fetchUsers } from "../../redux/actions";
import TaskForm from "./TaskForm";

class TaskCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTask(formValues);
    this.props.fetchUsers();
  };

  render() {
    return (
      <div>
        <h3>Create a Task</h3>
        <TaskForm onSubmit={this.onSubmit} users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  createTask, fetchUsers
})(TaskCreate);
