
import React from 'react';



const NewsItem = (props) = {

	const items = props.news.map((item)=>{
		return (
			<div>
				<p>{item.news.title}</p>
				<p>{item.news.feed}</p>
			</div>
		)
	});
	
	return (
		<div>
			{items}
		</div>	
	)
}

export default NewsItem;