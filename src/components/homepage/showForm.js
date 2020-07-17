import React, { Component } from "react";
import ShowList from '../show-list';
import LoaderComponent from '../loader';
import axios from 'axios';
import Form from './inputForm';
import { TITLE } from '../constants';

class ShowForm extends Component {
    state = {
        showsData: null,
        inputValue: "",
        isLoading: false,
    }

    searchInputValue = (inputValue) => {
        if (inputValue) {
            axios.get(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
                .then((response) => {
                    const result = response.data.map((showData) => showData.show);
                    this.setState({ showsData: result, isLoading: false });
                })
                .catch(() => this.setState({ isLoading: true }));
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const inputValue = e.target.value;
        this.setState((state) => ({ ...state, inputValue }));
        this.searchInputValue(inputValue);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = this.state.inputValue;
        this.searchInputValue(inputValue);
    };

    fetchGenresData = () => {
        const { showsData } = this.state;
        let genresType = new Set();
        if (showsData) {
            showsData.filter((show) => {
                genresType.add(...show.genres);
            });
        }
        return [...genresType];
    };

    render() {
        const { showsData, inputValue, isLoading } = this.state
        const genresData = this.fetchGenresData();

        return (
            <div>
                <h1>{TITLE}</h1>
                <Form handleChange={this.handleChange}
                      inputValue={inputValue}
                      handleSubmit={this.handleSubmit} />
                <div>{
                     isLoading && <LoaderComponent/>
                    }
                    {genresData.length ? (
                        genresData.map((genreType, index) => (
                            <ShowList type={genreType} shows={showsData} key={index} />
                        ))
                    ) : null}
                </div>
            </div>
        )
    }
}

export default ShowForm;