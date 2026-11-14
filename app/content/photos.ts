/**
 * Photography used across the site. Every photo is from Unsplash and was checked
 * as "Free to use under the Unsplash License" (no Unsplash+ images). Files are
 * served from Unsplash's image CDN, which is how Unsplash asks images to be used.
 * Credits are listed on /credits.
 */
export type Photo = {
  id: string; // images.unsplash.com path
  alt: string;
  by: string;
  handle: string;
  page: string; // unsplash.com/photos/...
};

export const photos = {
  views: { id: "photo-1614112163164-e8749a2e7628", alt: "People watching a screen in a dark room, lit by its glow", by: "Katherine Hanlon", handle: "tinymountain", page: "man-in-blue-shirt-lying-on-bed-rQrZDwxQulE" },
  instream: { id: "photo-1634651754953-1565eca58d5c", alt: "A television glowing in a dark, purple-lit room", by: "Moreno Matković", handle: "darkindigo88", page: "a-television-sitting-on-top-of-a-table-in-a-dark-room-A_7s4tbP6lI" },
  infeed: { id: "photo-1588058365548-9efe5acb8077", alt: "A hand scrolling a feed on a smartphone", by: "Plann", handle: "plann_images", page: "person-holding-white-samsung-android-smartphone-8IhVh0xU2Hc" },
  shorts: { id: "photo-1727334291061-fd29582ef9dc", alt: "A phone held upright, filming vertical video at night", by: "Luciano Oliveira", handle: "lucianooliveira", page: "a-person-taking-a-picture-with-a-cell-phone-LX3YF0Rv524" },
  display: { id: "photo-1634233036668-4a708f02d718", alt: "Illuminated billboards above a busy city street at night", by: "Christopher Luther", handle: "chriscantlose", page: "a-group-of-people-walking-down-a-street-next-to-tall-buildings--C5PDqNnILM" },
  worldwide: { id: "photo-1663160055679-7b7fecb4468f", alt: "The Earth seen from space at night, cities lit up", by: "Kamran Abdullayev", handle: "thekamranzadeh", page: "a-view-of-the-earth-from-space-okkwqpKX2qw" },
  country: { id: "photo-1602994474488-294ce92e0379", alt: "Aerial view of a city at dusk", by: "Ken Cheung", handle: "kencheungphoto", page: "aerial-view-of-city-buildings-during-night-time-Y8rPL2GJyfM" },
  channel: { id: "photo-1673767296863-c00f139e4be8", alt: "A creator recording at a desk with a microphone and laptop under pink and purple light", by: "Videodeck .co", handle: "videodeck", page: "a-woman-sitting-in-front-of-a-laptop-computer-4s_0zZKmMgA" },
  music: { id: "photo-1603757981609-9aa146d91fb0", alt: "A performer holding a glowing light tube on a music video set", by: "Tyler Casey", handle: "tylercaseyprod", page: "man-in-black-crew-neck-t-shirt-holding-white-and-red-rod-EINdJQ8wTbk" },
  live: { id: "photo-1574155088851-0c770818ba40", alt: "A crowd under blue stage lights at a live event", by: "A J.", handle: "antoinejulien", page: "people-gathering-in-a-party-during-night-time-2oyv4Ue28Qg" },
  brand: { id: "photo-1676918324871-ec94b1bfa59d", alt: "A close-up of a bright, many-coloured palette", by: "melanfolia", handle: "melanfolia", page: "a-close-up-of-a-palette-of-paint-GPWTeAU1i4M" },
  enterprise: { id: "photo-1705909770198-7e83c24e1616", alt: "A calm, modern office with desks and chairs", by: "mahmoud azmy", handle: "mahmoud_azmy", page: "a-desk-with-a-chair-and-a-laptop-on-it-ysoj_iZxfd0" },
  studio: { id: "photo-1601506521937-0121a7fc2a6b", alt: "A camera operator on a blue-lit production set", by: "Kyle Loftus", handle: "kyleloftusstudios", page: "man-in-green-and-brown-camouflage-jacket-holding-black-video-camera-3UcQtXSvA88" },
  set: { id: "photo-1497015289639-54688650d173", alt: "A camera on a tripod filming a person in front of a bookshelf", by: "Sam McGhee", handle: "sammcghee", page: "person-sitting-in-front-bookshelf-KieCLNzKoBo" },
  camera: { id: "photo-1605501492805-f5699f0718d5", alt: "A videographer filming under red light", by: "Osarugue Igbinoba", handle: "osarugue", page: "man-in-black-jacket-holding-black-dslr-camera-FpWaEa2_d5w" },
  stage: { id: "photo-1791337163469-09b8e8ad3914", alt: "Two performers in colourful tracksuits on a lit stage", by: "Ocho Artex Media", handle: "ochoartex", page: "two-men-in-tracksuits-talking-wDTwLKbTJH8" },
  concert: { id: "photo-1714589334427-fb015b709c51", alt: "A band silhouetted on a red-lit stage", by: "Gabriel Benois", handle: "gabrielbenois", page: "a-group-of-people-standing-on-top-of-a-stage-3-cXlUsL6Os" },
  creator: { id: "photo-1673767297196-ce9739933932", alt: "A creator holding a clapperboard in a home studio", by: "Videodeck .co", handle: "videodeck", page: "a-woman-holding-a-movie-clapper-next-to-a-plant-eWbixs2Xh5s" },
  phones: { id: "photo-1766353846550-cd5cd0f6472c", alt: "A person recording a concert on a phone at night", by: "selcuk sarikoz", handle: "funnyturkishdude", page: "person-records-concert-with-smartphone-at-night-with-phone-DQYlRVv3eY0" },
  street: { id: "photo-1611920132872-0ccdcd9e54ee", alt: "Long-exposure light trails through a city at night", by: "Dean Amir Hussain", handle: "deanamirhussain", page: "time-lapse-photography-of-cars-on-road-during-night-time-TVRq6p7JOnc" },
  globe: { id: "photo-1451187580459-43490279c0fa", alt: "Earth from orbit with city lights and a network of connections", by: "NASA", handle: "nasa", page: "photo-of-outer-space-Q1p7bh3SHj8" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const photoUrl = (p: Photo, w: number) =>
  `https://images.unsplash.com/${p.id}?auto=format&fit=crop&w=${w}&q=75`;
