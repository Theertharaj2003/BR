import React from 'react';
import './Broucher.css';

const Brochure = () => {
  const packages = [
    {
      name: 'Starter',
      price: '15,000',
      features: [
        'Up to 3 pages',
        'Mobile responsive design',
        'Social media integration',
        'Basic SEO setup',
        'Fast delivery (3-5 days)'
      ],
      breakdown: [
        { item: 'Domain', cost: '1,000' },
        { item: 'Hosting (1 year)', cost: '3,000' },
        { item: 'Development', cost: '9,000' },
        { item: 'SSL (optional)', cost: '1,000' }
      ]
    },
    {
      name: 'Growth',
      price: '20,000',
      features: [
        'Up to 5 pages',
        'Custom animations',
        'Brand color integration',
        'On-page SEO with keywords',
        'Image optimization',
        'Click-to-call button'
      ],
      breakdown: [
        { item: 'Domain', cost: '1,000' },
        { item: 'Hosting (1 year)', cost: '3,000' },
        { item: 'Development', cost: '11,000' },
        { item: '5 Pages', cost: '10,000' }
      ]
    },
    {
      name: 'Professional',
      price: '36,000',
      popular: true,
      features: [
        'Up to 10 pages',
        'Semi-custom design',
        'Hero banners & sliders',
        'Blog setup (optional)',
        'Strong on-page SEO',
        'Speed optimization',
        'Performance testing'
      ],
      breakdown: [
        { item: 'Domain', cost: '1,000' },
        { item: 'Hosting (1 year)', cost: '3,000' },
        { item: 'Development', cost: '18,000' },
        { item: '10 Pages', cost: '30,000' }
      ]
    },
    {
      name: 'Business',
      price: '65,000',
      features: [
        'Up to 12-15 pages',
        'Advanced custom layout',
        'Gallery/Portfolio modules',
        'Blog with categories',
        'Speed optimization + caching',
        'Security configuration',
        'API integration (optional)'
      ],
      breakdown: [
        { item: 'Domain', cost: '1,000' },
        { item: 'Hosting (1 year)', cost: '3,000' },
        { item: 'Development', cost: '25,000' },
        { item: '15 Pages', cost: '75,000' }
      ]
    },
    {
      name: 'Enterprise',
      price: '90,000',
      features: [
        'Fully custom design',
        'Unlimited pages',
        'High-end UI/UX animations',
        'Custom graphics & branding',
        'CRM/Booking integration',
        'Advanced SEO (Schema)',
        '90+ performance score',
        'Content writing & logo included'
      ],
      breakdown: [
        { item: 'Domain', cost: '1,000' },
        { item: 'Hosting (1 year)', cost: '3,000' },
        { item: 'Development', cost: '32,000' },
        { item: 'Custom Pages', cost: 'Varies' }
      ]
    }
  ];

  const addOns = [
    {
      title: 'Content Writing',
      description: '₹500 per page - Professional, SEO-optimized content crafted for your audience'
    },
    {
      title: 'Custom Features',
      description: 'Starting at ₹5,000 - Custom forms, logos, integrations, and more'
    },
    {
      title: 'E-Commerce Setup',
      description: '₹50,000 extra - Complete online store with payment gateway integration'
    },
    {
      title: 'GST',
      description: '18% GST applied to final invoice as per government regulations'
    }
  ];

  const maintenancePlans = [
    {
      name: 'Basic Care',
      price: '4,000',
      features: [
        'Monthly security checks',
        'Plugin/theme updates',
        'Website backups',
        'Minor updates (2/month)'
      ]
    },
    {
      name: 'Standard Care',
      price: '7,000',
      features: [
        'Everything in Basic',
        'Content updates (6/month)',
        'Quarterly speed optimization',
        'Priority support'
      ]
    },
    {
      name: 'Premium Care',
      price: '12,000',
      features: [
        'Unlimited content changes',
        'Advanced security',
        'Monthly optimization',
        '24/7 priority support'
      ]
    }
  ];

  const contacts = ['6366015124', '8088953994', '7760898826'];

  return (
    <div className="brochure">
      <header className="header">
        <h1>NIMBLIX</h1>
        <p className="tagline">Professional Web Development Solutions</p>
      </header>

      <section className="intro">
        <h2>Transform Your Business Online</h2>
        <p>
          From startups to established enterprises, we craft stunning, high-performance websites
          tailored to your vision. Transparent pricing, flexible packages, and ongoing support—your
          success is our mission.
        </p>
      </section>

      <section className="packages">
        <h2 className="packages-title">Our Packages</h2>
        <div className="package-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="starting">Starting at</span>
                  ₹{pkg.price}
                </div>
              </div>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="price-breakdown">
                <h4>What's Included:</h4>
                {pkg.breakdown.map((item, idx) => (
                  <div key={idx} className="price-row">
                    <span>{item.item}</span>
                    <span>₹{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="additional-services">
        <h2>Add-On Services</h2>
        <div className="services-grid">
          {addOns.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="maintenance-plans">
        <h2>Monthly Maintenance Plans</h2>
        <div className="maintenance-grid">
          {maintenancePlans.map((plan, index) => (
            <div key={index} className="maintenance-card">
              <h3>{plan.name}</h3>
              <div className="price">
                ₹{plan.price}
                <span className="per-month">/month</span>
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="payment-terms">
        <h2>Simple Payment Terms</h2>
        <p className="payment-subtitle">We believe in transparency and trust</p>
        <div className="payment-steps">
          <div className="payment-step">
            <div className="number">30%</div>
            <p>
              Advance Payment
              <br />
              to begin work
            </p>
          </div>
          <div className="payment-step">
            <div className="number">50%</div>
            <p>
              After Design
              <br />
              Approval
            </p>
          </div>
          <div className="payment-step">
            <div className="number">20%</div>
            <p>
              After Final
              <br />
              Deployment
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h2>Let's Build Something Amazing</h2>
        <p className="footer-subtitle">Contact the Nimblix Team today</p>
        <div className="contact-info">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-item">
              📱 <a href={`tel:${contact}`}>{contact}</a>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Brochure;