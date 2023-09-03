import React from 'react';
import CustomCard from './Cards';
import '/Volumes/dev/littlelemon/src/components/Main.css';
import bruschetta from '/Volumes/dev/littlelemon/src/images/Bruschetta.png'
import greek from '/Volumes/dev/littlelemon/src/images/Greek salad.png'
import cake from '/Volumes/dev/littlelemon/src/images/Lemon dessert.png'

const cardData = [
  {
    image: greek,
    title: 'Greek Salad',
    description: 'Enjoy a fresh and vibrant Greek salad featuring crisp lettuce, ripe tomatoes, cucumbers, Kalamata olives, feta cheese, and a zesty Greek dressing. A healthy and flavorful choice for salad enthusiasts.',
  },
  {
    image: bruschetta,
    title: 'Bruschetta',
    description: 'Savor the delightful taste of bruschetta, a classic Italian appetizer. Crispy toasted bread is topped with ripe diced tomatoes, garlic, basil, and a drizzle of extra-virgin olive oil. A burst of Mediterranean flavors in every bite.',
  },
  {
    image: cake,
    title:'Lemon Cake',
    description: "Indulge in the heavenly sweetness of our homemade lemon cake. Moist and citrusy, it's a delightful treat with layers of lemon-infused cake, lemon curd filling, and a fluffy lemon cream frosting. A perfect ending to your meal."

  }
];

function Main() {
    return (
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card-container">
                <CustomCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Main;

  
  
  