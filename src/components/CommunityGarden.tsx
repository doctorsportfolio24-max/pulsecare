import { Flower2, Heart, Camera } from "lucide-react";

const CommunityGarden = () => {
  const gardenImages = [
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2940&auto=format&fit=crop",
      alt: "Vegetable garden with raised beds",
      caption: "Organic Vegetable Gardens"
    },
    {
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=2940&auto=format&fit=crop",
      alt: "Therapy horses in pastoral setting",
      caption: "Equine Therapy Partners"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop",
      alt: "Medicinal herb garden",
      caption: "Healing Herb Sanctuary"
    },
    {
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2940&auto=format&fit=crop",
      alt: "Therapy goats in garden",
      caption: "Animal Therapy Friends"
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2940&auto=format&fit=crop",
      alt: "Greenhouse with healing plants",
      caption: "Greenhouse Sanctuary"
    },
    {
      src: "https://images.unsplash.com/photo-1574263867128-a5d9f6bbe3db?q=80&w=2940&auto=format&fit=crop",
      alt: "Chickens in garden setting",
      caption: "Farm Friends"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-leaf/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Garden & <span className="text-primary">Therapy Animals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with nature and gentle animals in our therapeutic gardens. 
            Experience the healing power of nurturing plants and bonding with our therapy animals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardenImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl h-64">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Camera className="h-4 w-4 mr-2" />
                    {image.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="organic-card p-8">
              <div className="flex items-center mb-6">
                <Flower2 className="h-8 w-8 text-primary mr-3 floating-leaf" />
                <h3 className="text-2xl font-semibold text-foreground">Garden Therapy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Working with soil, plants, and the natural world has profound healing benefits. 
                Our guided gardening sessions help reduce stress, improve mood, and create a sense of purpose and connection.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Organic vegetable cultivation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Medicinal herb gardens
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Seasonal planting workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Harvest-to-table experiences
                </li>
              </ul>
            </div>

            <div className="organic-card p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-accent mr-3 gentle-pulse" />
                <h3 className="text-2xl font-semibold text-foreground">Animal Therapy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our gentle therapy animals provide unconditional love and emotional support. 
                Interactions with horses, goats, chickens, and other farm friends offer profound healing benefits.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Equine-assisted therapy
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Small animal interactions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Animal care workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Farm-to-heart connections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGarden;