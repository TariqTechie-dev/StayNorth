const sampleListings = [
  {
    title: "Eagle's Nest Cabin",
    description:
      "Wake up above the clouds in this wooden cabin overlooking the Hunza valley and Rakaposhi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Hunza",
    country: "Pakistan",
    category: "mountains",
  },
  {
    title: "Riverside Cottage",
    description:
      "Fall asleep to the sound of the Kunhar river in this cozy cottage, minutes from Naran bazaar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Naran, Khyber Pakhtunkhwa",
    country: "Pakistan",
    category: "trending",
  },
  {
    title: "Attabad Lake Boathouse",
    description:
      "Float on the turquoise waters of Attabad Lake in this unique boathouse stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Hunza, Gilgit-Baltistan",
    country: "Pakistan",
    category: "boats",
  },
  {
    title: "Khaplu Palace Heritage Stay",
    description:
      "Live like royalty in a 19th-century palace turned heritage hotel in Khaplu.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Khaplu, Gilgit-Baltistan",
    country: "Pakistan",
    category: "castles",
  },
  {
    title: "Deosai Plains Luxury Camp",
    description:
      "Camp under a sky full of stars on the roof of the world, the Deosai plains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Deosai, Gilgit-Baltistan",
    country: "Pakistan",
    category: "camping",
  },
  {
    title: "Dir Valley Farmhouse Retreat",
    description:
      "Fresh air, organic food and total peace at this working farmhouse in Lower Dir.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Lower Dir, Khyber Pakhtunkhwa",
    country: "Pakistan",
    category: "farms",
  },
  {
    title: "Malam Jabba Snow Chalet",
    description:
      "Ski-in, ski-out chalet with a fireplace, right next to the Malam Jabba slopes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Malam Jabba, Khyber Pakhtunkhwa",
    country: "Pakistan",
    category: "arctic",
  },
  {
    title: "Swat Riverside Resort & Pool",
    description:
      "Resort-style stay with a heated pool on the banks of the Swat river.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Kalam, Khyber Pakhtunkhwa",
    country: "Pakistan",
    category: "amazing-pools",
  },
  {
    title: "Neelum Valley Pine Cottage",
    description:
      "A quiet pine-wood cottage in Keran, facing the Neelum river and Indian Kashmir peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Keran, Azad Kashmir",
    country: "Pakistan",
    category: "trending",
  },
  {
    title: "Gilgit Riverside Hotel",
    description:
      "Comfortable city hotel on the Gilgit river — perfect base for your northern adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Gilgit, Gilgit-Baltistan",
    country: "Pakistan",
    category: "iconic-cities",
  },
  {
    title: "Murree Mall Road Family Room",
    description:
      "Spacious family room a 5-minute walk from Mall Road, with heater and hot water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Murree, Punjab",
    country: "Pakistan",
    category: "rooms",
  },
  {
    title: "Kalam Valley Budget Room",
    description:
      "Clean, budget-friendly room in the heart of Kalam bazaar for backpackers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Kalam, Khyber Pakhtunkhwa",
    country: "Pakistan",
    category: "rooms",
  },
];

module.exports = { data: sampleListings };