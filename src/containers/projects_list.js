import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProjects } from '../actions';
import ProjectItem from '../components/projects_list_item';

class ProjectsList extends Component {
    componentDidMount() {
        this.setState({ projects: this.props.fetchProjects() })
    };
    
    renderProjectItems(projects) {
        if(!projects) return <i>No projects yet.</i>;
        return(
            <ul>
                { projects.map(project => {
                    return <ProjectItem key={ project.id } project={ project } />
                })}
            </ul>
        );
    };
    
    render() {
        return(
            <div>
                <h1>Projects</h1>
                { this.renderProjectItems(this.props.projects) }
            </div>
        );
    }
}

function mapStateToProps({ projects }) {
    return { projects };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProjects
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);