import React from "react"

const SearchForm = props => (
    <form>
        <label>
            Search Term:
        <input
            onChange={props.handleInputChange}
            value={props.value}
            type="input"
            name="search" 
            className="search"/>
        </label>
        <br />
        <label>
            Number of Results:
            <select 
                onChange={props.handleInputChange}
                value={props.value}
                type="select"
                name="article-num"
                className="article-num">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option selected value="10">10</option>
            </select>
        </label>
        <br/>
        <label>
            Start Year (Optional):
            <input
                onChange={props.handleInputChange}
                value={props.value}
                type="text"
                name="search" 
                className="start"/>
        </label>
        <br/>
        <label>
            End Year (Optional):
            <input
                onChange={props.handleInputChange}
                value={props.value}
                type="text"
                name="search" 
                className="start"/>
        </label>
        <br/>
        <input type="submit" value="Submit" className="btn btn-primary" onClick={props.handleFormSubmit}/>
        <input type="submit" value="Clear Search" className="btn btn-primary" onClick={props.handleFormSubmit} />
    </form >
)

export default SearchForm