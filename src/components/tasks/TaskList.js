import React from "react";
import { connect } from "react-redux";
import { fetchTasks, fetchUsers } from "../../redux/actions";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "../common/LoadingIndicator";

class TaskList extends React.Component {
  componentDidMount() {
    const { fetchTasks, fetchUsers } = this.props;

    trackPromise(fetchTasks());
    fetchUsers();
  }

  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/tasks/new">Create Task</Link>
      </div>
    );
  }

  renderList() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Requested By</th>
            <th>Date Requested</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task) => {
            return (
              <tr key={task.ID}>
                <td>{task.TITLE}</td>
                <td>{task.DESCRIPTION}</td>
                <td>{task.USER_NAME}</td>
                <td>{task.DATE_REQUESTED}</td>
                <td>
                  <Link
                    to={"/tasks/edit/" + task.ID}
                    className="btn btn-outline-success"
                  >
                    View
                  </Link>
                </td>
                <td>
                  <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <>
        {this.renderCreate()}
        {this.renderList()}
        {this.props.tasks.length < 1 && <LoadingIndicator />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks:
      state.users.length === 0
        ? []
        : state.tasks.map((task) => {
            return {
              ...task,
              USER_NAME: state.users.find(
                (user) => user.EMPLOYEEID === task.REQUESTED_BY
              ).FULL_NAME,
            };
          }),
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchTasks, fetchUsers })(TaskList);
