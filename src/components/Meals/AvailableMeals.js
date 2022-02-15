import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'pizza',
    description: 'Veg Margherita with full cheese',
    price: 299,
  },
  {
    id: 'm2',
    name: 'burger',
    description: 'Veg cheese burger',
    price: 59,
  },
  {
    id: 'm3',
    name: 'Rolls',
    description: 'veg rolls',
    price: 39,
  },
  {
    id: 'm4',
    name: 'Water',
    description: 'hydrated always',
    price: 18,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
