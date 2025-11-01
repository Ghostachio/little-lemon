const Menu = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      price: 12.99,
      image: "./menu1.jpg",
      description:
        "Classic Italian pasta with creamy egg sauce, pancetta, and Parmesan cheese.",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      price: 14.5,
      image: "./menu2.jpg",
      description:
        "Tender chicken cooked in a rich and creamy spiced tomato sauce, served with basmati rice.",
    },
    {
      id: 3,
      title: "Vegan Buddha Bowl",
      price: 10.0,
      image: "./menu3.jpg",
      description:
        "A colorful mix of quinoa, roasted vegetables, chickpeas, and tahini dressing.",
    },
  ];

  return (
    <section className="menu-container">
      <div className="menu-header">
        <h2>This Weeks Special</h2>
        <button>Order Now!</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt={recipe.title} />
              <div className="menu-content">
                <div className="heading">
                  <h5>{recipe.title}</h5>
                  <p>{recipe.price}</p>
                </div>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn">Order Now!</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
