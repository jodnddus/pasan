import React from 'react';
import ArticlePreview from './ArticlePreview';

// 프레젠테이셔널 컴포넌트
const ArticleList = props => {
    if (!props.articles) {
        return (
            <h1>Loading...</h1>
        );
    }

    if (props.articles.length === 0) {
        return (
            <h1>No articles...</h1>
        );
    }
    
    return (
        <div className="articles">
            {
                props.articles.map((article, i) => {
                    return (
                        <ArticlePreview article={article} key={i} />
                    );
                })
            }
        </div>
    );
}

export default ArticleList;