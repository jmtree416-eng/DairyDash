import PageLayout from "../components/PageLayout";
import HeroCarousel, { HeroSlide } from "../components/HeroCarousel";
import "./Products.css";
import "./Dashboard.css";
import milkPhoto from "../assets/Carousel/Milk.png";
import milkDiscountsPhoto from "../assets/Carousel/MilkDiscounts.png";
import moreMilkPhoto from "../assets/Carousel/MoreMilk.png";
import almondBlissPhoto from "../assets/Products/AlmondBliss.webp";
import appleDropsPhoto from "../assets/Products/Apple Drops.webp";
import astroDairyPhoto from "../assets/Products/AstroDairy.webp";
import bananaLooPhoto from "../assets/Products/BananaLoo.webp";
import cerealBlendPhoto from "../assets/Products/Cereal Blend.webp";
import choccyMommyPhoto from "../assets/Products/Choccy Mommy.webp";
import cloudlinePhoto from "../assets/Products/Cloudline.webp";
import crestaDeOroPhoto from "../assets/Products/Cresta de Oro.webp";
import dailyBlendPhoto from "../assets/Products/DailyBlend.webp";
import dreamnCreamPhoto from "../assets/Products/DreamnCream.webp";
import freshMooPhoto from "../assets/Products/FreshMoo.webp";
import freshVillePhoto from "../assets/Products/FreshVille.webp";
import galaSpunPhoto from "../assets/Products/GalaSpun.webp";
import gutenTagPhoto from "../assets/Products/GutenTag.webp";
import latteviaPhoto from "../assets/Products/Lattevia.webp";
import madameKremaPhoto from "../assets/Products/Madame Krema.webp";
import mirukuSuyuPhoto from "../assets/Products/Miruku Suyu.webp";
import mjolkKlidePhoto from "../assets/Products/Mjölk Klide.webp";
import mochaMingkalPhoto from "../assets/Products/Mocha Mingkal.webp";
import nectarBrewPhoto from "../assets/Products/Nectar Brew.webp";
import nectarMingkalPhoto from "../assets/Products/Nectar Mingkal.webp";
import nidaraPhoto from "../assets/Products/Nidara.webp";
import novaLactisPhoto from "../assets/Products/NovaLactis.webp";
import oatSipPhoto from "../assets/Products/OatSip.webp";
import pastureBornePhoto from "../assets/Products/PastureBorne.webp";
import soyPurePhoto from "../assets/Products/SoyPure.webp";
import strawberryDreamsPhoto from "../assets/Products/Strawberry Dreams.webp";
import sweetieSwirlsPhoto from "../assets/Products/Sweetie Swirls.webp";
import ubeBerryBearPhoto from "../assets/Products/Ube Berry Bear.webp";
import velvetPourPhoto from "../assets/Products/VelvetPour.webp";

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
  description: string;
  photo: string;
}

const allFeaturedProducts: FeaturedProduct[] = [
  { name: "Almond Bliss", price: "₱299.00", description: "Creamy almond blend with a smooth nutty finish", photo: almondBlissPhoto },
  { name: "Apple Drops", price: "₱180.00", description: "Crisp apple-flavored dairy delight", photo: appleDropsPhoto },
  { name: "AstroDairy", price: "₱329.00", description: "An adventurous, out-of-this-world dairy blend", photo: astroDairyPhoto },
  { name: "BananaLoo", price: "₱199.00", description: "Creamy probiotic yogurt blend", photo: bananaLooPhoto },
  { name: "Cereal Blend", price: "₱240.00", description: "Crunchy cereal-inspired dairy treat", photo: cerealBlendPhoto },
  { name: "Choccy Mommy", price: "₱349.00", description: "Rich chocolate-flavored dairy drink", photo: choccyMommyPhoto },
  { name: "Cloudline", price: "₱260.00", description: "Silky milk with a cool, airy finish", photo: cloudlinePhoto },
  { name: "Cresta de Oro", price: "₱290.00", description: "Golden, velvety dairy refreshment", photo: crestaDeOroPhoto },
  { name: "DailyBlend", price: "₱269.00", description: "Everyday wellness in a smooth milk bottle", photo: dailyBlendPhoto },
  { name: "Dream 'n' Cream", price: "₱259.00", description: "A rich, dreamy blend of fresh cream and milk", photo: dreamnCreamPhoto },
  { name: "FreshMoo", price: "₱299.00", description: "Freshly made and produced milk", photo: freshMooPhoto },
  { name: "FreshVille", price: "₱279.00", description: "Farm-fresh dairy essentials made daily", photo: freshVillePhoto },
  { name: "GalaSpun", price: "₱230.00", description: "Sweet, spun dairy goodness", photo: galaSpunPhoto },
  { name: "GutenTag", price: "₱210.00", description: "German-inspired creamy classic", photo: gutenTagPhoto },
  { name: "Lattevia", price: "₱189.00", description: "A smooth, latte-inspired dairy delight", photo: latteviaPhoto },
  { name: "Madame Krema", price: "₱310.00", description: "Elegant, creamy milk with a luxurious feel", photo: madameKremaPhoto },
  { name: "Miruku Suyu", price: "₱245.00", description: "Light and silky dairy drink from the tropics", photo: mirukuSuyuPhoto },
  { name: "Mjölk Klide", price: "₱270.00", description: "A cozy, comforting milk favorite", photo: mjolkKlidePhoto },
  { name: "Mocha Mingkal", price: "₱260.00", description: "Smooth mocha-inspired dairy blend", photo: mochaMingkalPhoto },
  { name: "Nectar Brew", price: "₱200.00", description: "Honeyed sip with a refreshing finish", photo: nectarBrewPhoto },
  { name: "Nectar Mingkal", price: "₱225.00", description: "Sweet, mellow dairy nectar", photo: nectarMingkalPhoto },
  { name: "Nidara", price: "₱240.00", description: "Botanical-inspired dairy comfort", photo: nidaraPhoto },
  { name: "NovaLactis", price: "₱320.00", description: "Modern milk crafted for everyday energy", photo: novaLactisPhoto },
  { name: "OatSip", price: "₱175.00", description: "Creamy oat-milk fusion", photo: oatSipPhoto },
  { name: "PastureBorne", price: "₱219.00", description: "Pure milk sourced straight from open pastures", photo: pastureBornePhoto },
  { name: "SoyPure", price: "₱195.00", description: "Plant-powered soy milk with a smooth finish", photo: soyPurePhoto },
  { name: "Strawberry Dreams", price: "₱150.00", description: "Strawberry flavored milk", photo: strawberryDreamsPhoto },
  { name: "Sweetie Swirls", price: "₱170.00", description: "Sweet dairy swirls with vanilla notes", photo: sweetieSwirlsPhoto },
  { name: "Ube Berry Bear", price: "₱220.00", description: "Velvety ube berry favorite", photo: ubeBerryBearPhoto },
  { name: "VelvetPour", price: "₱280.00", description: "Velvety smooth and indulgently rich", photo: velvetPourPhoto },
];

const featuredProducts = allFeaturedProducts.slice(0, 9);

const Dashboard: React.FC = () => {
  return (
    <PageLayout title="Dashboard">
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
              <p className="product-tile-desc">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Dashboard;
