import styles from "./Portfolio.module.scss"
import { TagCloud } from "react-tagcloud"
import Select from "react-select";
import { useQuery, useQueryClient } from "react-query";


const tagsRenderer = (tag, size, color) => (
	<span
		key={tag.value}
		className={styles.listMenuStable}
	>
		{tag.value}
	</span>
)

const PortfolioList = ({ posts, tags, }) => {

	const cards = posts.data;
	const tagsList = tags.data;
	const tagsData = tagsList.map(({ attributes: { value, count }, ...item }) => ({ ...item, value: value, count: count }));

	const handleTags = (values) => {
		console.log(values);
	}

	const handleTags2 = (tag) => {
		console.log(tag);
	}

	return (
		<div className={`container`}>
			<div className={`row`}>
				<Select
					getOptionLabel={option => `${option.value}`}
					getOptionValue={option => `${option.id}`}
					options={tagsData}
					instanceId="tags"
					isMulti
					placeholder="Filter"
					onChange={values => handleTags(values.map(tag => tag.id))}
				/>

				<TagCloud
					minSize={10}
					maxSize={10}
					renderer={tagsRenderer}
					tags={tagsData}
					onClick={tag => handleTags2(tag)} //
					className={styles.listMenu}
				/>




				{data && data.map(({ id, attributes }) => (
					<div className={`col-xl-4 col-lg-6 col-md-6`} key={id}>
						<div style={{ background: `${attributes.background}`, border: `${attributes.borderWidth}px solid ${attributes.borderColor}` }} className={styles.card}>
							<div className={styles.logoCard}>
								<object>
									<img src={`http://localhost:1337${attributes.previewSvg.data.attributes.url}`} ></img>
								</object>
							</div>

							<div className={styles.darken}>
								<div className={styles.cardDescription}>
									<p>{attributes.title} </p>
									<p>{attributes.text}</p>
									{
										attributes.tags.data && attributes.tags.data.map(({ id, attributes }) => (<p key={id}>{attributes.value}</p>))
									}
								</div>
							</div>
						</div>
					</div>
				))}


			</div>
		</div>
	)
};

export default PortfolioList;