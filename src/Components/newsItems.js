import React from 'react';

const NewsItems = ({ title, link, description, image_url }) => {
	return (
		<div>
			<div style={{ border: '1px dashed black' }}>
				<img src={image_url} alt="" height="230" width="280" />
				<h1 style={{ fontSize: '22px' }} className="article-h1">
					<a href={link} target="_self">
						{title}
					</a>
				</h1>
				<p style={{ fontSize: '19px' }} className="desc-p">
					{description}
				</p>
			</div>
		</div>
	);
};

export default NewsItems;
