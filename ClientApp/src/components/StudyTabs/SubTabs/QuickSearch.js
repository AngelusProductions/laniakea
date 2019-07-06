import React, { Component, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ReactDataGrid from 'react-data-grid';
import { Toolbar, Data } from "react-data-grid-addons";

import { actionCreators } from '../../../store/Searches'
import '../../../css/searches.css'

class QuickSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            siteField: "",
            subjectField: "",
            visitField: "",
            formField: "",
            fieldField: "",
            answerField: ""
        }
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.masterSearch(this.state, this.props.state.studies.currentStudyId, this.props.state.studies.currentStudyId) //change this to studycomponentId when you get a chance
    }

    onFieldChange(e) { this.setState({ [e.target.name]: e.target.value }) }

    renderSearchFields() {
        const fields = ["site", "subject", "visit", "form", "field", "answer"]
        return fields.map( field => {
            const id = `${field}Search`
            const stateField = `${field}Field`
            return (
                <input
                    type="text"
                    id={id}
                    key={id}
                    name={stateField}
                    placeholder={field}
                    className="data-search-input"
                    value={this.state[stateField]}
                    onChange={this.onFieldChange.bind(this)}
                />
            )
        })
    }
    
    render() {
        let table
        const results = this.props.state.searches.results
        const selectors = Data.Selectors;
        if (results.length > 0) {
            const columns = Object.keys(results[0]).map(title => {
                return {
                    key: title,
                    name: title,
                    filterable: true,
                    sortable: true,
                    resizable: true
                }
            })
            const handleFilterChange = filter => filters => {
                const newFilters = { ...filters };
                if (filter.filterTerm) {
                    newFilters[filter.column.key] = filter;
                } else {
                    delete newFilters[filter.column.key];
                }
                return newFilters;
            };
            function getRows(rows, filters) { return selectors.getRows({ rows, filters }) }
            const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
                const comparer = (a, b) => {
                    if (sortDirection === "ASC") {
                        return a[sortColumn] > b[sortColumn] ? 1 : -1;
                    } else if (sortDirection === "DESC") {
                        return a[sortColumn] < b[sortColumn] ? 1 : -1;
                    }
                };
                return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
            };
            function Table({ initialRows}) {
                const [rows, setRows] = useState(initialRows);
                const [filters, setFilters] = useState({});
                const filteredRows = getRows(rows, filters);
                return (
                    <ReactDataGrid
                        columns={columns}
                        rowGetter={ i => filteredRows[i] }
                        rowsCount = { filteredRows.length }
                        toolbar={ <Toolbar enableFilter={true} /> }
                        minHeight={1000}
                        headerRowHeight={30}
                        rowHeight={20}
                        onAddFilter={ filter => setFilters(handleFilterChange(filter)) }
                        onClearFilters={ () => setFilters({}) }
                        onGridSort={ (sortColumn, sortDirection) =>
                            setRows(sortRows(initialRows, sortColumn, sortDirection))
                        }
                    />
                )
            }
            table = <Table initialRows={results} />
        }
        const loadingGif = this.props.state.searches.isLoading ? <img src="https://ness-production.s3.amazonaws.com/NESSLogo.gif" id="loadingGif" alt="ness" /> : ''
        return (
            <div id="quickSearchWrapper">
                <img id="quickSearchIcon" src="https://ness-production.s3.amazonaws.com/searchIcon.png" alt="master-search" />
                <div id="quickSearchTitle">Quick search</div>
                <div id="quickSearchFieldsWrapper">{this.renderSearchFields.bind(this)()}</div>
                <button 
                    id="quickSearchButton"
                    type="button"
                    onClick={this.onSubmit.bind(this)}
                >go</button>
                    {loadingGif}
                <div id="dataResultsWrapper">{table}</div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => {
        const { studies, searches } = state
        return { state: { studies, searches } }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(QuickSearch))
