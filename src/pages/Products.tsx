import { IonSearchbar } from "@ionic/react";
import PageLayout from "../components/PageLayout";
import "./Products.css";
import astroDairyPhoto from "../assets/Products/AstroDairy.png";
import bananaLooPhoto from "../assets/Products/BananaLoo.png";
import choccyMommyPhoto from "../assets/Products/Choccy Mommy.png";
import dreamnCreamPhoto from "../assets/Products/DreamnCream.png";
import freshMooPhoto from "../assets/Products/FreshMoo.png";
import freshVillePhoto from "../assets/Products/FreshVille.png";
import lattevlaPhoto from "../assets/Products/Lattevia.png";
import mjolkKlidePhoto from "../assets/Products/Mjölk Klide.png";
import pastureBornePhoto from "../assets/Products/PastureBorne.png";
import premiumMilkMooPhoto from "../assets/Products/premium_milkmoo.png";
import strawberryDreamsPhoto from "../assets/Products/Strawberry Dreams.png";

interface Product {
  name: string;
  price: string;
  description: string;
  photo?: string;
}

const products: Product[] = [
  {
    name: "FreshMoo",
    price: "₱299.00",
    description: "Freshly made and produced milk",
    photo: freshMooPhoto,
  },
  {
    name: "Choccy Mommy",
    price: "₱349.00",
    description: "Rich chocolate-flavored dairy drink",
    photo: choccyMommyPhoto,
  },
  {
    name: "BananaLoo",
    price: "₱199.00",
    description: "Creamy probiotic yogurt blend",
    photo: bananaLooPhoto,
  },
  {
    name: "Dream 'n' Cream",
    price: "₱259.00",
    description: "A rich, dreamy blend of fresh cream and milk",
    photo: dreamnCreamPhoto,
  },
  {
    name: "AstroDairy",
    price: "₱329.00",
    description: "An adventurous, out-of-this-world dairy blend",
    photo: astroDairyPhoto,
  },
  {
    name: "FreshVille",
    price: "₱279.00",
    description: "Farm-fresh dairy essentials made daily",
    photo: freshVillePhoto,
  },
  {
    name: "Strawberry Dreams",
    price: "₱150.00",
    description: "Strawberry flavored milk",
    photo: strawberryDreamsPhoto,
  },
  {
    name: "Lattevia",
    price: "₱189.00",
    description: "A smooth, latte-inspired dairy delight",
    photo: lattevlaPhoto,
  },
  {
    name: "PastureBorne",
    price: "₱219.00",
    description: "Pure milk sourced straight from open pastures",
    photo: pastureBornePhoto,
  },
];

const Products: React.FC = () => {
  return (
    <PageLayout
      title="List of Products"
      eyebrow="CATALOG"
      description="Browse and manage your product line."
    >
      <IonSearchbar
        className="product-search"
        placeholder="Search products..."
      />

      <div className="products-section-header">
        <h2>Featured Products</h2>
        <span className="products-see-all">See All</span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-tile" key={product.name}>
            <div className="product-tile-photo">
              {product.photo && <img src={product.photo} alt={product.name} />}
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

export default Products;
