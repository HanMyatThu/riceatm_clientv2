const townships = [
    {
        "id": 1,
        "value": "Ahlon",
        "text": "အလုံမြို့နယ်"
    },
    {
        "id": 2,
        "value": "Bahan",
        "text": "ဗဟန်းမြို့နယ်"
    },
    {
        "id": 3,
        "value": "Botahtaung",
        "text": "ဗိုလ်တထောင်မြို့နယ်"
    },
    {
        "id": 4,
        "value": "Cocokyun",
        "text": "ကိုကိုးကျွန်းမြို့နယ်"
    },
    {
        "id": 5,
        "value": "Dagon",
        "text": "ဒဂုံမြို့နယ်"
    },
    {
        "id": 6,
        "value": "Dagon Myothit(East)",
        "text": "အရှေ့ဒဂုံမြို့နယ်"
    },
    {
        "id": 7,
        "value": "Dagon Myothit(North)",
        "text": "မြောက်ဒဂုံမြို့နယ်"
    },
    {
        "id": 8,
        "value": "Dagon Myothit(Seikkan)",
        "text": "ဒဂုံဆိပ်ကမ်းမြို့နယ်"
    },
    {
        "id": 9,
        "value": "Dagon Myothit(South)",
        "text": "တောင်ဒဂုံမြို့နယ်"
    },
    {
        "id": 10,
        "value": "Dala",
        "text": "ဒလမြို့နယ်"
    },
    {
        "id": 11,
        "value": "Dawbon",
        "text": "ဒေါပုံမြို့နယ်"
    },
    {
        "id": 12,
        "value": "Hlaing",
        "text": "လှိုင်မြို့နယ်	"
    },
    {
        "id": 13,
        "value": "Hlaingtharya",
        "text": "လှိုင်သာယာမြို့နယ်"
    },
    {
        "id": 14,
        "value": "Hlegu",
        "text": "လှည်းကူးမြို့နယ်"
    },
    {
        "id": 15,
        "value": "Hmawbi",
        "text": "မှော်ဘီမြို့နယ်"
    },
    {
        "id": 16,
        "value": "Htantabin",
        "text": "ထန်းတပင်မြို့နယ်"
    },
    {
        "id": 17,
        "value": "Insein",
        "text": "အင်းစိန်မြို့နယ်"
    },
    {
        "id": 18,
        "value": "Kamaryut",
        "text": "ကမာရွတ်မြို့နယ်"
    },
    {
        "id": 19,
        "value": "Kawhmu",
        "text": "ကော့မှူးမြို့နယ်"
    },
    {
        "id": 20,
        "value": "Kayan",
        "text": "ကရန်မြို့နယ်"
    },
    {
        "id": 21,
        "value": "Kungyangon",
        "text": "ကွင်းခြံကုန်းမြို့နယ်"
    },
    {
        "id": 22,
        "value": "Kyauktada",
        "text": "ကျောက်တံတားမြို့နယ်"
    },
    {
        "id": 23,
        "value": "Kyeemyindaing",
        "text": "ကြည့်မြင်တိုင်မြို့နယ်"
    },
    {
        "id": 24,
        "value": "Lanmadaw",
        "text": "လမ်းမတော်မြို့နယ်"
    },
    {
        "id": 25,
        "value": "Latha",
        "text": "လသာမြို့နယ်"
    },
    {
        "id": 26,
        "value": "Mayangone",
        "text": "မရမ်းကုန်မြို့နယ်"
    },
    {
        "id": 27,
        "value": "Mingaladon",
        "text": "မင်္ဂလာဒုံမြို့နယ်"
    },
    {
        "id": 28,
        "value": "Mingalar taungnyunt",
        "text": "မင်္ဂလာတောင်ညွန့်မြို့နယ်"
    },
    {
        "id": 29,
        "value": "North Okkalapa",
        "text": "မြောက်ဥက္ကလာမြို့နယ်"
    },
    {
        "id": 30,
        "value": "Pabedan",
        "text": "ပန်းပဲတန်းမြို့နယ်"
    },
    {
        "id": 31,
        "value": "Pazundaung",
        "text": "ပုဇွန်တောင်မြို့နယ်"
    },
    {
        "id": 32,
        "value": "Sanchaung",
        "text": "စမ်းချောင်းမြို့နယ်"
    },
    {
        "id": 33,
        "value": "Seikkan",
        "text": "ဆိပ်ကမ်းမြို့နယ်"
    },
    {
        "id": 34,
        "value": "Shwepyithar",
        "text": "ရွှေပြည်သာမြို့နယ်"
    },
    {
        "id": 35,
        "value": "South Okkalapa",
        "text": "တောင်ဥက္ကလာမြို့နယ်"
    },
    {
        "id": 36,
        "value": "Seikgyikanaungto",
        "text": "ဆိပ်ကြီးကနောင်တိုမြို့နယ်"
    },
    {
        "id": 37,
        "value": "Taikkyi",
        "text": "တိုက်ကြီးမြို့နယ်"
    },
    {
        "id": 38,
        "value": "Tamwe",
        "text": "တာမွေမြို့နယ်"
    },
    {
        "id": 39,
        "value": "Thaketa",
        "text": "သာကေသမြို့နယ်"
    },
    {
        "id": 40,
        "value": "Thanlyin",
        "text": "သန်လျင်မြို့နယ်"
    },
    {
        "id": 41,
        "value": "Thingangkuun",
        "text": "သင်္ဃန်းကျွန်း"
    },
    {
        "id": 42,
        "value": "Thongwa",
        "text": "သုံးခွမြို့နယ်"
    },
    
    {
        "id": 43,
        "value": "Twantay",
        "text": "တွန်တေးမြို့နယ်"
    },
    
    {
        "id": 44,
        "value": "Yankin",
        "text": "ရန်ကင်းမြို့နယ်"
    },
    
    
]

export default townships