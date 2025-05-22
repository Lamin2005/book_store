import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";

//Book Names and Book Authors

let bn1 = "Ma Shi Ma Pyat Moe";
export let ba1 = "Jue";
let bn2 = "Ma Ma";
export let ba2 = "Mya Than Tint";
let bn3 = "Nyint";
export let ba3 = "Khin Kaung";
let bn4 = "Kin Ma Li";
export let ba4 = "Mg Tun Thu";
let bn5 = "Wild Orchid";
let ba5 = "Aung Lin";
let bn6 = "A Mark Ta Ya";


export const defaultBook = [
  {
    bid: Math.random().toString(),
    bname: bn1,
    bprice: "32000",
    bauthor: ba1,
    byear: "2013-05-08",
    bquality: "5",
    bimg: b1,
    date:new Date().toLocaleString(),
    bdescription: "Jue Ray’s *Ma Shi Ma Pyat Moe* is likely a contemplative novel that draws parallels between the inevitability of rain and the struggles inherent in human existence. While specific details are unavailable, the title suggests a narrative where rain serves as both a literal and metaphorical force—nourishing life while exposing vulnerabilities.",
  },

  {
    bid: Math.random().toString(),
    bname: bn2,
    bprice: "40000",
    bauthor: ba2,
    byear: "2012-05-08",
    bquality: "5",
    bimg: b4,
    date:new Date().toLocaleString(),
    bdescription: "Mya Than Tint’s *Ma Ma* is presumed to be a heartfelt narrative exploring the complexities of maternal bonds, societal expectations, and familial sacrifices within a Burmese context. Drawing from the author’s signature style, the novel likely delves into the emotional and socio-economic struggles faced by women in rural or urban Myanmar.",
  },

  {
    bid: Math.random().toString(),
    bname: bn3,
    bprice: "35000",
    bauthor: ba3,
    byear: "2012-04-03",
    bquality: "5",
    bimg: b3,
    date:new Date().toLocaleString(),
    bdescription: "Khin Kaung’s *Nyint* is likely a contemplative novel that examines the weight of unspoken emotions and societal pressures in Myanmar’s cultural context. The title *Silence* suggests a narrative where quietude—both internal and external—serves as a central metaphor for unresolved pain, repressed voices, or collective complicity in social injustices.",
  },

  {
    bid: Math.random().toString(),
    bname: bn4,
    bprice: "25000",
    bauthor: ba4,
    byear: "2011-07-09",
    bquality: "5",
    bimg: b2,
    date:new Date().toLocaleString(),
    bdescription: "Maung Htun Thu’s *Kin Ma Li* is likely a mythological fiction that reimagines the legendary Kinnari—a half-human, half-bird creature from Burmese folklore—as a symbol of freedom, identity, and transcendence. The story may blend magical realism with social commentary, exploring themes of belonging and cultural preservation in a rapidly changing world.",
  },

  {
    bid: Math.random().toString(),
    bname: bn5,
    bprice: "30000",
    bauthor: ba5,
    byear: "2011-05-08",
    bquality: "5",
    bimg: b5,
    date:new Date().toLocaleString(),
    bdescription: "Aung Lin’s *Wild Orchid* is a poignant exploration of rural life’s raw beauty and the complexities of human adaptation in the face of modernity. Set against the lush backdrop of a Myanmar village, the novel weaves a narrative rich in cultural authenticity and emotional depth, centered on themes of identity, tradition, and existential longing."
  },

  {
    bid: Math.random().toString(),
    bname: bn6,
    bprice: "31000",
    bauthor: ba1,
    byear: "2014-08-03",
    bquality: "5",
    bimg: b6,
    date:new Date().toLocaleString(),
    bdescription: "Jue’s *Memories* is likely a contemplative novel centered on themes of nostalgia, personal loss, and the enduring power of human connections. The title suggests a narrative woven through fragmented recollections, where the past and present collide to reveal emotional truths. Drawing from the author’s potential focus on intimate storytelling, the book might explore how memories—both cherished and painful—shape identity and relationships in a Myanmar context.",
  },
];
