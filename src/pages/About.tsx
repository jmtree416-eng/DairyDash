import { IonIcon } from "@ionic/react";
import {
  informationCircleOutline,
  timeOutline,
  medicalOutline,
  leafOutline,
  ribbonOutline,
} from "ionicons/icons";
import PageLayout from "../components/PageLayout";
import "./About.css";
import productPhoto from "../assets/Products/premium_milkmoo.png";

const About: React.FC = () => {
  return (
    <PageLayout
      title="About the App"
      eyebrow="DISCOVER THE PLATFORM"
      description="Farm-to-door fresh dairy logistics system."
    >
      <div className="about-card">
        <div className="about-card-header">
          <IonIcon icon={informationCircleOutline} />
          <h2>What is Dairy Dash?</h2>
        </div>
        <p className="about-card-body">
          Dairy Dash is a modern, high-efficiency distribution application
          designed to bridge local premium dairy farms directly with urban
          families. We prioritize freshness, speed, and ecological
          sustainability.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <IonIcon icon={timeOutline} />
            <div>
              <h3>24-Hour Fresh Delivery Guarantee</h3>
              <p>Bottled, chilled, and delivered within 24 hours of milking.</p>
            </div>
          </div>
          <div className="about-feature">
            <IonIcon icon={medicalOutline} />
            <div>
              <h3>No Antibiotics or Added Hormones</h3>
              <p>100% grass-fed cattle from certified local family farms.</p>
            </div>
          </div>
          <div className="about-feature">
            <IonIcon icon={leafOutline} />
            <div>
              <h3>Eco-Friendly Returnable Bottles</h3>
              <p>
                Our glass bottles are thoroughly sanitized and reused to limit
                plastic waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="about-section-title">Our Signature Product</h2>
      <div className="product-card">
        <div className="product-photo">
          <img src={productPhoto} alt="Premium MilkMoo" />
        </div>
        <div className="product-details">
          <div className="product-title-row">
            <h3>Premium MilkMoo</h3>
            <span className="product-price">₱299.00</span>
          </div>
          <p className="product-badge">Best Seller • 100% Organic</p>
          <p className="product-desc">
            Our flagship whole milk, collected fresh daily from cold-climate
            pasture lands. Rich in natural nutrients, non-homogenized, and
            bottled in recyclable retro-style glass.
          </p>
          <div className="product-stats">
            <span className="product-stat">Protein: 8.5g</span>
            <span className="product-stat">Fat: 3.8%</span>
            <span className="product-stat">Calcium: 300mg</span>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <IonIcon icon={ribbonOutline} />
        <div>
          <h3>Dairy Dash v2.4.0</h3>
          <p>
            Crafted with care by the engineering and design team. All rights
            reserved 2026.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
