import React from 'react'
import CategoryCards from '../components/CategoryCards'
import CategoryCardOne from '../assets/images/category-1.png'
import CategoryCardTwo from '../assets/images/category-2.png'
import CategoryCardThree from '../assets/images/category-3.png'
import CategoryCardFour from "../assets/images/category-4.png"
import CategoryCardFive from "../assets/images/category-5.png"
import CategoryCardSix from "../assets/images/category-6.png"
import CategoryCardSeven from "../assets/images/category-7.png"
import BottomNav from '../components/BottomNav'

const Categories = () => {
  return (
    <><div>
      Categories
      <CategoryCards
        image={CategoryCardOne}
        name="Breakfast" />
      <CategoryCards
        image={CategoryCardTwo}
        name="Lunch" />
      <CategoryCards
        image={CategoryCardThree}
        name="Drinks" />
      <CategoryCards
        image={CategoryCardFour}
        name="Pastas" />
      <CategoryCards
        image={CategoryCardFive}
        name="Salads" />
      <CategoryCards
        image={CategoryCardSix}
        name="Desserts" />
      <CategoryCards
        image={CategoryCardSeven}
        name="Soups" />
    </div><BottomNav /></>
  )
}

export default Categories