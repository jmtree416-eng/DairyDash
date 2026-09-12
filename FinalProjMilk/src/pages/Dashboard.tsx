import PageLayout from "../components/PageLayout";
import HeroCarousel, { HeroSlide } from "../components/HeroCarousel";
import "./Products.css";
import "./Dashboard.css";
import milkPhoto from "../assets/Carousel/Milk.png";
import milkDiscountsPhoto from "../assets/Carousel/MilkDiscounts.png";
import moreMilkPhoto from "../assets/Carousel/MoreMilk.png";
import freshMooPhoto from "../assets/Products/FreshMoo.png";
import choccyMommyPhoto from "../assets/Products/Choccy Mommy.png";
import bananaLooPhoto from "../assets/Products/BananaLoo.png";
import dreamnCreamPhoto from "../assets/Products/DreamnCream.png";
import astroDairyPhoto from "../assets/Products/AstroDairy.png";
import freshVillePhoto from "../assets/Products/FreshVille.png";

const heroSlides: HeroSlide[] = [
  {
    tag: "New Arrivals",
    title: "Fresh From the Farm",
    subtitle: "Premium dairy products delivered to your door",
    photo: milkPhoto,
  },
  {
    tag: "Limited Time",
    title: "Weekend Discounts",
    subtitle: "Save on your favorite dairy essentials",
    photo: milkDiscountsPhoto,
  },
  {
    tag: "Just In",
    title: "New Flavors Added",
    subtitle: "Try our latest seasonal creations",
    photo: moreMilkPhoto,
  },
];

interface FeaturedProduct {
  name: string;
  price: string;
  photo: string;
}

const featuredProducts: FeaturedProduct[] = [
  { name: "FreshMoo", price: "₱299.00", photo: freshMooPhoto },
  { name: "Choccy Mommy", price: "₱349.00", photo: choccyMommyPhoto },
  { name: "BananaLoo", price: "₱199.00", photo: bananaLooPhoto },
  { name: "Dream 'n' Cream", price: "₱259.00", photo: dreamnCreamPhoto },
  { name: "AstroDairy", price: "₱329.00", photo: astroDairyPhoto },
  { name: "FreshVille", price: "₱279.00", photo: freshVillePhoto },
];

const Dashboard: React.FC = () => {
  return (
    <PageLayout
      title="Dashboard"
      eyebrow="OVERVIEW"
      description="Your milk shop at a glance."
    >
      <HeroCarousel slides={heroSlides} />

      <div className="products-section-header">
        <h2>Featured Products</h2>
        <span className="products-see-all">See All</span>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <div className="product-tile" key={product.name}>
            <div className="product-tile-photo">
              <img src={product.photo} alt={product.name} />
            </div>
            <div className="product-tile-info">
              <h3>{product.name}</h3>
              <p className="product-tile-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-overview">
        <h3>Dashboard Overview</h3>
        <p>
          Serves as the main landing page of the application. Displays an
          overview of important information, products, or activities.
        </p>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
