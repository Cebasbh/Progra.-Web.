//Import de componentss
import CategoryCard from "../components/ExploreComponents/CategoryCard";

//Import de types
import type { Tag } from "../components/GlobalObjects/Objects_DataTypes";

//Import de css
import "../components/GlobalObjects/Animations.css"
import "../components/GlobalObjects/Global.css"

//Props
interface ExploreTagsProps{
  	tags : Tag[]
}
const ExploreTags = (props: ExploreTagsProps) => {
	return (
		<div className="container my-5">
			<h1 className="mb-4">Explora por tags</h1>
			<div className="row">
				{props.tags.map((tag) => (
				<CategoryCard tag = {tag}></CategoryCard>
				))}
			</div>
		</div>
	);
}

export default ExploreTags;