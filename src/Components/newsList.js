import React, { useState } from 'react';
import NewsItems from './newsItems';
const NewsList = () => {
	const [articles, setArticles] = useState([]);
	const [query, setQuery] = useState('');
	const [message, setMessage] = useState('');

	const apiKey = 'pub_512051a6979be082632cd9b84bc3d8f59aa2';

	const getNews = () => {
		fetch(
			`https://newsdata.io/api/1/news?apikey=${apiKey}&category=${query}&language=en`
		)
			.then((res) => res.json())
			.then((data) => {
				setQuery('');
				setArticles(data.results);
				console.log(data);
			})
			.catch((error) => {
				setMessage(error);
			});
	};

	return (
		<div>
			<h1 style={{ fontSize: '20px', color: 'red' }} className="alert-hd">
				{message}
			</h1>
			<div className="news-box">
				<input
					type="text"
					className="news-input"
					placeholder="Search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<br />
				<br />
				<input
					type="button"
					className="newsBtn"
					value="Explore"
					onClick={getNews}
				/>
			</div>
			<div className="news-list">
				{articles.map(({ title, link, description, image_url }) => (
					<NewsItems
						title={title}
						link={link}
						description={description}
						image_url={image_url}
					/>
				))}
			</div>
		</div>
	);
};
export default NewsList;
