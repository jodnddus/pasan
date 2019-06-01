import React from 'react';
import { connect } from 'react-redux';
import api from '../../api';
import './MainView.css';
import {
    CHANGE_TAB,
} from '../../constants/actionTypes';
import ArticleList from '../ArticleList';

const YourFeed = props => {
    if (props.token) {
        const handleClick = e => {
            console.log("handleClick");
            e.preventDefault();
            Promise.resolve(api.Articles.feed()).then((res) => {
                props.onTabClick({ type: CHANGE_TAB, payload: res });
            });
        }
        return (
            <a href="''" onClick={handleClick} id="yourfeed-tab" className="feed-tabs">YourFeed</a>
        );
    }
    return null;
}

const GlobalFeed = props => {
    const handleClick = e => {
        console.log("handleClick");
        e.preventDefault();
        Promise.resolve(api.Articles.all()).then((res) => {
            props.onTabClick({ type: CHANGE_TAB, payload: res });
        });
    }

    return (
        <a href="''" onClick={handleClick} id="globalfeed-tab" className="feed-tabs">GlobalFeed</a>
    );
}

const mapStateToProps = state => ({
    ...state.articleList,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onTabClick: payload => dispatch({ type: CHANGE_TAB, payload })
});

const MainView = props => {
    return (
        <React.Fragment>
            <GlobalFeed onTabClick={props.onTabClick} />
            <YourFeed token={props.token} onTabClick={props.onTabClick} />
            <hr />
            <ArticleList articles={props.articles}/>
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);