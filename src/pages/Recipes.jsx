import RecipeCard from "../components/RecipeCard"
import RecipeOneImage from "../assets/images/recipe-one.png"
import RecipeTwoImage from "../assets/images/recipe-two.png"
import RecipeThreeImage from "../assets/images/recipe-three.png"
import RecipeFourImage from "../assets/images/recipe-four.png"
import BottomNav from "../components/BottomNav"


const Recipes = () => {
  return (
    <><div className="p-10">
      <h3 className="text-center text-xl pt-4 mb-16 font-semibold">Search</h3>
      <div>
        <h3 className="font-semibold text-xl pb mb-1">What is in your kitchen?</h3>
        <p className="text-sm text-[#424242]">Enter some ingredients</p>
      </div>
      <div className="border-solid border-2 border-[#00B4BF] w-[312px] h-12 pt-2 pl-3 rounded-[10px] mt-3 mb-3">
        <form action=""><input type="search" placeholder="Type your ingredients" /></form>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-3 mx-auto my-auto">
        <RecipeCard
          image={RecipeOneImage}
          name="Chorizo & mozzarella gnocchi bake" />
        <RecipeCard
          image={RecipeTwoImage}
          name="Coconut & squash curry" />
        <RecipeCard
          image={RecipeThreeImage}
          name="Huevos Rancheros" />
        <RecipeCard
          image={RecipeFourImage}
          name="Black forest Gateau" />
      </div>

    </div><BottomNav /></>
  )
}

export default Recipes