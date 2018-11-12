import React, {PureComponent} from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {
    state = {
        openArticleID: null
    }

    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list__li">
                <Article article={article}
                         isOpen = {this.state.openArticleID === article.id}
                         onButtonClick = {this.handleClick.bind(this, article.id)}
                />
            </li>);
        return (

            <ul>
                {articleElements}
            </ul>
        )
    }

    handleClick = openArticleID => this.setState({
        openArticleID: this.state.openArticleID === openArticleID ? null : openArticleID
    })
}